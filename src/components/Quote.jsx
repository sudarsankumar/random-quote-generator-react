import React, { Component } from 'react'
import QuoteAuthor from './QuoteAuthor'
import './Quote.css'

class Quote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            quote : '',
            author : '',
            genre : '',
            click : false,
            display : 'block'
        }
    }

    random = () => {
        fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
            (quotes) => {
                this.setState({
                    quote : quotes.content,
                    author : quotes.author,
                    genre : quotes.tags[0]
                })
            }
        )
        this.setState({
            click : false,
            display : 'block'
        })
    }

    handleClick = () => {
        this.setState({
            click : true,
            display : 'none'
        })
        console.log(this.state.click)
    }
    
    render() {
        return (
            <div className="quote-container">
                <button className="btn" onClick={this.random}>random <i class="fas fa-sync-alt"></i></button>
                <div className="quote-center" style={{display : this.state.display}}>
                    <div className="quote">
                        <div className="Quotes">{this.state.quote}</div>
                        <div className="authors" onClick={this.handleClick}>
                            <div className="author">{this.state.author}</div>
                            <div className="genre">{this.state.genre}</div>
                        </div>
                    </div>
                </div>
                {this.state.click ? <QuoteAuthor author={this.state.author} /> : null}
            </div>
        )
    }
}

export default Quote
