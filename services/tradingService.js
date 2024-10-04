import { config } from '../config/config.js';
import { log } from '../utils/logger.js';

let balance = config.initialBalance; 
let shares = 0; 
let buyPrice = null; 

export const executeTradingStrategy = async (stockPrice) => {
    // Simple strategy: Buy if stock drops by 2%, Sell if it rises by 3%
    if (!buyPrice && stockPrice < 100) {
        // Buy condition (e.g., price is below $100)
        buyShares(stockPrice);
    } else if (buyPrice && stockPrice >= buyPrice * 1.03) {
        // Sell condition (e.g., price increased by 3% after buying)
        sellShares(stockPrice);
    }
};

const buyShares = (stockPrice) => {
    const amountToInvest = balance * 0.5; 
    const sharesToBuy = amountToInvest / stockPrice;

    balance -= amountToInvest;
    shares += sharesToBuy;
    buyPrice = stockPrice;

    log(`Bought ${sharesToBuy.toFixed(2)} shares at $${stockPrice}. New balance: $${balance.toFixed(2)}`);
};

const sellShares = (stockPrice) => {
    const saleProceeds = shares * stockPrice;

    balance += saleProceeds;
    shares = 0;
    buyPrice = null;

    log(`Sold shares at $${stockPrice}. New balance: $${balance.toFixed(2)}`);
};
