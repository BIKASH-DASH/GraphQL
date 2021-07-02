const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;


const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorid:1},
    { name: 'The Final Empire', genre: 'Fantasy', id: '2',author:2 },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' ,author:1}
]


const authors = [
    { name: 'Patrick Rothfuss', age: 44, id: "1" },
    { name: 'Brandon Sanderson', age: 42, id: "2" },
    { name: 'Terry Pratchett', age: 66, id: "3" },
]
const BookType = new GraphQLObjectType({
    name: 'Books',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type:GraphQLString},
        genre: { type: GraphQLString},
        author: { 
            type: AuthorType,
            resolve: (parent)=>{
                return   _.find(authors,{id:"1"});
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name:"authers",
    fields: () => ({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        age: { type: GraphQLInt},
        books: { type: BookType,resolve: (parent,arg)=>{
            console.log(arg);
            return _.find(books)
        }}
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book:{
            type: BookType,
            args: { id: { type: GraphQLID}},
            resolve:(parent,arg)=>{
                return _.find(books,{id:arg.id});
            }
        },
        author:{
            type: AuthorType,
            args: { id: { type: GraphQLID}},
            resolve: (parent, args)=>{
                return _.find(authors, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})