# DomainFork data

A daily archive of Malaysian time series kept by [DomainFork](https://domainfork.com/data/series): policy and interbank rates, ringgit exchange rates, the Kijang Emas gold coin, fuel prices, market closes and the issues the news covers.
One file per series in `series/`, one line per day: `date,series,value,unit`. Nothing is ever deleted; a figure a source restates is replaced by the restated value.

- **Licence:** free to use with credit to DomainFork and the original source (CC BY 4.0).
- **Check this copy:** `chain.json` is the public hash chain of the archive (also at https://domainfork.com/api/data/chain). Each entry hashes the whole store and the entry before it.
- **Fork it, host it elsewhere:** this repository is a full copy with its whole history. The archive does not depend on any one host.
- **Web page:** https://dracodracodraco.github.io/domainfork-data/

Updated 2026-11-09: 63 series, about 262 points.

## currencies

- [UAE dirham (AED)](series/bnm.fx.aed.csv): 1 points, 2026-11-06 to 2026-11-06, latest 1.1051739999999999 RM per 1 AED
- [Australian dollar (AUD)](series/bnm.fx.aud.csv): 1 points, 2026-11-06 to 2026-11-06, latest 2.7908 RM per 1 AUD
- [Brunei dollar (BND)](series/bnm.fx.bnd.csv): 1 points, 2026-11-06 to 2026-11-06, latest 3.1688 RM per 1 BND
- [Canadian dollar (CAD)](series/bnm.fx.cad.csv): 1 points, 2026-11-06 to 2026-11-06, latest 2.8842 RM per 1 CAD
- [Swiss franc (CHF)](series/bnm.fx.chf.csv): 1 points, 2026-11-06 to 2026-11-06, latest 4.96 RM per 1 CHF
- [Chinese yuan (CNY)](series/bnm.fx.cny.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.6085 RM per 1 CNY
- [Egyptian pound (EGP)](series/bnm.fx.egp.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.0754 RM per 1 EGP
- [Euro (EUR)](series/bnm.fx.eur.csv): 27 points, 2026-10-01 to 2026-11-06, latest 4.5373 RM per 1 EUR
- [British pound (GBP)](series/bnm.fx.gbp.csv): 1 points, 2026-11-06 to 2026-11-06, latest 5.4357 RM per 1 GBP
- [Hong Kong dollar (HKD)](series/bnm.fx.hkd.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.517658 RM per 1 HKD
- [Indonesian rupiah (IDR)](series/bnm.fx.idr.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.000224 RM per 1 IDR
- [Indian rupee (INR)](series/bnm.fx.inr.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.043193999999999996 RM per 1 INR
- [Japanese yen (JPY)](series/bnm.fx.jpy.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.025661999999999997 RM per 1 JPY
- [Cambodian riel (KHR)](series/bnm.fx.khr.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.000992 RM per 1 KHR
- [South Korean won (KRW)](series/bnm.fx.krw.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.002996 RM per 1 KRW
- [Myanmar kyat (MMK)](series/bnm.fx.mmk.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.001939 RM per 1 MMK
- [Nepalese rupee (NPR)](series/bnm.fx.npr.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.026996000000000003 RM per 1 NPR
- [New Zealand dollar (NZD)](series/bnm.fx.nzd.csv): 1 points, 2026-11-06 to 2026-11-06, latest 2.2504 RM per 1 NZD
- [Philippine peso (PHP)](series/bnm.fx.php.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.064398 RM per 1 PHP
- [Pakistani rupee (PKR)](series/bnm.fx.pkr.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.014675 RM per 1 PKR
- [Saudi riyal (SAR)](series/bnm.fx.sar.csv): 1 points, 2026-11-06 to 2026-11-06, latest 1.081324 RM per 1 SAR
- [Singapore dollar (SGD)](series/bnm.fx.sgd.csv): 27 points, 2026-10-01 to 2026-11-06, latest 3.1688 RM per 1 SGD
- [Thai baht (THB)](series/bnm.fx.thb.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.12100799999999999 RM per 1 THB
- [Taiwan dollar (TWD)](series/bnm.fx.twd.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.123829 RM per 1 TWD
- [US dollar (USD)](series/bnm.fx.usd.csv): 27 points, 2026-10-01 to 2026-11-06, latest 4.0588 RM per 1 USD
- [Vietnamese dong (VND)](series/bnm.fx.vnd.csv): 1 points, 2026-11-06 to 2026-11-06, latest 0.00015900000000000002 RM per 1 VND

## commodities

- [Kijang Emas, 1 oz, buying price](series/bnm.kijang.oz1.buying.csv): 27 points, 2026-10-01 to 2026-11-06, latest 16870 RM
- [Kijang Emas, 1 oz, selling price](series/bnm.kijang.oz1.selling.csv): 27 points, 2026-10-01 to 2026-11-06, latest 17575 RM

## rates

- [Interbank rate, 1 month](series/bnm.mm.1m.csv): 1 points, 2026-11-06 to 2026-11-06, latest 2.99 %
- [Interbank rate, 1 week](series/bnm.mm.1w.csv): 1 points, 2026-11-06 to 2026-11-06, latest 2.85 %
- [Interbank rate, 3 months](series/bnm.mm.3m.csv): 1 points, 2026-11-06 to 2026-11-06, latest 3.58 %
- [Interbank rate, overnight](series/bnm.mm.overnight.csv): 1 points, 2026-11-06 to 2026-11-06, latest 2.75 %
- [Overnight Policy Rate (OPR)](series/bnm.opr.level.csv): 16 points, 2024-01-24 to 2026-09-03, latest 2.75 %

## markets

- [Bitcoin](series/market.bitcoin.csv): 2 points, 2026-11-08 to 2026-11-09, latest 74088.87 price
- [Brent](series/market.brent.csv): 2 points, 2026-11-07 to 2026-11-09, latest 96.82 price
- [Fbm Klci](series/market.fbm-klci.csv): 1 points, 2026-11-06 to 2026-11-06, latest 1616.58 price
- [Gold](series/market.gold.csv): 2 points, 2026-11-07 to 2026-11-09, latest 4098.7 price
- [Hang Seng](series/market.hang-seng.csv): 2 points, 2026-11-06 to 2026-11-09, latest 24448.95 price
- [Nikkei 225](series/market.nikkei-225.csv): 2 points, 2026-11-06 to 2026-11-09, latest 58775.5 price
- [S P 500](series/market.s-p-500.csv): 1 points, 2026-11-07 to 2026-11-07, latest 7376.86 price
- [Straits Times](series/market.straits-times.csv): 1 points, 2026-11-06 to 2026-11-06, latest 5179.17 price
- [Usd Myr](series/market.usd-myr.csv): 2 points, 2026-11-08 to 2026-11-09, latest 4.0582 price

## fuel

- [Diesel pump price](series/my.fuel.diesel.csv): 13 points, 2026-08-13 to 2026-11-05, latest 5.12 RM per litre
- [RON95 pump price](series/my.fuel.ron95.csv): 13 points, 2026-08-13 to 2026-11-05, latest 4.27 RM per litre
- [RON97 pump price](series/my.fuel.ron97.csv): 13 points, 2026-08-13 to 2026-11-05, latest 4.7 RM per litre

## topics

- [Anwar: reports a day touching cost](series/topic.anwar.issue-cost.csv): 1 points, 2026-11-07 to 2026-11-07, latest 1 reports
- [Anwar: reports a day touching integrity](series/topic.anwar.issue-integrity.csv): 1 points, 2026-11-07 to 2026-11-07, latest 3 reports
- [Anwar: reports a day touching jobs](series/topic.anwar.issue-jobs.csv): 1 points, 2026-11-07 to 2026-11-07, latest 3 reports
- [Anwar: reports a day](series/topic.anwar.stories.csv): 3 points, 2026-11-07 to 2026-11-09, latest 1 reports
- [Banjir: reports a day touching aid](series/topic.banjir.issue-aid.csv): 2 points, 2026-11-07 to 2026-11-08, latest 1 reports
- [Banjir: reports a day touching evacuation](series/topic.banjir.issue-evacuation.csv): 3 points, 2026-11-07 to 2026-11-09, latest 2 reports
- [Banjir: reports a day touching health](series/topic.banjir.issue-health.csv): 1 points, 2026-11-08 to 2026-11-08, latest 1 reports
- [Banjir: reports a day touching response](series/topic.banjir.issue-response.csv): 2 points, 2026-11-07 to 2026-11-08, latest 2 reports
- [Banjir: reports a day touching utilities](series/topic.banjir.issue-utilities.csv): 1 points, 2026-11-07 to 2026-11-07, latest 2 reports
- [Banjir: reports a day touching warnings](series/topic.banjir.issue-warnings.csv): 1 points, 2026-11-07 to 2026-11-07, latest 3 reports
- [Banjir: reports a day](series/topic.banjir.stories.csv): 3 points, 2026-11-07 to 2026-11-09, latest 2 reports
- [Melaka: reports a day touching cost](series/topic.melaka.issue-cost.csv): 2 points, 2026-11-07 to 2026-11-08, latest 2 reports
- [Melaka: reports a day touching education](series/topic.melaka.issue-education.csv): 1 points, 2026-11-07 to 2026-11-07, latest 1 reports
- [Melaka: reports a day touching housing](series/topic.melaka.issue-housing.csv): 1 points, 2026-11-07 to 2026-11-07, latest 1 reports
- [Melaka: reports a day touching integrity](series/topic.melaka.issue-integrity.csv): 1 points, 2026-11-07 to 2026-11-07, latest 1 reports
- [Melaka: reports a day touching jobs](series/topic.melaka.issue-jobs.csv): 2 points, 2026-11-07 to 2026-11-08, latest 1 reports
- [Melaka: reports a day touching tourism](series/topic.melaka.issue-tourism.csv): 1 points, 2026-11-09 to 2026-11-09, latest 1 reports
- [Melaka: reports a day](series/topic.melaka.stories.csv): 3 points, 2026-11-07 to 2026-11-09, latest 3 reports
