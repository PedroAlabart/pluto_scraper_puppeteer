import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
  
    // Navigate the page to a URL
    await page.goto('https://pluto.tv/latam/on-demand');
    await page.setViewport({width: 1920, height: 1080});

    //Loops through the category
    for (let i = 1; i < 100; i++) {
        await page.locator(`ul.categoryList > li:nth-child(${i}) a img`).filter(a => a.classList == "").click()
        const content = await page.evaluate(() =>
            {
                
                const title = document.querySelector('meta[name="description"]').content
                // const duration = document.querySelector("div.inner > div> ul > li:nth-child(5)").innerHTML 
                const url = document.URL
                return category = 
                    {
                        'title':title,
                        // 'duration':duration,
                        'url':url
                    }
            })
        
          console.log(content)
        
        await page.keyboard.press('Escape')
          
        await page.keyboard.press('ArrowDown')
          
        


          

      }

  })();


// FIELDS = 
//   [
//     {name : "Adrenalina Freezone", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/6245e3e75b72240007129448"},
//     {name : "De Hollywood a tu hogar", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/631a0596822bbc000747c340"},
//     {name : "Estrellas de Acción", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/604a66306fb8e0000718b7d5"},
//     {name : "Mujeres Protagonistas", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/6144cbd27bdf170007e1ea12"},
//     {name : "La Mejor Compañía", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/6419c584dbdaaa000845cad0"},
//     {name : "Cine Acción", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/5e2efdab7606430009a60684"},
//     {name : "Cine Maratón", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/6245bf61a380fd00075eb902"},
//     {name : "Cine Sci-Fi", url: "https://pluto.tv/latam/on-demand/618da9791add6600071d68b0/5e664a3d461ef80007c74a4b"},
// ]