import React from 'react'
import { gql } from '@apollo/client'
const getBooksQuery = gql`{
    books{
    id
    name
    author {
    id
    }
}
}`;

console.log(getBooksQuery);


export default function BookList() {
    return (
        <div>
            <h2>Book List</h2>
            <ul className="bookList">
                <li>Book Name</li>
            </ul>
        </div>
    )
}
