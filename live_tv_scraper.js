import puppeteer from 'puppeteer'

const scraper_starter = async () => {
  console.time()

    const browser = await puppeteer.launch({headless: false})  
    const page = await browser.newPage();
    await page.goto('https://pluto.tv/latam/live-tv/63eb9255c111bc0008fe6ec4');
    await page.setViewport({ width: 1366, height: 768 });

    let scraped = new Set()

    async function load_content(){
      const selector = 'div[role="rowheader"] > a'
      await page.waitForSelector(selector)
      let elements = await page.$$(selector);
      return elements
    }


    let j = 0
    let visited_links = new Set()
    for(let i = 0; i < 100; i++) {
      
      console.log(`${j}`);
      let elements = await load_content()
      if (elements.length == j){
        console.log("Entro al IF de elemnts.lenth")
        let elements = await load_content()
        j = 0
        await page.mouse.wheel({deltaY: 100});
      }
       if (elements[j] && !visited_links.has(elements[j])) {
          
           await elements[j].click();
           await new Promise(r => setTimeout(r, 500)); // Espera 1 segundo
           j++
            const content = await page.evaluate(() => {
                const titleElement = document.querySelector('#overlay-container > div > div > div > section > div > div.inner > h2');
                const title = titleElement ? titleElement.title : 'No title found';
                const url = document.URL
                
                return {
                    'title': title,
                    'url':url
                };
            });
            visited_links.add(content.url)
            console.log(visited_links)
            scraped.add(content)
           await page.keyboard.press('Escape');
       }
  }

    console.timeEnd()
    console.log(scraped)
}
scraper_starter()

