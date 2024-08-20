import puppeteer from 'puppeteer'
import fs from 'fs'

const timer = "Live TV - Scraping Time"

export async function live_tv_scraper_starter() {
  console.time(timer)

    const browser = await puppeteer.launch({ headless: false })  
    const page = await browser.newPage();
    await page.goto('https://pluto.tv/latam/live-tv/63eb9255c111bc0008fe6ec4');
    await page.setViewport({ width: 1366, height: 768 });

    let scraped = new Set()

    async function load_content(selector){
      await page.waitForSelector(selector)
      let elements = await page.$$(selector);
      return elements
    }
  
    const sections = await load_content('div> ul > li > div > button')
    const elementsSet = new Set()

    for (const section of sections) 
    {
      await section.click();
      const elements = await load_content('div[role="rowheader"] > a');

      for (const element of elements) {
        try {
          //Consigue el link
          const href = `https://pluto.tv/latam${await page.evaluate(el => el.getAttribute('href'), element)}`
          const name = await page.evaluate(el => el.children[1].getAttribute('aria-label'), element)
          elementsSet.add(name)

          
        } catch (error) {
          console.error('Error:', error);
        }
  
      }
    }

    fs.writeFileSync('live_tv.json', JSON.stringify([...elementsSet], null, 2))

    console.timeEnd(timer)
    console.log("Channels Scraped: ", elementsSet.size)
}

