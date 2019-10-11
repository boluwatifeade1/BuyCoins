const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const Schema = require('./src/schema');

app.use('/graphql', graphqlHTTP({
  schema: Schema.schema,
  rootValue: Schema.root,
  graphiql: true,
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));