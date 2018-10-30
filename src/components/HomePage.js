import React from "react";
import * as BooksAPI from "../BooksAPI";
import { getAll } from "../BooksAPI";
import "../App.css";
import SearchPage from "./SearchPage.js";
import Bookshelf from "./Bookshelf.js";
import Book from "./Book.js";

class HomePage extends React.Component{
	render(){
		return (<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf 
                  title='Currently Reading'
                  changeShelf={this.changeShelf}
                  books={this.props.books.filter(book => book.shelf === 'currentlyReading')}/>
                <Bookshelf 
                  title='Want to Read'
                  changeShelf={this.changeShelf}
                  books={this.props.books.filter(book => book.shelf === 'wantToRead')}/>
                <Bookshelf 
                  title='Read'
                  changeShelf={this.changeShelf}
                  books={this.props.books.filter(book => book.shelf === 'read')}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>)
	}
}

export default HomePage