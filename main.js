import { on_demand_scraper_starter } from './on_demand_scraper.js'
import { live_tv_scraper_starter } from './live_tv_scraper.js'

async function main() {
    const args = process.argv.slice(2);

    if (args.includes('live') || args.length === 0) {
        console.log('Starting live TV scraper...');
        await live_tv_scraper_starter();
    }

    if (args.includes('on_demand') || args.length === 0) {
        console.log('Starting on-demand scraper...');
        await on_demand_scraper_starter();
    }

    if (args.length > 0 && !args.includes('live') && !args.includes('on_demand')) {
        console.log('Unknown argument. Please use "live" or "on_demand".');
    }
}

main();