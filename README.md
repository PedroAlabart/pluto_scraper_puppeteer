# Pluto TV Scraping Task

Pluto TV is a streaming television service that offers a wide variety of series, movies, and diverse channels.

## Steps to run

- Install Node.js
- Install Puppeteer:
  - `npm i puppeteer`
- To run both scrapers:
  - `node main.js`
- To run only one of them scrapers:
  - `node main.js live`
  - `node main.js on_demand`
- The scraped data will be saved under two json files:
  - `live_tv.json`
  - `on_demand_scraped.json`

## Efficency Information
![Scraping time and Number of Records](https://github.com/PedroAlabart/pluto_scraper_puppeteer/blob/main/img/scraping_timer.png?raw=true)

- Live TV - Scraping Time: 14.205s (ss.mmm) / Channels Scraped:  80
- On Demand - Scraping Time: 7:48.754 (m:ss.mmm) / Media Scraped:  965

## Main Files
- `main.js`: Contains a function to run the two files below.
- `live_tv_scraper.js`: Contains the script to scrape the Live TV section of Pluto.
- `on_demand_scraper.js`: Contains the script to scrape the On Demand section of Pluto.
## General Notes


- The scraping time and the number of records retrieved varied between runs. This variation could be due to my internet connection and the speed at which the dynamic content loads.
- Pluto's Terms of Service state that scraping their content is illegal.
- The running time and the number of scraped records fluctuate significantly between runs.

## Data Scraped for the On-Demand section

- **Title**
- **URL**
- **Type** (movies or series)
- **Genre**
- **Synopsis**
- **Duration**

## Data Scraped for the Live TV section

- **Channel Name**

## Improvements I Would Make with More Time

- Further modularize the code.
- Fix the duration for series, as it's currently returning 0 seasons for every record.
- Redo `on_demand_scraper.js`. I started this project by creating this script, but by the time I finished `live_tv_scraper.js`, I had gained a lot of knowledge about things I could have done differently on the former.

