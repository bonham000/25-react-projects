'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// Set initial recipes for first page load:
var initialRecipes = [['bonham000_recipes_Beef Wellington', '- 400g flat cap mushrooms, roughly chopped\n- sea salt and freshly ground black pepper\n- olive oil, for cooking\n- 750g piece of prime beef fillet\n- 1-2tbsp English mustard\n- 6-8 slices of Parma ham\n- 500g ready-made puff pastry\n- flour, to dust\n- 2 egg yolks, beaten'], ['bonham000_recipes_Kimchi Jjigae', '- 1 pound kimchi, cut into bite size pieces\n- ¼ cup kimchi brine\n- ½ pound pork shoulder (or pork belly)\n- ½ package of tofu (optional), sliced into ½ inch thick bite size pieces\n- 1 teaspoon salt\n- 2 teaspoons sugar\n- 2 teaspoons gochugaru (Korean hot pepper flakes)\n- 1 tablespoon gochujang (hot pepper paste)\n- 1 teaspoon sesame oil\n- 2 cups of anchovy stock (or chicken or beef broth)\n'], ['bonham000_recipes_Cajun Pasta', '- 1 pound fettuccine\n- About 3 teaspoons Cajun spice mix\n- 3 whole boneless, skinless chicken breasts, cut into cubes\n- 2 tablespoons butter\n- 2 tablespoons olive oil\n- 3 cloves garlic, minced\n- 1 whole green bell pepper, seeded and sliced\n- 1 whole red bell pepper, seeded and sliced\n- 1/2 large red onion, sliced\n- Salt\n- 4 whole Roma tomatoes, diced\n- 2 cups low-sodium chicken broth\n- 1/2 cups white wine\n- 1 cup heavy cream\n- Cayenne pepper, for sprinkling\n- Freshly ground black pepper\n- Chopped fresh parsley, for garnish\n']];

