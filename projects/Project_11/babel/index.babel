class Root extends React.Component {
  render() {
    return (
      <div>
        <div className = "title">
          <h1>
            <a target="_blank" href="http://freecodecamp.com">Free Code Camp</a> Quote Machine
          </h1>
        </div>
        <QuoteContainer />
      </div>
      )
  }
}

class QuoteContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: '',
      author: ''
    };
  }
  randomQuote() {    
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(response) {
      this.setState({quote: response.quoteText, author: response.quoteAuthor})
    }.bind(this));
  }
  tweetQuote() {
    var tweet = '';
    if (this.state.author.length === 0) {
      tweet = this.state.quote;
    }
    else {
      tweet = this.state.quote.substr(0, 100) + " — " + this.state.author;
    }
    var left = ( screen.width - 800 ) / 2;
    window.open('http://twitter.com/home?status=' + tweet + ' @freecodecamp','',
      'menubar = no, toolbar = no, resizable = yes, scrollbars = yes, height = 250, width = 800, left = ' + left + ', top = 150');
  }
  componentWillMount() {
    this.randomQuote();
  }
  render() {
    return (
      <div>
        <div className = "buttons">
          <button onClick = {() => this.randomQuote()}>Show me a random quote</button>
          <button onClick = {() => this.tweetQuote()}>Tweet random quote</button>
        </div>
        <QuoteComponent quote = {this.state.quote} author = {this.state.author} />
      </div>
      )
  }
}

class QuoteComponent extends React.Component {
  createQuoteAuthor() {
      if (this.props.author.length === 0) {
        return ''; 
      }
      else {
        return "— " + this.props.author;
      }
  }
  render() {
    return (
      <div className = "quotes">
          <p className = "quoteText">"{this.props.quote}"</p>
          <p className = "quoteAuthor">{this.createQuoteAuthor()}</p>
      </div>
      )
  }
}

ReactDOM.render(<Root />, document.getElementById('main'));


