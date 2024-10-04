import { getStockPrice } from '../services/stockService.js';
import { executeTradingStrategy } from '../services/tradingService.js';
import { log } from '../utils/logger.js';

export const runTradingBot = async () => {
    try {
        const stockPrice = await getStockPrice();
        await executeTradingStrategy(stockPrice);
    } catch (err) {
        log(`Error running trading bot: ${err.message}`);
    }
};
