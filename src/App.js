import React from 'react'
import * as BooksAPI from './BooksAPI'
import {getAll} from './BooksAPI'
import './App.css'
import SearchPage from './components/SearchPage.js'
import Bookshelf from './components/Bookshelf.js'
import Book from './components/Book.js'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books:[]
  }
   componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? 
          <SearchPage/> 
          : 

          (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf 
                  title='Currently Reading'
                  books={this.state.books.filter(book => book.shelf === 'currentlyReading')}/>
                <Bookshelf 
                  title='Want to Read'
                  books={this.state.books.filter(book => book.shelf === 'wantToRead')}/>
                <Bookshelf 
                  title='Read'
                  books={this.state.books.filter(book => book.shelf === 'read')}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
