
class Root extends React.Component {
  render() {
    return (
      <div>
        <CalcComponent />
      </div>
      );
  }
};

class CalcComponent extends React.Component {
    constructor() {
    super();
    this.state = {
      data: ''
    };
  }
  handleChange(event) {
    var currentLength = this.state.data.toString().length;
    var current;
    var update;
    var input = event;
    
    // Check if calculator is in intial state:
    if (currentLength === 0) {
      current = '';
      update = input;
    }

    // Check if current value is less than length length:
    else if ((currentLength > 0) && (currentLength < 20)) {
      current = this.state.data.toString().slice(0);
      update = current.toString() + input.toString();
    }

    // If input is at length limit, do not allow any additions:
    else if (currentLength === 20) {
      input = '';
      update = this.state.data.toString().slice(0);
    }
    
    this.setState({
      data: update
    });
  }
  delete() {
    var deleted = this.state.data.toString().slice(0, this.state.data.toString().length - 1);
    this.setState({
      data: deleted
    });
  }
  clearInput() {
    this.setState({
      data: ''
    });
  }
  evaluate() {
    var expression = this.state.data.slice(0);
    var answer = '';

    try {
      eval(expression);
    } catch (error) {
      if (error instanceof SyntaxError) {
        answer = "Bad syntax!";
      }
    } finally {
        if (answer.length === 0) {
          answer = eval(expression);
        }
    }

    this.setState({
      data: answer
    });
  }
  render() {
    return (
      <div className = "calcWrapper">
        <div className = "case">
          <p className = "title">Javascript Calculator</p>
          <input
            className = "inputField"
            type = "text"
            value = {this.state.data} />
        <CalcDisplay
          input = {this.handleChange.bind(this)}
          delete = {this.delete.bind(this)}
          clear = {this.clearInput.bind(this)} 
          enter = {this.evaluate.bind(this)} />
        </div>
      </div>
      )
  }
};

class CalcDisplay extends React.Component {
  render() {
    return (
      <div>
        <div className = "calcUI">
          <button className = "numberBtn" onClick = {this.props.input.bind(this, "7")} >7</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "8")} >8</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "9")} >9</button>
          <button className = "operationBtn" onClick = {this.props.input.bind(null, "/")} >/</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "4")} >4</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "5")} >5</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "6")} >6</button>
          <button className = "operationBtn" onClick = {this.props.input.bind(null, "*")} >*</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "1")} >1</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "2")} >2</button>
          <button className = "numberBtn" onClick = {this.props.input.bind(null, "3")} >3</button>
          <button className = "operationBtn" onClick = {this.props.input.bind(null, "+")} >+</button>
          <button className = "delBtn" onClick = {this.props.delete.bind(this)} >del</button>
          <button className = "numberBtn"onClick = {this.props.input.bind(null, "0")} >0</button>
          <button className = "clearBtn" onClick = {this.props.clear.bind(this)} >CE</button>
          <button className = "operationBtn"onClick = {this.props.input.bind(null, "-")} >-</button>
        </div>
        <button onClick = {this.props.enter.bind(this)} className = "enterBtn">ENTER</button>
      </div>
      )
  }
};

ReactDOM.render(<Root />, document.getElementById('main'));