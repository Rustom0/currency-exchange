# currency-exchange
# Currency Exchange

This is a simple currency exchange web application that allows users to convert currencies using real-time exchange rates fetched from an API. The project is built with HTML, CSS, and JavaScript.

## Features
- Fetches currency exchange rates from an API
- Allows users to select source and target currencies
- Real-time conversion calculation
- Simple and responsive user interface

## Technologies Used
- HTML
- CSS
- JavaScript
- [https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/USD_TRY.json]

  
## API Integration
This project fetches exchange rate data from a third-party API

Example API request:
```javascript
fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
  .then(response => response.json())
  .then(data => console.log(data));
```

This project uses the Exchange Rate API to fetch currency conversion rates. Special thanks to https://github.com/WoXy-Sensei/currency-api.


Feel free to contribute or suggest improvements!

