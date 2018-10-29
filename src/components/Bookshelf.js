import React, {Component} from 'react';
import Book from './Book.js';
import * as BooksAPI from '../BooksAPI';


class Bookshelf extends React.Component{
	render(){
		return (
		<div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.props.books.map(book => (
			                <Book key={book.id} {...book} />
			         ))}
                    </ol>
                  </div>
                </div>
              </div>
            )
	}
}

export default Bookshelf