// Root Component:
var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			empty: false,
			showAbout: true,
			showForm: false,
			showOne: false,
			showAll: false,
			showEdit: false,
			showOneKey: '',
			recipeBook: [],
			recipes: [],
			recipeTitle: '',
			recipeText: '',
			editKey: '',
			editValue: '',
			editTitle: ''
		};
		_this.handleInputTitle = _this.handleInputTitle.bind(_this);
		_this.handleInputText = _this.handleInputText.bind(_this);
		_this.submitRecipe = _this.submitRecipe.bind(_this);
		_this.showAllRecipes = _this.showAllRecipes.bind(_this);
		_this.showRecipe = _this.showRecipe.bind(_this);
		_this.removeAll = _this.removeAll.bind(_this);
		_this.removeOne = _this.removeOne.bind(_this);
		_this.setEdit = _this.setEdit.bind(_this);
		_this.handleEdit = _this.handleEdit.bind(_this);
		_this.submitEdit = _this.submitEdit.bind(_this);
		_this.showForm = _this.showForm.bind(_this);
		_this.showAll = _this.showAll.bind(_this);
		_this.cancelSubmit = _this.cancelSubmit.bind(_this);
		_this.cancelEdit = _this.cancelEdit.bind(_this);
		_this.handleEditTitle = _this.handleEditTitle.bind(_this);
		return _this;
	}

	App.prototype.showAllRecipes = function showAllRecipes() {
		var keys = [];
		for (var i = 0; i < localStorage.length; i++) {
			keys[i] = localStorage.key(i);
		}
		for (var j = 0; j < keys.length; j++) {
			if (keys[j] === 'firstLoad12345') {
				keys.splice(j, 1);
			}
		}
		this.setState({
			recipeBook: keys
		});

		var prefixedRecipes = [];
		var recipes = [];

		for (var k = 0; k < keys.length; k++) {
			prefixedRecipes[k] = [keys[k], localStorage.getItem(keys[k])];
		}
		for (var z = 0; z < prefixedRecipes.length; z++) {
			recipes[z] = [prefixedRecipes[z][0].substr(18, prefixedRecipes[z][0].length), prefixedRecipes[z][1]];
		}
		this.setState({
			recipes: recipes
		});
	};

	App.prototype.showRecipe = function showRecipe(key) {
		this.setState({
			showAbout: false,
			showOne: true,
			showAll: false,
			showForm: false,
			showOneKey: key
		});
	};

	App.prototype.showAll = function showAll() {
		if (this.state.recipes.length === 0) {
			this.setState({
				empty: true,
				showAbout: true,
				showForm: false,
				showOne: false,
				showAll: false,
				showEdit: false
			});
		} else if (this.state.showAll === false) {
			this.setState({
				showAbout: false,
				showForm: false,
				showOne: false,
				recipeTitle: '',
				recipeText: '',
				editValue: '',
				showAll: true
			});
		} else {
			this.setState({
				showAbout: true,
				showAll: false
			});
		}
	};

	App.prototype.submitRecipe = function submitRecipe(event) {
		event.preventDefault();
		var currentTitle = this.state.recipeTitle.slice();
		// Prevent user from creating recipes with the same name:
		if (localStorage.getItem(this.state.recipeTitle)) {
			alert("Sorry, you've already created this recipe!");
		} else {
			if (this.state.recipeTitle !== '' && this.state.recipeText !== '') {
				// Verify local storage is available

				if ((typeof Storage === 'undefined' ? 'undefined' : _typeof(Storage)) !== undefined) {
					localStorage.setItem("bonham000_recipes_" + this.state.recipeTitle, this.state.recipeText);
				} else {
					alert("Local storage is unavailable");
				}
				this.setState({
					showAbout: true,
					showForm: false,
					showOne: false,
					recipeTitle: '',
					recipeText: ''
				});
				this.showAllRecipes();
			}
		}
	};

	App.prototype.cancelSubmit = function cancelSubmit() {
		this.setState({
			showAbout: true,
			showForm: false,
			recipeTitle: '',
			recipeText: ''
		});
	};

	App.prototype.handleInputTitle = function handleInputTitle(event) {
		this.setState({
			recipeTitle: event.target.value
		});
	};

	App.prototype.handleInputText = function handleInputText(event) {
		this.setState({
			recipeText: event.target.value
		});
	};

	App.prototype.showForm = function showForm() {
		this.setState({
			showAbout: false,
			showForm: true,
			showOne: false,
			showAll: false,
			showEdit: false
		});
	};

	App.prototype.setEdit = function setEdit(key) {
		this.setState({
			showEdit: true,
			editKey: key,
			editTitle: key,
			editValue: localStorage.getItem("bonham000_recipes_" + key)
		});
	};

	App.prototype.handleEdit = function handleEdit(event) {
		this.setState({
			editValue: event.target.value
		});
	};

	App.prototype.handleEditTitle = function handleEditTitle(event) {
		this.setState({
			editTitle: event.target.value
		});
	};

	App.prototype.submitEdit = function submitEdit() {
		if (this.state.editValue !== '') {
			var oldKey = this.state.editKey;
			localStorage.removeItem("bonham000_recipes_" + oldKey);

			var newKey = this.state.editTitle;
			localStorage.setItem("bonham000_recipes_" + newKey, this.state.editValue);

			this.setState({
				showEdit: false,
				showOne: false,
				showAll: true,
				editKey: '',
				editValue: '',
				editTitle: ''
			});
			this.showAllRecipes();
		}
	};

	App.prototype.cancelEdit = function cancelEdit() {
		this.setState({
			showEdit: false,
			editKey: '',
			editValue: ''
		});
		this.showAllRecipes();
	};

	App.prototype.removeOne = function removeOne(key) {
		localStorage.removeItem("bonham000_recipes_" + key);
		this.setState({
			showOne: false
		});
		this.showAllRecipes();
	};

	App.prototype.removeAll = function removeAll(event) {
		event.preventDefault();
		var currentRecipes = this.state.recipeBook.slice();

		for (var k = 0; k < currentRecipes.length; k++) {
			localStorage.removeItem(currentRecipes[k]);
		}

		this.setState({
			empty: true,
			showAbout: true,
			showOne: false,
			showAll: false,
			showEdit: false,
			recipeBook: [],
			recipes: []
		});
	};

	App.prototype.componentWillMount = function componentWillMount() {
		// Perform the first time a user loads the page in order to load the initial recipes array:
		if (!localStorage.getItem('firstLoad12345')) {
			localStorage.setItem("firstLoad12345", "true");

			for (var a = 0; a < initialRecipes.length; a++) {
				localStorage.setItem(initialRecipes[a][0], initialRecipes[a][1]);
			}
		}
		this.showAllRecipes();
	};

	App.prototype.render = function render() {
		return React.createElement(
			'div',
			{ id: 'content' },
			React.createElement(RecipeList, {
				recipes: this.state.recipes,
				showRecipe: this.showRecipe,
				showForm: this.showForm,
				removeAll: this.removeAll,
				empty: this.state.empty,
				showAll: this.state.showAll,
				handleShowAll: this.showAll }),
			React.createElement(
				'div',
				{ className: 'contentWrapper' },
				React.createElement(About, {
					showAbout: this.state.showAbout }),
				React.createElement(SubmitRecipe, {
					showForm: this.state.showForm,
					submitRecipe: this.submitRecipe,
					cancelSubmit: this.cancelSubmit,
					recipeTitle: this.state.recipeTitle,
					recipeText: this.state.recipeText,
					handleInputTitle: this.handleInputTitle,
					handleInputText: this.handleInputText }),
				React.createElement(ShowOne, {
					showOne: this.state.showOne,
					showOneKey: this.state.showOneKey,
					editKey: this.state.editKey,
					setEdit: this.setEdit,
					showEdit: this.state.showEdit,
					editValue: this.state.editValue,
					editTitle: this.state.editTitle,
					handleEdit: this.handleEdit,
					handleEditTitle: this.handleEditTitle,
					submitEdit: this.submitEdit,
					cancelEdit: this.cancelEdit,
					removeOne: this.removeOne }),
				React.createElement(ShowAll, {
					recipes: this.state.recipes,
					setEdit: this.setEdit,
					showAll: this.state.showAll,
					removeOne: this.removeOne,
					showEdit: this.state.showEdit,
					editKey: this.state.editKey,
					editValue: this.state.editValue,
					editTitle: this.state.editTitle,
					handleEdit: this.handleEdit,
					handleEditTitle: this.handleEditTitle,
					submitEdit: this.submitEdit,
					cancelEdit: this.cancelEdit })
			)
		);
	};

	return App;
}(React.Component);

