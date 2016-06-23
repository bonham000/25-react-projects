
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 3,
      input: '',
      data: [],
      tableDisplay: 'none'
    };
  }
  adjustRange(event) {
    console.log(typeof parseInt(event.target.value));
    this.setState({
      count: parseInt(event.target.value)
    })
  }
  handleInput(event) {
    this.setState({
      input: event.target.value
    })
  }
  handleSearch(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + this.state.input + '&limit=50&format=json',
      type: "GET",
      dataType: 'jsonp',
      success: function(response) {
        var titles = response[1];
        var snippets = response[2];
        var urls = response[3];
        var data = [];
        for (var i = 0; i < 50; i++) {
          data[i] = [response[1][i], response[2][i], response[3][i]];
        }
        this.setState({input: '', data: data, tableDisplay: "block"});
      }.bind(this)
    });
  }
  render() {
    return (
      <div>
        <h1 className = "title">Wikipedia Viewer</h1>
        <SearchContainer
          input = {this.state.input}
          handleInput = {this.handleInput.bind(this)}
          search = {this.handleSearch.bind(this)} />
        <input
          style = {{width: "400px"}}
          type = "range"
          min = "3"
          max = "50"
          value = {this.state.count}
          onChange = {this.adjustRange.bind(this)} />
        <span className = "counter">count: {this.state.count}</span>
        <ResultsContainer
          data = {this.state.data}
          count = {this.state.count}
          tableDisplay = {this.state.tableDisplay} />
      </div>
      );
  }
};

class SearchContainer extends React.Component {
  randomArticle() {
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  }
  render() {
    return (
        <div>
          <p className = "subtitle">Search Wikipedia:</p>
          <form onSubmit = {this.props.search.bind(this)}>
            <input
              className = "inputBox"
              type = "text"
              placeholder = "Type here..."
              value = {this.props.input}
              onChange = {this.props.handleInput.bind(this)}
              autoFocus />
            <button className = "submitBtn">Submit Search</button>
          </form>
          <button className = "randomBtn" onClick = {this.randomArticle}>or generate a random article</button>
        </div>
      )
  }
};

class ResultsContainer extends React.Component {
  openLink(value) {
    window.open(value);
  }
  render() {
    var data = this.props.data.slice(0, this.props.count);
    var results = '';
    if (data.length > 0) {  
      results = data.map(function(result) {
        return (
            <tr className = "resultBox" onClick = {this.openLink.bind(null, result[2])}>
              <td className = "titleCol">{result[0]}</td>
              <td className = "infoCol">{result[1]}</td>
            </tr>
          )
      }.bind(this));
    }
    var tableHeadStyle = {
      display: this.props.tableDisplay
    }
    return (
        <div className = "resultsContainer">
          <table style = {tableHeadStyle}>
            <tr className = "resultHead">
              <th className = "titleHead">Article Title</th>
              <th className = "infoHead">Snippet (click to view article)</th>
            </tr>
          </table>
          <table>
            {results}
          </table>
        </div>
      )
  }
};

ReactDOM.render(<Root />, document.getElementById('main'));