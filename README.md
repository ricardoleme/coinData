## Project: coindata

**Description**

This Node.js script, named `coindata`, retrieves market data for the top 10 cryptocurrencies by market capitalization from the CoinGecko API (https://www.coingecko.com/en/api). The data includes:

- Coin names and symbols
- Current market capitalization
- Current market prices in USD
- Sparkline data for price visualization (optional, based on API response)

**Features**

- Fetches data from a reliable and well-documented API
- Retrieves information on the top 10 most valuable cryptocurrencies
- Sorts results by market capitalization in descending order
- Includes sparkline data for basic price visualization (subject to API availability)

**Requirements**

- Node.js and npm (or yarn) installed on your system

**Installation**

1. Clone or download this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` (or `yarn install`) to install the required dependency (`node-fetch`).

**Usage**

1. Run `node index.js` to fetch and display the market data in the console.

**Project Structure**
````
coindata/
├── index.js  # Main script for fetching and processing data
└── package.json  # Project metadata and dependencies
````
**License**

This project is licensed under the MIT License (see `LICENSE` file for details).

**Author**

Ricardo Leme

**Dependencies**

- `node-fetch`: Used for making HTTP requests to the CoinGecko API.

**Additional Notes**

- The script currently outputs the fetched data to the console. You can modify it to save the data to a file, display it in a graphical user interface, or integrate it with other applications.
- Consider adding error handling to gracefully handle potential issues during data fetching or processing.
- Explore the CoinGecko API documentation for additional data points you might want to include or customize the sorting and filtering criteria to suit your needs.
