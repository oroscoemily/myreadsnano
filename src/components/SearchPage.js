import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import {getAll} from '../BooksAPI'
import {search} from '../BooksAPI'
import Book from './Book.js'

class SearchPage extends React.Component{
	state = {
		text: '',
    	books:[]
	}

	componentDidMount(){
		const books =  BooksAPI.getAll();
      	this.props = books
	}

	searchHandler = evt => {
		
		const text = evt.target.value
		this.setState({text})
			if (text){
				const results =  BooksAPI.search(text)
				this.setState({books:results})
				console.log(results)
			}
		}
	

	render(){
		return (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.searchHandler}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books.length > 0 && this.state.books.map(book => {
              		const foundBook = this.props.books.find(searchBook =>
              			searchBook.id == book.id)
              		if (foundBook){
              			book.shelf = foundBook.shelf
              		} else{
              			book.shelf = 'none'
              		}return (<Book {...book} key={book.id} changeShelf={this.props.changeShelf}/>)})
              	}
               </ol>

               
            </div>
          </div>
        )
    }
}


         

	
export default SearchPage