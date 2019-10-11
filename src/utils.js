const axios = require('axios');

// Function calculates price in naira based on the type argument

module.exports = async (type,margin,exchangeRate) => {
  const priceFloat = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  floatPrice = priceFloat.data.bpi.USD.rate_float ;
  const marginPrice = (margin/100)*(floatPrice)
  if (type === "sell") {
    return (floatPrice - marginPrice)*exchangeRate;
  } else if (type == "buy") {
    return (floatPrice + marginPrice)*exchangeRate;
  }
}