;
// Component shows details about the project to the user:
var About = function (_React$Component2) {
	_inherits(About, _React$Component2);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	About.prototype.render = function render() {
		var component;
		if (this.props.showAbout === true) {
			component = React.createElement(
				'div',
				{ className: 'aboutWrapper' },
				React.createElement(
					'div',
					{ className: 'about' },
					React.createElement(
						'h1',
						null,
						'This is a Recipe App'
					),
					React.createElement(
						'h2',
						null,
						'You can record your recipes here'
					),
					React.createElement(
						'p',
						null,
						'All your recipes are stored in your browser\'s local storage and any changes you make will remain saved as long as you continue to access this page from the same browser.'
					),
					React.createElement(
						'p',
						null,
						'Built by ',
						React.createElement(
							'a',
							{ target: '_blank', href: 'http://sean-smith.me' },
							'Sean Smith'
						)
					)
				)
			);
		};
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'transitionDiv',
				transitionEnterTimeout: 1500,
				transitionLeaveTimeout: 50 },
			component
		);
	};

	return About;
}(React.Component);

;
// This is the control side bar that allows the user to navigate the app:
var RecipeList = function (_React$Component3) {
	_inherits(RecipeList, _React$Component3);

	function RecipeList() {
		_classCallCheck(this, RecipeList);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	RecipeList.prototype.render = function render() {
		var _this4 = this;

		var recipeListTitle = "Recipe List:";
		if (this.props.empty === true) {
			recipeListTitle = "The List is Empty";
		}
		var recipesList = this.props.recipes.map(function (recipe) {
			return React.createElement(
				'div',
				{ className: 'recipeListItem', key: recipe, onClick: _this4.props.showRecipe.bind(_this4, recipe[0]) },
				recipe[0]
			);
		});
		var showHideStyle = "Show All Recipes";
		if (this.props.showAll === true) {
			showHideStyle = "Hide All Recipes";
		}
		return React.createElement(
			'div',
			{ className: 'listWrapper' },
			React.createElement(
				'div',
				{ className: 'titleBox' },
				React.createElement('i', { className: 'fa fa-cutlery', 'aria-hidden': 'true' }),
				React.createElement(
					'h1',
					null,
					React.createElement(
						'a',
						{ target: '_blank', href: 'https://www.freecodecamp.com/challenges/build-a-recipe-box' },
						'Free Code Camp'
					),
					React.createElement('br', null),
					'Recipe Box'
				)
			),
			React.createElement(
				'div',
				{ className: 'listBtn', onClick: this.props.showForm },
				'Add a New Recipe'
			),
			React.createElement(
				'div',
				{ className: 'listBtn', onClick: this.props.handleShowAll },
				showHideStyle
			),
			React.createElement(
				'div',
				{ className: 'listBtn removeBtn', onClick: this.props.removeAll },
				'Remove All Recipes'
			),
			React.createElement(
				'h1',
				{ className: 'listTitle' },
				recipeListTitle
			),
			recipesList
		);
	};

	return RecipeList;
}(React.Component);

;
// Submit form for new recipes:
var SubmitRecipe = function (_React$Component4) {
	_inherits(SubmitRecipe, _React$Component4);

	function SubmitRecipe() {
		_classCallCheck(this, SubmitRecipe);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	SubmitRecipe.prototype.render = function render() {
		var component;
		if (this.props.showForm === true) {
			component = React.createElement(
				'div',
				{ className: 'submitForm' },
				React.createElement(
					'form',
					{ onSubmit: this.props.submitRecipe },
					React.createElement('input', {
						autoFocus: true,
						type: 'text',
						placeholder: 'Recipe',
						value: this.props.recipeTitle,
						onChange: this.props.handleInputTitle }),
					React.createElement('br', null),
					React.createElement('textarea', {
						type: 'text',
						placeholder: 'Ingredients',
						value: this.props.recipeText,
						onChange: this.props.handleInputText }),
					React.createElement('br', null),
					React.createElement(
						'button',
						{
							className: 'submitBtn',
							onClick: this.props.submitRecipe },
						'Submit Recipe'
					),
					React.createElement('br', null),
					React.createElement(
						'button',
						{
							className: 'cancelBtn',
							onClick: this.props.cancelSubmit },
						'Cancel'
					)
				)
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'transitionDiv',
				transitionEnterTimeout: 1500,
				transitionLeaveTimeout: 50 },
			component
		);
	};

	return SubmitRecipe;
}(React.Component);

;
// Panel to show when one recipe is clicked:
var ShowOne = function (_React$Component5) {
	_inherits(ShowOne, _React$Component5);

	function ShowOne() {
		_classCallCheck(this, ShowOne);

		return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
	}

	ShowOne.prototype.render = function render() {
		var component;
		var editBox;
		if (this.props.editKey === this.props.showOneKey) {
			editBox = React.createElement(EditRecipe, {
				showEdit: this.props.showEdit,
				editKey: this.props.editKey,
				editValue: this.props.editValue,
				editTitle: this.props.editTitle,
				handleEdit: this.props.handleEdit,
				handleEditTitle: this.props.handleEditTitle,
				submitEdit: this.props.submitEdit,
				cancelEdit: this.props.cancelEdit });
		}
		if (this.props.showOne === true) {
			component = React.createElement(
				'div',
				{ className: 'recipeView' },
				React.createElement(
					'h1',
					null,
					this.props.showOneKey
				),
				React.createElement(
					'div',
					{ className: 'editBtnWrapper' },
					React.createElement(
						'button',
						{
							className: 'removeBtn',
							onClick: this.props.removeOne.bind(this, this.props.showOneKey) },
						'Remove This Recipe'
					),
					React.createElement(
						'button',
						{
							className: 'editBtn',
							onClick: this.props.setEdit.bind(this, this.props.showOneKey) },
						'Edit This Recipe'
					)
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'strong',
						null,
						'Ingredients:'
					)
				),
				React.createElement(
					'pre',
					{ className: 'ingredients' },
					localStorage.getItem("bonham000_recipes_" + this.props.showOneKey)
				),
				editBox
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'transitionDiv',
				transitionEnterTimeout: 1500,
				transitionLeaveTimeout: 50 },
			component
		);
	};

	return ShowOne;
}(React.Component);

;
// Show all recipes view:
var ShowAll = function (_React$Component6) {
	_inherits(ShowAll, _React$Component6);

	function ShowAll() {
		_classCallCheck(this, ShowAll);

		return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
	}

	ShowAll.prototype.render = function render() {
		var _this8 = this;

		var recipes = this.props.recipes.map(function (recipe) {
			var editBox;
			if (_this8.props.editKey === recipe[0]) {
				editBox = React.createElement(EditRecipe, {
					showEdit: _this8.props.showEdit,
					editKey: _this8.props.editKey,
					editValue: _this8.props.editValue,
					editTitle: _this8.props.editTitle,
					handleEdit: _this8.props.handleEdit,
					handleEditTitle: _this8.props.handleEditTitle,
					submitEdit: _this8.props.submitEdit,
					cancelEdit: _this8.props.cancelEdit });
			}
			return React.createElement(
				'div',
				{ className: 'recipeView', key: recipe[0] + recipe[1].substr(0, 5) },
				React.createElement(
					'h1',
					null,
					recipe[0]
				),
				React.createElement(
					'div',
					{ className: 'editBtnWrapper' },
					React.createElement(
						'button',
						{
							className: 'removeBtn',
							onClick: _this8.props.removeOne.bind(_this8, recipe[0]) },
						'Remove This Recipe'
					),
					React.createElement(
						'button',
						{
							className: 'editBtn',
							onClick: _this8.props.setEdit.bind(_this8, recipe[0]) },
						'Edit This Recipe'
					)
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'strong',
						null,
						'Ingredients:'
					)
				),
				React.createElement(
					'pre',
					{ className: 'ingredients' },
					localStorage.getItem("bonham000_recipes_" + recipe[0])
				),
				editBox
			);
		});
		var component;
		if (this.props.showAll === true) {
			component = React.createElement(
				'div',
				{ className: 'showAllWrapper' },
				recipes
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'transitionDiv',
				transitionEnterTimeout: 1500,
				transitionLeaveTimeout: 50 },
			component
		);
	};

	return ShowAll;
}(React.Component);

