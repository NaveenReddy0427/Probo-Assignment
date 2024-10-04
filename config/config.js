import dotenv from 'dotenv';

dotenv.config();

export const config =  {
    FINNHUB_API_KEY: process.env.FINNHUB_API_KEY,
    TRADING_INTERVAL_MS: process.env.TRADING_INTERVAL_MS || 30000, // 30 seconds 
    BOT_DURATION_MS: process.env.BOT_DURATION_MS || 3600000, // 1 hour
    initialBalance: 1000, // Initial balance for the trading bot
};
