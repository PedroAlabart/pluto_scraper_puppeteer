import puppeteer from 'puppeteer'
import fs from 'fs'
import { scrape_content } from './on_demand_util.js'

const timer = "On Demand - Scraping Time"

export async function on_demand_scraper_starter(){
    console.time(timer)
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
  
    // Navigate the page to a URL
    await page.goto('https://pluto.tv/latam/on-demand?lang=en')
    await page.setViewport({ width: 1920, height: 1080 })

    await page.locator('ul.categoryList > li a img').filter(a => a.classList == "").click()

    let scraped = new Set()

    
    const initialContent = await scrape_content(page)
    if (initialContent) {
        scraped.add(initialContent)
    }

     //for (let i = 0; i < 200; i++)
      while(true)
        {
        const is_media = await page.evaluate(() => {
            const activeElement = document.activeElement
            
            const firstChild = activeElement.firstElementChild
            
            return firstChild && firstChild.tagName === "IMG"
        })

        const is_end_of_records = await page.evaluate(() => {
            const activeElement = document.activeElement.classList
            
            return activeElement.contains('footer-link-terms_of_use-atc')
        })
        if (is_end_of_records){
            break
        }
        if (is_media) {
            await page.keyboard.press('Enter')
            const initialContent = await scrape_content(page)
            if (initialContent) {
                scraped.add(initialContent)
            }
        }
        
        await page.keyboard.press('Escape')
        await new Promise(r => setTimeout(r, 300))
        await page.keyboard.press('Tab')

        // await new Promise(r => setTimeout(r, 400))
    }

    fs.writeFileSync('on_demand_scraped.json', JSON.stringify([...scraped], null, 2))
    console.timeEnd(timer)
    console.log("Media Scraped: ", scraped.size)

}

// on_demand_scraper_starter()