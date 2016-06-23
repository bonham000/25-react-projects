class App extends React.Component {
  constructor() {
    super();
    this.state = {
    	condition: 'off',
    	speed: 1000,
		counter: 0,
		breakCount: 2,
		initTime: 5,
		initBreakTime: 2,
		timeMin: 5,
		timeSec: 60,
		breakMin: 2,
		breakSec: 60,
		status: "Ready?",
		buttonStatus: "Start Timer"
    };
    this.startTimer = this.startTimer.bind(this);
    this.addTime = this.addTime.bind(this);
    this.subtractTime = this.subtractTime.bind(this);
    this.addBreakTime = this.addBreakTime.bind(this);
    this.subtractBreakTime = this.subtractBreakTime.bind(this);
    this.checked = this.checked.bind(this);
  }
  startTimer() {

	if (this.state.breakCount === -1) {
		this.setState({
	    	condition: 'off',
	    	speed: 1000,
			counter: 0,
			breakCount: 2,
			initTime: 5,
			initBreakTime: 2,
			timeMin: 5,
			timeSec: 60,
			breakMin: 2,
			breakSec: 60,
			status: "Ready?",
			buttonStatus: "Start Timer"
		})
	}

  	if (this.state.condition === "off") {

  	this.setState({
  		condition: "running",
  		timeMin: this.state.timeMin - 1
  	})

	  	var timer = setInterval(function() {

	  		if (this.state.counter === 0) {
	  			this.setState({
	  				status: "Focus!"
	  			})
	  		}

	  		if ((this.state.timeMin === 0) && (this.state.timeSec === 0)) {

	  			this.setState({
	  				breakCount: this.state.breakCount - 1
	  			});

	  			if (this.state.breakCount === 0) {
	  				this.setState({
	  					timeMin: this.state.initTime,
	  					timeSec: 60,
	  					breakCount: this.state.breakCount - 1,
	  					status: "Finished!",
	  					buttonStatus: "Reset?"
	  				})
	  				clear();
	  			}

	  			else {
		  			this.setState({
		  				timeMin: this.state.breakMin,
		  				timeSec: this.state.breakSec,
		  				condition: "off",
		  				status: "Break!"
		  			});
		  			
		  			clear();
		  			this.startTimer();
	  			}
	  		}
	  		else if ((this.state.counter % 60 === 0) && (this.state.counter !== 0) && (this.state.timeMin > 0)) {
	  			this.setState({
	  				timeMin: this.state.timeMin - 1,
	  				timeSec: 60
	  			})
	  		}
	  		else {
	  			this.setState({
	  				timeSec: this.state.timeSec - 1
	  			})
	  		}
	  		this.setState({
	  			counter: this.state.counter + 1
	  		})
	  	}.bind(this), this.state.speed);

	  	function clear() { clearInterval(timer) }

	  	timer;

	  }
  }
  addTime() {
	if (this.state.condition === "off") {
	  	if (this.state.initTime < 60) {
			this.setState({
				initTime: this.state.initTime + 1,
				timeMin: this.state.timeMin + 1
			});
		}
	}
  }
  subtractTime() {
  	if (this.state.condition === "off") {
	  	if (this.state.initTime > 2) {
		  	this.setState({
				initTime: this.state.initTime - 1,
				timeMin: this.state.timeMin - 1
			});
	  	}
	}
  }
  addBreakTime() {
  	if (this.state.condition === "off") {
	  	if (this.state.breakMin < 60) {
			this.setState({
				initBreakTime: this.state.initBreakTime + 1,
				breakMin: this.state.breakMin + 1
			});
		}
	}
  }
  subtractBreakTime() {
  	if (this.state.condition === "off") {
	  	if (this.state.breakMin > 2) {
		  	this.setState({
				initBreakTime: this.state.initBreakTime - 1,
				breakMin: this.state.breakMin - 1
			});
		}
	}
  }
  checked() {
  	if (this.state.condition === "off") {
	  	if (this.state.speed === 1000) {
	  		this.setState({
	  			speed: 25
	  		});
	  	}
	  	else {
	  		this.setState({
	  			speed: 1000
	  		});
	  	}
	}
  }
  render() {
    return (
      <div>
        <h1 className = "title">Free Code Camp Pomodoro Clock</h1>
        <hr />
        <div className = "speedControl">
	        <div className = "checkInput">
	        		<input type = "checkbox" className = "inputCheck" onChange = {this.checked} />
	        		<p>Speed Mode</p>
	        </div>
	    </div>
        <div className = "control">
	        <TimerControl
	        	minutes = {this.state.initTime}
	        	addTime = {this.addTime}
	        	subtractTime = {this.subtractTime}
	        	startTimer = {this.startTimer} />
	        <BreakControl
	        	minutes = {this.state.initBreakTime}
	        	addBreakTime = {this.addBreakTime}
	        	subtractBreakTime = {this.subtractBreakTime} />
	        <StartTimer
	        	status = {this.state.status}
	        	buttonStatus = {this.state.buttonStatus}
	        	startTimer = {this.startTimer} />
	    </div>
    	<Timer
    		minutes = {this.state.timeMin}
    		seconds = {this.state.timeSec}
    		condition = {this.state.condition}
    		buttonStatus = {this.state.buttonStatus} />
      </div>
      );
  }
};

class TimerControl extends React.Component {
	render() {
		return (
			<div className = "timerControl">
				<h2><strong>Time:</strong> {this.props.minutes} minutes</h2>
				<button className = "timeBtn minus" onClick = {this.props.subtractTime}>-</button>
				<button className = "timeBtn plus" onClick = {this.props.addTime}>+</button>
			</div>
		);
	}
};

class BreakControl extends React.Component {
	render() {
		return (
			<div className = "breakControl">
				<h2><strong>Break:</strong> {this.props.minutes} minutes</h2>
				<button className = "timeBtn minus" onClick = {this.props.subtractBreakTime}>-</button>
				<button className = "timeBtn plus" onClick = {this.props.addBreakTime}>+</button>
			</div>
		);
	}
};

class StartTimer extends React.Component {
	render() {
		return (
			<div className = "startTimer">
				<h2>{this.props.status}</h2>
				<button className = "startBtn" onClick = {this.props.startTimer}>{this.props.buttonStatus}</button>
			</div>
		);
	}
};

class Timer extends React.Component {
	render() {

	var style = {
		fontSize: "40px"
	}

	if (this.props.condition === "running") {
		style = { fontSize: "300px" }
	}

	var seconds = ('0' + this.props.seconds).slice(-2);

	if (seconds === "60") {
		seconds = "00"
	}

	var timerText = ('0' + this.props.minutes).slice(-2) + ":" + seconds;

	if (this.props.buttonStatus === "Reset?") {
		timerText = "great job! =D"
		style = {
			fontFamily: "Avenir",
			fontSize: "125px"
		}
	}

		return (
			<div className = "timer">
				<h1 style = {style}>{timerText}</h1>
			</div>
		);
	}
};

ReactDOM.render(<App />, document.getElementById('main'));