import { Security } from './security.interface';

export const SECURITIES: Security[] = [{
  asset_class: 'UK Large-Cap Equity',
  asset_class_type: 'Equity',
  code: 'ISF.L',
  id: 1,
  isin: 'IE0005042456',
  name: 'iShares FTSE 100 UCITS ETF (Dist)',
  return_percent: -0.1
}, {
  asset_class: 'UK Large-Cap Equity',
  asset_class_type: 'Equity',
  code: 'XDUK.L',
  id: 2,
  isin: 'LU0838780707',
  name: 'db x-trackers FTSE 100 UCITS ETF (DR) 1C',
  return_percent: 0.3
}, {
  asset_class: 'UK Large-Cap Equity',
  asset_class_type: 'Equity',
  code: 'VUKE.L',
  id: 3,
  isin: 'IE00B810Q511',
  name: 'Vanguard FTSE 100 UCITS ETF',
  return_percent: -0.4
}, {
  asset_class: 'UK Mid-Cap Equity',
  asset_class_type: 'Equity',
  code: 'XMCX.L',
  id: 4,
  isin: 'LU0292097317',
  name: 'x-trackers FTSE 250 UCITS ETF',
  return_percent: 1
}, {
  asset_class: 'Global Bonds',
  asset_class_type: 'Fixed Income / Bonds',
  code: 'XGSG LN',
  id: 5,
  isin: 'LU0641006290',
  name: 'Xtrackers Global Government Bond ETF GBP Hedged',
  return_percent: -0.01
}, {
  asset_class: 'UK Gilts',
  asset_class_type: 'Fixed Income / Bonds',
  code: 'FIDUKGI LN',
  id: 6,
  isin: 'GB0002051844',
  name: 'Fidelity Institutional UK Gilt Inc',
  return_percent: 0.2
}, {
  asset_class: 'Europe ex UK Large-Cap Equity',
  asset_class_type: 'Equity',
  code: 'VERX.L',
  id: 7,
  isin: 'IE00BKX55S42',
  name: 'Vanguard FTSE Developed Europe ex UK UCITS ETF GBP',
  return_percent: 0.4
}, {
  asset_class: 'UK Property',
  asset_class_type: 'Property',
  code: 'UNKNOWN',
  id: 8,
  isin: 'GB00BK35F390',
  name: 'Legal & General UK Property Feeder Fund I Class Distribution',
  return_percent: 0.1
}]