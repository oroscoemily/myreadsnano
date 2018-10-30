import React from "react";
import * as BooksAPI from "./BooksAPI";
import { getAll } from "./BooksAPI";
import "./App.css";
import SearchPage from "./components/SearchPage.js";
import Bookshelf from "./components/Bookshelf.js";
import Book from "./components/Book.js";
import { Switch, Route } from 'react-router'
import HomePage from './components/HomePage.js'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books:[]
  }
   componentDidMount() {
    console.log(BooksAPI.getAll())
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

changeShelf = (book, evt) => {
    console.log(book, evt.target.value);
    const shelf = evt.target.value;
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then(books => {
        this.setState({
          books: books
        });
      });
    });
  };  


  render() {
    return (

      <div className="app">
      <Switch>
        <Route exact path = '/' render={() => (<HomePage books={this.state.books} changeShelf={this.changeShelf}/>)} />
        <Route exact path = '/search' render={() => (<SearchPage books={this.state.books} changeShelf={this.changeShelf}/>)}/>
      </Switch>
      </div>
    )
  }
}

export default BooksApp
