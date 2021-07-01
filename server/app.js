const express = require('express');
const { graphqlHTTP} = require('express-graphql');
const Schema = require('./schema/schema')

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: Schema,graphiql:true
}))

app.listen(4001,()=>{
    console.log('Listening to http://localhost:000');
})