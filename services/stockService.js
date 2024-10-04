import axios from 'axios';
import { log, error } from '../utils/logger.js';
import { config } from '../config/config.js';

export const getStockPrice = async () => {
    try {
        // Fetch stock price from Finnhub API
        const response = await axios.get(`https://finnhub.io/api/v1/quote`, {
            params: {
                symbol: 'AAPL',
                token: config.FINNHUB_API_KEY, 
            },
        });

        const stockPrice = response.data.c; 
        log(`Fetched stock price from Finnhub: $${stockPrice}`);
        return stockPrice;
    } catch (err) {
        error(`Error fetching stock price from Finnhub API: ${err.message}`);
        throw err;
    }
};
