const { buildSchema } = require('graphql');
const price = require('./utils');

// Schema 
const schema = buildSchema(`
  type Query {
    calculatePrice(type: String! , margin: Float!, exchangeRate: Float! ): [Float]
  }
`);

const root = { 
  calculatePrice: ({type,margin,exchangeRate}) => {
    var margin;
    var exchangeRate;
    var type;
    return [price(type,margin,exchangeRate)];
  }
};

module.exports = {
	schema,
	root
}