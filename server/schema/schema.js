const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString,GraphQLSchema } = graphql;


const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Books',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type:GraphQLString},
        genre:{type:GraphQLString}
    })
});


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args: { id: { type: GraphQLString}},
            resolve:(parent,arg)=>{
                return _.find(books,{id:arg.id});
            }
        },
        allbooks:{
            type: BookType,
            args: {},
            resolve: (parent)=>{
                return books;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})