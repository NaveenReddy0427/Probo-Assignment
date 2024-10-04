import { config } from './config/config.js';
import { runTradingBot } from './controllers/tradingController.js';
import { log } from './utils/logger.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());

app.get('/start', (req, res) => {
    res.status(200).send({ message: 'Trading bot is running!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
});


const interval = setInterval(runTradingBot, config.TRADING_INTERVAL_MS);

// Stop the bot after some time (for demo purposes)
setTimeout(() => {
    clearInterval(interval);
    log('Trading bot stopped.');
}, config.BOT_DURATION_MS);
