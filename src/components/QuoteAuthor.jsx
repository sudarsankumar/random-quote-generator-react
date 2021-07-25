import React, { Component } from 'react'
import Footer from './Footer'
import './QuoteAuthor.css'
class QuoteAuthor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quoteArray : [],
            url : `https://quotable.io/quotes?author=${this.props.author}`
        }
        console.log(this.props.author)
    }
    componentDidMount()
    {
        fetch(this.state.url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data.results[1].content)
            let arr = []
            for(var i = 0;i<data.results.length;i++)
            {
                arr.push(data.results[i].content)
            }
            console.log(arr)
            this.setState({
                quoteArray : arr
            })
            console.log(this.state.quoteArray)
        })
    }
    
    render() {
        return (
            <div className="quote-author-container">
                <h1>{this.props.author}</h1>
                <div className="quote-author-center">
                    <div className="quote-author">
                        {this.state.quoteArray.map((quote, index) => (
                            <div key={index} className="quotes-author">{quote}</div>
                        ))}
                    </div>
                </div>
                {this.state.click ? <Footer /> : null}
            </div>
        )
    }
}

export default QuoteAuthor