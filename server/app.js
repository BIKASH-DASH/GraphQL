const express = require('express');
const { graphqlHTTP} = require('express-graphql');
const Schema = require('./schema/schema')
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bikash:dvPHT1xEqBOiZF8F@cluster0.j6es8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.connection.once("open", () => {
    console.log('---->connection to database opened');
})

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: Schema,graphiql:true
}))

app.listen(4001,()=>{
    console.log('Listening to http://localhost:4001');
})