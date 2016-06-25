'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			newTitle: '',
			newDetails: '',
			newNote: '',
			notes: []
		};
		_this.addNote = _this.addNote.bind(_this);
		_this.newTitle = _this.newTitle.bind(_this);
		_this.newDetails = _this.newDetails.bind(_this);
		_this.removeNote = _this.removeNote.bind(_this);
		_this.showDetails = _this.showDetails.bind(_this);
		_this.handleKeypress = _this.handleKeypress.bind(_this);
		return _this;
	}

	App.prototype.addNote = function addNote(event) {
		if (event != undefined) {
			event.preventDefault();
		}

		if (this.state.newTitle.length > 0) {

			var date = new Date();
			var timeStamp = date.toString().substr(0, 25);

			var newDetails = this.state.newDetails;

			if (newDetails.length === 0) {
				newDetails = "(no details)";
			}

			var newNote = [timeStamp, this.state.newTitle, newDetails];
			var currNotes = this.state.notes.slice(0);
			currNotes[currNotes.length] = newNote;

			this.setState({
				notes: currNotes,
				newTitle: '',
				newDetails: ''
			});
		}
	};

	App.prototype.newTitle = function newTitle(event) {
		this.setState({
			newTitle: event.target.value
		});
	};

	App.prototype.newDetails = function newDetails(event) {

		this.setState({
			newDetails: event.target.value
		});
	};

	App.prototype.handleKeypress = function handleKeypress(event) {
		var key = event.keyCode;

		if (key === 13) {
			event.preventDefault();
			this.addNote();
		}
	};

	App.prototype.removeNote = function removeNote(index) {
		var currNotes = this.state.notes.slice();
		currNotes.splice(index, 1);
		this.setState({
			notes: currNotes
		});
	};

	App.prototype.showDetails = function showDetails(className, spanID, noteID) {

		if (!document.getElementById(className).classList.contains('visible')) {
			document.getElementById(className).setAttribute('class', 'visible');
			document.getElementById(className).style.display = "block";
			document.getElementById(spanID).innerHTML = "(Hide Details)";
			document.getElementById(noteID).style.background = "#FFD84B";
		} else {
			document.getElementById(className).className = '';
			document.getElementById(className).style.display = "none";
			document.getElementById(spanID).innerHTML = "(Show Details)";
			document.getElementById(noteID).style.background = "#ffc952";
		}
	};

	App.prototype.render = function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				{ className: 'title' },
				'Timestamped Notes App'
			),
			React.createElement(NoteEntry, {
				addNote: this.addNote,
				newTitle: this.state.newTitle,
				handleTitle: this.newTitle,
				newDetails: this.state.newDetails,
				handleDetails: this.newDetails,
				handleKeypress: this.handleKeypress }),
			React.createElement(NotePresentation, {
				notes: this.state.notes,
				removeNote: this.removeNote,
				showDetails: this.showDetails })
		);
	};

	return App;
}(React.Component);

;

var NoteEntry = function (_React$Component2) {
	_inherits(NoteEntry, _React$Component2);

	function NoteEntry() {
		_classCallCheck(this, NoteEntry);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	NoteEntry.prototype.render = function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'form',
				{ onSubmit: this.props.addNote.bind(this) },
				React.createElement('input', {
					type: 'text',
					autoFocus: true,
					value: this.props.newTitle,
					onChange: this.props.handleTitle.bind(this),
					placeholder: 'Note Title' }),
				React.createElement('br', null),
				React.createElement('textarea', {
					type: 'text',
					className: 'detailsInput',
					value: this.props.newDetails,
					onKeyDown: this.props.handleKeypress.bind(this),
					onChange: this.props.handleDetails.bind(this),
					placeholder: 'Note Details' }),
				React.createElement('br', null),
				React.createElement(
					'button',
					null,
					'Add Note'
				)
			),
			React.createElement('hr', null)
		);
	};

	return NoteEntry;
}(React.Component);

;

var NotePresentation = function (_React$Component3) {
	_inherits(NotePresentation, _React$Component3);

	function NotePresentation() {
		_classCallCheck(this, NotePresentation);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	NotePresentation.prototype.render = function render() {
		var showStyle = {
			display: "none"
		};
		var noteStyle = {
			background: "#ffc952"
		};
		var addNotes = this.props.notes.map(function (note, index) {
			return React.createElement(
				'div',
				{ key: note[0], className: 'note', id: note[0].replace(/\s/g, '') + 's', style: noteStyle },
				React.createElement(
					'p',
					{ className: 'noteTitle' },
					note[1]
				),
				React.createElement(
					'div',
					{ className: 'noteControl' },
					React.createElement(
						'span',
						{
							className: 'expandNote',
							id: note[1].replace(/\s/g, ''),
							onClick: this.props.showDetails.bind(this, note[0].replace(/\s/g, ''), note[1].replace(/\s/g, ''), note[0].replace(/\s/g, '') + 's') },
						'(Show Details)'
					),
					React.createElement(
						'span',
						{
							className: 'removeNote',
							onClick: this.props.removeNote.bind(this, index) },
						'(Remove Note)'
					)
				),
				React.createElement(
					'span',
					{ className: 'timestamp' },
					'Recorded: ',
					note[0]
				),
				React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ id: note[0].replace(/\s/g, ''), style: showStyle },
						React.createElement('hr', { className: 'noteDivider' }),
						React.createElement(
							'div',
							{ className: 'noteDetails' },
							'Details: ',
							note[2]
						)
					)
				)
			);
		}.bind(this));
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				null,
				React.createElement(
					ReactCSSTransitionGroup,
					{ transitionName: 'example', transitionEnterTimeout: 700, transitionLeaveTimeout: 300 },
					addNotes
				)
			)
		);
	};

	return NotePresentation;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));