;
// Edit Recipe Component, will load in ShowOne or ShowAll view:
var EditRecipe = function (_React$Component7) {
	_inherits(EditRecipe, _React$Component7);

	function EditRecipe() {
		_classCallCheck(this, EditRecipe);

		return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
	}

	EditRecipe.prototype.render = function render() {
		// Conditionally calculate height of textarea based on inner content:
		var num = this.props.editValue.split(/\r\n|\r|\n/).length;
		var textAreaStyle = {
			height: 25 * num + 15
		};
		var component;
		if (this.props.showEdit === true) {
			component = React.createElement(
				'div',
				{ className: 'editBox' },
				React.createElement(
					'p',
					null,
					'Edit Title:'
				),
				React.createElement('input', {
					type: 'text',
					value: this.props.editTitle,
					onChange: this.props.handleEditTitle }),
				React.createElement(
					'p',
					null,
					'Edit Ingredients:'
				),
				React.createElement('textarea', {
					style: textAreaStyle,
					id: 'edit',
					value: this.props.editValue,
					onChange: this.props.handleEdit }),
				React.createElement('br', null),
				React.createElement(
					'button',
					{
						className: 'submitBtn',
						onClick: this.props.submitEdit },
					'Submit Edit'
				),
				React.createElement(
					'button',
					{
						className: 'cancelBtn',
						onClick: this.props.cancelEdit },
					'Cancel Edit'
				)
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'editTransitionDiv',
				transitionAppear: true,
				transitionAppearTimeout: 750,
				transitionEnterTimeout: 750,
				transitionLeaveTimeout: 0 },
			component
		);
	};

	return EditRecipe;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));