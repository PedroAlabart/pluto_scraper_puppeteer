# Pluto TV Scraping Task

Pluto TV is a streaming television service that offers a wide variety of series, movies, and diverse channels.

## Requirements

- Install Node.js
- Install Puppeteer:
  - `npm i puppeteer`
- To run both scrapers:
  - `node main.js`
- To run only one of them scrapers:
  - `node main.js live`
  - `node main.js on_demand`

## General Notes
![Scraping time and Number of Records](img\scraping_timer.png)


- The scraping time and the number of records retrieved varied between runs. This variation could be due to my internet connection and the speed at which the dynamic content loads.
- Pluto's Terms of Service state that scraping their content is illegal.
- The running time and the number of scraped records fluctuate significantly between runs.

## Data Scraped for On-Demand Content

- **Title**
- **URL**
- **Type** (movies or series)
- **Genre**
- **Synopsis**
- **Duration**

## Data Scraped for Live TV

- **Channel Name**

## Improvements I Would Make with More Time

- Further modularize the code.
- Fix the duration for series, as it's currently returning 0 seasons for every record.
- Redo `on_demand_scraper.js`. I began by creating the script for this section, but by the time I finished the second script, I had gained a lot of knowledge about things I could have done differently.

