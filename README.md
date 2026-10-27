# CO2 APAC Cleaner

**An interactive carbon-footprint dashboard.** It breaks an organisation's emissions down by segment, energy, waste, water and business travel, and shows how each one changes over time.

## Features

- **Overview** – total emissions over time (bar and line charts) and split by segment (donut chart).
- **Drill-down pages** – Segments, Energy, Waste and Water, each with bar, line and donut views.
- **Personal emissions card** – puts the footprint into an individual's perspective.
- **Sources page** – documents the emission factors and data sources used.
- **PDF report** – the full methodology report, downloadable from the navigation bar.
- Data comes from Excel inputs (`data/Flight Data.xlsx`, `data/Ratios.xlsx`) and is converted into chart-ready series.

## Quick start

```bash
git clone https://github.com/matrac73/APAC_cleaner.git
cd APAC_cleaner
npm install
npm start          # http://localhost:3000
```

Production build:

```bash
npm run build
```

## Project structure

```
src/
  App.tsx                 Overview page layout
  components/
    NavBar.tsx            Navigation (segments, energy, waste, water, sources, report)
    *BarChart.tsx         Bar charts per domain
    *LineChart.tsx        Time series per domain
    *DonutChart.tsx       Breakdown charts per domain
    ExtractCsvData.tsx    Data loading and shaping
data/                     Source spreadsheets
```

## Stack

React 18 · TypeScript · Chart.js (react-chartjs-2) · D3 · React-Bootstrap · React Router

## License

MIT
