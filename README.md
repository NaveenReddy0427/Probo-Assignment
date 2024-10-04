# Trading Bot Application

This is a basic trading bot application developed in Node.js. The bot continuously monitors stock prices and executes trades based on predefined rules and conditions while tracking its profit/loss and performance metrics.

## Features

- Fetches real-time stock prices from the Finnhub API.
- Implements simple trading strategies, such as buying when the stock price drops by 2% and selling when it rises by 3%.
- Tracks the bot's positions, balance, and overall profit/loss.
- Provides a summary report of trades made and the final profit/loss statement.
- Health check endpoint to ensure the bot is running.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- Finnhub API Key (sign up at [Finnhub](https://finnhub.io) to get your API key)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NaveenReddy0427/Probo-Assignment.git
   npm install
   npm start

