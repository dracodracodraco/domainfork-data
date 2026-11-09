// Refreshes this repository from the public DomainFork data API: one CSV per series, the catalogue, the hash chain, a README and a plain web page. It reads only public addresses and holds no secret.
// Run by the scheduled workflow (.github/workflows/update.yml); can be run by anyone: node update.mjs
import fs from "node:fs";

const SITE = process.env.SITE || "https://domainfork.com";
const get = async (url) => {
  const response = await fetch(url, { headers: { "user-agent": "domainfork-data-updater" }, signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`${url} answered ${response.status}`);
  return response;
};
const esc = (text) => String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const index = await (await get(`${SITE}/api/data/index`)).json();
fs.mkdirSync("series", { recursive: true });
let points = 0;
const queue = [...index.series];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const entry = queue.shift();
      try {
        const csv = await (await get(`${SITE}/api/data/series/${entry.key}?format=csv`)).text();
        fs.writeFileSync(`series/${entry.key}.csv`, csv);
        points += Math.max(0, csv.split("\n").length - 2);
      } catch (error) {
        console.log(`skipped ${entry.key}: ${error.message}`);
      }
    }
  }),
);
fs.writeFileSync("index.json", JSON.stringify(index, null, 1));
try {
  fs.writeFileSync("chain.json", JSON.stringify(await (await get(`${SITE}/api/data/chain`)).json(), null, 1));
} catch (error) {
  console.log(`chain not read: ${error.message}`);
}

const today = new Date().toISOString().slice(0, 10);
const groups = new Map();
for (const entry of index.series) groups.set(entry.group || "other", [...(groups.get(entry.group || "other") ?? []), entry]);
fs.writeFileSync(
  "README.md",
  [
    "# DomainFork data",
    "",
    "A daily archive of Malaysian time series kept by [DomainFork](https://domainfork.com/data/series): policy and interbank rates, ringgit exchange rates, the Kijang Emas gold coin, fuel prices, market closes and the issues the news covers.",
    "One file per series in `series/`, one line per day: `date,series,value,unit`. Nothing is ever deleted; a figure a source restates is replaced by the restated value.",
    "",
    "- **Licence:** free to use with credit to DomainFork and the original source (CC BY 4.0).",
    "- **Check this copy:** `chain.json` is the public hash chain of the archive (also at https://domainfork.com/api/data/chain). Each entry hashes the whole store and the entry before it.",
    "- **Fork it, host it elsewhere:** this repository is a full copy with its whole history. The archive does not depend on any one host.",
    "- **Web page:** https://dracodracodraco.github.io/domainfork-data/",
    "",
    `Updated ${today}: ${index.series.length} series, about ${points.toLocaleString("en")} points.`,
    "",
    ...[...groups.entries()].flatMap(([group, entries]) => [`## ${group}`, "", ...entries.map((entry) => `- [${entry.title}](series/${entry.key}.csv): ${entry.points} points, ${entry.first} to ${entry.last}, latest ${entry.latest} ${entry.unit} ([chart and full history](https://domainfork.com/data/series/${entry.key}))`), ""]),
  ].join("\n"),
);
fs.writeFileSync(".nojekyll", "");
fs.writeFileSync(
  "index.html",
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DomainFork data: Malaysian time series, free to download</title><meta name="description" content="A daily archive of Malaysian rates, ringgit exchange rates, gold, fuel prices and markets. Free to download as CSV with credit to DomainFork."><style>body{font:16px/1.5 system-ui,sans-serif;max-width:860px;margin:2rem auto;padding:0 1rem;color:#111}h1{font-size:1.8rem}h2{margin-top:2rem;border-top:3px solid #111;padding-top:.5rem;text-transform:capitalize}li{margin:.25rem 0}small{color:#555}</style></head><body><h1>DomainFork data</h1><p>A daily archive of Malaysian time series, kept by <a href="https://domainfork.com/data/series">DomainFork</a>. One CSV per series, never deleted. Free to use with credit to DomainFork and the original source (CC BY 4.0). Updated ${today}: ${index.series.length} series. Check any copy against the public <a href="chain.json">hash chain</a>.</p>${[...groups.entries()].map(([group, entries]) => `<h2>${esc(group)}</h2><ul>${entries.map((entry) => `<li><a href="series/${esc(entry.key)}.csv">${esc(entry.title)}</a> <small>${entry.points} points, ${esc(entry.first)} to ${esc(entry.last)}, latest ${entry.latest} ${esc(entry.unit)}</small> <a href="https://domainfork.com/data/series/${esc(entry.key)}">chart and full history</a></li>`).join("")}</ul>`).join("")}</body></html>`,
);
console.log(`${index.series.length} series, ${points} points`);
