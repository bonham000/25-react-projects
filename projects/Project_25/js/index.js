'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// Define sound effects:
var challengeSound = new Audio('http://soundbible.com/mp3/Computer_Magic-Microsift-1901299923.mp3');
var hitSound = new Audio('http://soundbible.com/mp3/Jab-SoundBible.com-1806727891.mp3');
var newItemSound = new Audio('http://soundbible.com/mp3/Ting-Popup_Pixels-349896185.mp3');
var bonusSound = new Audio('http://soundbible.com/mp3/Music_Box-Big_Daddy-1389738694.mp3');
var deathSound = new Audio('http://soundbible.com/mp3/Grenade-SoundBible.com-1777900486.mp3');
var winner = new Audio('http://soundbible.com/mp3/Triangle Dinner Bell-SoundBible.com-220988408.mp3');

// Define colors:
var dark = 'rgb(30,30,30)';
var empty = 'rgba(20,20,20,0.20)';
var user = '#ffc952';
var blue = '#5677FF';
var itemBonus = '#FFCF5F';
var gray = 'rgb(180,180,180)';
var mint = '#67D5B5';
var gold = '#ffc952';
var brightBlue = '#00dffc';
var pink = '#ff7473';
var barrierColor = '#FFD740';
var headerBackground = '#19281E';
var alarm = '#F8002C';
var red = '#FF0000';

// Define Skill Items:
var skills = {
	'Bootstrap': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/bootstarp_zpss8vblcyf.png', 'You mastered responsive web design with Bootstrap!'],
	'Bower': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/bower_zpsiryvttjz.png', 'Your workflow skills improve with Bower!'],
	'CamperBot': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/camper-bot_zpss0vmcylr.png', 'You completed a 100 day streak at Free Code Camp! CamperBot joined your team!'],
	'Codepen': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/codepen_zps7q5rhj96.png', 'Your project made the front page of Codepen! Respect!'],
	'CSS3': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/css3_zpsfgjif0yl.png', 'You gained valuable style skills, you can now vertically center text!'],
	'D3': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/d3_zpsqry6neks.png', 'You mastered D3 and now can transform arbitrary data into beautiful charts!'],
	'ES6': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/es6_zpstofeky6l.png', 'You learned ES6! Your attack improves with fat arrow function skills!'],
	'Git': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/git_zpsbqpulcno.png', 'You mastered git, your workflow continues to improve!'],
	'Github': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/github_zpsscwefh3e.png', 'You contributed to Open Source! Octocat joined your team!'],
	'Gitter': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/gitter_zpsf4bixwzd.png', 'Campers gave you brownie points in Gitter Chat!'],
	'Grunt': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/grunt_zpse8urargg.png', 'Your workflow is totally automated!'],
	'Heroku': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/heroku_zpsvanhf1kx.png', 'You\'re deploying apps from Heroku!'],
	'HTML5': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/HTML5_zpswgfqraaq.png', 'You\'ve become a master of HTML5!'],
	'jQuery': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/jQuery_zpshgckvwqv.png', 'You mastered jQuery! DOM selection is a piece of cake for you!'],
	'Javascript': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/javascript_zpspq5wlpgf.png', 'You learned about hoisting and callbacks in Javascript!'],
	'MongoDB': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/mongoDB_zpsw9fkl7t9.png', 'You became a database champ with MongoDB!'],
	'NodeJS': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/node_zpsjqltyxfy.png', 'You started coding Javascript on the back end! You gained isomorphic attack power!'],
	'React': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/react_zpsu5wxjan7.png', 'You gained powerful Virtual DOM abilities! JSX has been added to your weapons list!'],
	'Redux': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/redux_zpsbdb7qgwg.png', 'You obtained Redux Superpowers! All of your items are now immutable!'],
	'Sass': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/sass_zpswfmipglk.png', 'Your CSS has become Sassy!'],
	'StackOverflow': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/stack-overflow_zpsgukj4ov4.png', 'You can finally vote on StackOverflow answers!'],
	'Sublime': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/sublime_zps76mjstkv.png', 'Your code editing skills are leveled up with Sublime Text!'],
	'Terminal': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/terminal_zpshcdn2axm.png', 'You\'ve become a master of the command line!'],
	'Twitter': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/twitter_zpslsshz5z7.png', 'Developers are following you on Twitter!'],
	'Webpack': ['http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/webpack_zpsevn2xywn.png', 'Your build skills are unmatched with Webpack! Gained Hot Reload as a Summon!']
};

// Define Challenges:
var challenges = {
	'front-end-1': [150, 'You built a tribute page, congratulations!'],
	'front-end-2': [250, 'You completed the Wikipedia Viewer project!'],
	'front-end-3': [350, 'You finished the Pomodoro Clock! Your productivity rises by 3000 points!'],
	'front-end-4': [450, 'You built a Tic Tac Toe Game! And wrote an unbeatable algorithm! Great work!'],
	'front-end-5': [550, 'You built a Simon Game! Your skills are really looking good!'],
	'data-viz-1': [550, 'You built a Markdown Previewer using React and Sass, impressive!'],
	'data-viz-2': [700, 'You built a Recipe Box App! Your friends are getting jealous!'],
	'data-viz-3': [850, 'You created stunning bar graphs, scatterplots, heatmaps, and force directed layouts with D3!'],
	'data-viz-4': [900, 'You completed a Javascript version of Conway\'s Game of Life, mesmerizing!'],
	'data-viz-5': [1050, 'You built a Roguelike Dungeon Crawler! Unbelievable!!!'],
	'back-end-1': [1200, 'You created a File Metadata Microservice! Your friends are really jealous now!'],
	'back-end-2': [1400, 'You created a Voting App, awesome!'],
	'back-end-3': [1650, 'You built a Nightlife Coordination App! Party on!'],
	'back-end-4': [1800, 'You created a Book Trading Club App! Your parents\' friends thank you!'],
	'back-end-5': [2000, 'You built a Pinterest Clone! Bring on the Non-Profit Projects!']
};

// Define boss HP:
var bossHP = 1000000;

// Image URLs for certification img tags:
var certificationsList = {
	'Front': 'http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/frontend-cert_zpsq7qjoxm8.png',
	'Viz': 'http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/dataviz-cert_zpshjjcrndr.png',
	'Back': 'http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/backend-cert_zpsnmwzk83w.png'
};

// Root Component:
var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_this.state = {
			sound: true,
			about: true,
			replay: false,
			playing: true,
			game: 'alive',
			userLocation: '',
			offset: 130,
			map: [],
			renderMap: [],
			frontEndChallenges: [],
			dataVizChallenges: [],
			backEndChallenges: [],
			skillItems: [],
			life: 5000,
			attackPower: 50,
			experience: 0,
			certifications: [],
			level: 1,
			header: 'Welcome to the Free Code Camp Dungeon Crawler Game'
		};

		_this.startGame = _this.startGame.bind(_this);
		_this.resetGame = _this.resetGame.bind(_this);
		_this.generateMap = _this.generateMap.bind(_this);
		_this.updateMap = _this.updateMap.bind(_this);
		_this.handleKeyPress = _this.handleKeyPress.bind(_this);
		_this.handleBattle = _this.handleBattle.bind(_this);
		_this.handleDeath = _this.handleDeath.bind(_this);
		_this.handleSound = _this.handleSound.bind(_this);

		return _this;
	}
	// Allow the user to mute the sound:

	App.prototype.handleSound = function handleSound() {
		if (this.state.sound) {
			this.setState({
				sound: false
			});
		} else {
			this.setState({
				sound: true
			});
		};
	};

	App.prototype.startGame = function startGame() {
		if (this.state.sound) {
			bonusSound.play();
		}
		this.setState({
			about: false
		});
	};

	App.prototype.resetGame = function resetGame() {
		// location.reload();
		document.getElementById('headerBar').style.background = headerBackground;

		this.setState({
			about: false,
			replay: false,
			playing: true,
			game: 'alive',
			userLocation: '',
			offset: 130,
			frontEndChallenges: [],
			dataVizChallenges: [],
			backEndChallenges: [],
			skillItems: [],
			life: 5000,
			attackPower: 50,
			experience: 0,
			certifications: [],
			level: 1,
			header: 'Welcome to the Free Code Camp Dungeon Crawler Game'
		});

		this.generateMap();

		challenges['front-end-1'][0] = 150;
		challenges['front-end-2'][0] = 250;
		challenges['front-end-3'][0] = 350;
		challenges['front-end-4'][0] = 450;
		challenges['front-end-5'][0] = 550;
		challenges['data-viz-1'][0] = 550;
		challenges['data-viz-2'][0] = 700;
		challenges['data-viz-3'][0] = 850;
		challenges['data-viz-4'][0] = 900;
		challenges['data-viz-5'][0] = 105;
		challenges['back-end-1'][0] = 1200;
		challenges['back-end-2'][0] = 1400;
		challenges['back-end-3'][0] = 1650;
		challenges['back-end-4'][0] = 1800;
		challenges['back-end-5'][0] = 2000;
	};
	// Function to generate map data on initial render of page:

	App.prototype.generateMap = function generateMap() {
		var w = 1000;
		var h = 5000;
		var gridWidth = 50;
		var gridHeight = gridWidth;
		var numRows = h / gridWidth;
		var arr = [];

		var userIndex;
		var initMap = [];

		// Render an array of 2000 items based on specified dimensions:
		for (var a = 0; a < w / gridWidth * numRows; a++) {

			// Generate a random number to determine if cells will be filled or not
			var rand = Math.round(Math.random() * 5);
			// 1 represents solid cells; 0 represents empty cells — random number is not 1, make it 0:
			if (rand !== 1) {
				rand = 0;
			}

			var user = 0;

			// Boss and User positions are hard-coded; all other cells are distributed randomly:

			// Set boss position at top of map:
			if (a === 47 || a === 48 || a === 49 || a === 50 || a === 67 || a === 70 || a === 87 || a === 90 || a === 107 || a === 108 || a === 109 || a === 110) {
				rand = 'barrier';
			} else if (a === 68 || a === 69 || a === 88 || a === 89) {
				rand = 'boss';
			}
			// Set user position:
			else if (a === 1890) {
					rand = 0;user = 1;userIndex = a;
				}

			arr[a] = {
				cellSize: gridWidth,
				cellType: rand,
				user: user
			};
		}

		// Randomly place challenges on map:

		var rand;
		var challengeLimit = 15;

		var b = 0;
		while (b < challengeLimit) {
			rand = 100 + 1800 - Math.round(Math.random() * 1800);
			// Do not place a challenge on the user:
			if (rand !== 1890) {
				// Only use empty cells:
				if (arr[rand].cellType === 0) {
					// Avoid 'boss' and 'barrier' cells:
					if (typeof arr[rand - 1].cellType !== 'string' && typeof arr[rand + 1].cellType !== 'string' && typeof arr[rand - 20].cellType !== 'string' && typeof arr[rand + 20].cellType !== 'string') {
						// Avoid inaccessible cells:
						if (arr[rand - 1].cellType === 0 && arr[rand + 1].cellType === 0 && arr[rand - 20].cellType === 0 && arr[rand + 20].cellType === 0) {
							// Fifteen challenges are distributed, 5 for each certification:
							if (b < 5) {
								arr[rand].cellType = "front";
								b++;
							} else if (b < 10) {
								arr[rand].cellType = "viz";
								b++;
							} else {
								arr[rand].cellType = "back";
								b++;
							}
						}
					}
				}
			}
			// If the above conditiosn are not satisfied for the given random number, return and try again:
			else {
					continue;
				}
		}

		// Randomly place skills on map:

		// Get the names of all the skill items from the skills object:
		var skillsArray = [];
		for (var key in skills) {
			skillsArray.push(key);
		}

		var c = 0;
		while (c < skillsArray.length) {
			rand = 100 + 1800 - Math.round(Math.random() * 1800);
			// Do not place a challenge on the user:
			if (rand !== 1890) {
				// Cell must be empty and not contain a challenge
				if (arr[rand].cellType === 0 && typeof arr[rand].cellType !== 'string') {
					// Avoid 'boss' and 'barrier' cells:
					if (typeof arr[rand - 1].cellType !== 'string' && typeof arr[rand + 1].cellType !== 'string' && typeof arr[rand - 20].cellType !== 'string' && typeof arr[rand + 20].cellType !== 'string') {
						// Avoid inaccessible cells:
						if (arr[rand - 1].cellType === 0 && arr[rand + 1].cellType === 0 && arr[rand - 20].cellType === 0 && arr[rand + 20].cellType === 0) {
							arr[rand].cellType = skillsArray[c];
							c++;
						}
					}
				}
			}
			// If the above conditiosn are not satisfied for the given random number, return and try again:
			else {
					continue;
				}
		}

		// A slice of the map data is made for the viewing window:
		initMap = arr.slice(userIndex - 130, arr.length);

		this.setState({
			userLocation: userIndex,
			map: arr,
			renderMap: initMap
		});
	};
	// Take in new map data and user location to render a new map to the page upon user movement:

	App.prototype.updateMap = function updateMap(data, newLocation, offset) {

		var gameMap = this.state.map;
		var newMap = gameMap.slice(newLocation - offset, newLocation + (240 - offset));

		this.setState({
			userLocation: newLocation,
			offset: offset,
			renderMap: newMap
		});
	};
	// If player is defeated, alert Gameover and display the replay screen:

	App.prototype.handleDeath = function handleDeath() {
		console.log('Player died!');
		if (this.state.sound) {
			deathSound.play();
		}
		this.setState({
			playing: false,
			header: 'You were defeated! Don\'t forget to level up your skills before trying the advanced challenges!'
		});

		document.getElementById('headerBar').style.backgroundColor = red;

		setTimeout(function () {
			this.setState({
				replay: true
			});
		}.bind(this), 3000);
	};
	// Take battle parameters and render outcome of any battle:

	App.prototype.handleBattle = function handleBattle(challengeID, damage, userHP, attack) {

		if (this.state.sound) {
			hitSound.play();
		}

		var level = this.state.level;
		var experience = this.state.experience;
		var attackLevel = this.state.attackPower;
		var challenge;
		var challengeHP;

		// Code to keep track of which challenge the user is attempting to persist damage on that challenge if user leaves without defeating it:
		// Values are based on the challenge global object:
		if (challengeID === 0) {
			challenge = 'front-end-1';challengeHP = challenges['front-end-1'][0];
		} else if (challengeID === 1) {
			challenge = 'front-end-2';challengeHP = challenges['front-end-2'][0];
		} else if (challengeID === 2) {
			challenge = 'front-end-3';challengeHP = challenges['front-end-3'][0];
		} else if (challengeID === 3) {
			challenge = 'front-end-4';challengeHP = challenges['front-end-4'][0];
		} else if (challengeID === 4) {
			challenge = 'front-end-5';challengeHP = challenges['front-end-5'][0];
		} else if (challengeID === 10) {
			challenge = 'data-viz-1';challengeHP = challenges['data-viz-1'][0];
		} else if (challengeID === 11) {
			challenge = 'data-viz-2';challengeHP = challenges['data-viz-2'][0];
		} else if (challengeID === 12) {
			challenge = 'data-viz-3';challengeHP = challenges['data-viz-3'][0];
		} else if (challengeID === 13) {
			challenge = 'data-viz-4';challengeHP = challenges['data-viz-4'][0];
		} else if (challengeID === 14) {
			challenge = 'data-viz-5';challengeHP = challenges['data-viz-5'][0];
		} else if (challengeID === 100) {
			challenge = 'back-end-1';challengeHP = challenges['back-end-1'][0];
		} else if (challengeID === 101) {
			challenge = 'back-end-2';challengeHP = challenges['back-end-2'][0];
		} else if (challengeID === 102) {
			challenge = 'back-end-3';challengeHP = challenges['back-end-3'][0];
		} else if (challengeID === 103) {
			challenge = 'back-end-4';challengeHP = challenges['back-end-4'][0];
		} else if (challengeID === 104) {
			challenge = 'back-end-5';challengeHP = challenges['back-end-5'][0];
		} else if (challengeID === 'boss') {
			challenge = 'boss';
		}

		// Compute damage and HP based on challenge parameters:
		var challengeNewHP = challengeHP - attack;
		var health = userHP - damage;

		if (challengeID !== 'boss') {
			challenges[challenge][0] = challengeNewHP;
		} else if (challengeID === 'boss') {
			bossHP = bossHP - attack;
			challengeNewHP = bossHP;
		}

		this.setState({
			life: health
		});

		// Computer outcome if user is either killed first or defeats the challenge first:
		if (health > 0 && challengeNewHP <= 0) {
			if (challengeID !== 'boss') {
				this.setState({
					level: level + 1,
					life: health + 250,
					attackPower: attackLevel + 50,
					experience: +experience + Math.round(Math.random() * 11750),
					header: challenges[challenge][1]
				});
			}
			if (challenge !== 'front-end-5' && challenge !== 'data-viz-5' && challenge !== 'back-end-5' && challenge !== 'boss') {
				if (this.state.sound) {
					challengeSound.play();
				}
			}
			// Account for the different certifications to trigger state changes when the player completes all the challenges for a given certification:
			var certs = this.state.certifications.slice();
			if (challenge === 'front-end-5') {
				certs[certs.length] = certificationsList['Front'];

				setTimeout(function () {
					if (this.state.sound) {
						bonusSound.play();
					}
					this.setState({
						life: health + 5000,
						attackPower: attackLevel + 500,
						experience: +experience + 2500,
						header: 'You earned the Front End Development Certification!',
						certifications: certs
					});
				}.bind(this), 250);
			} else if (challenge === 'data-viz-5') {
				certs[certs.length] = certificationsList['Viz'];

				setTimeout(function () {
					if (this.state.sound) {
						bonusSound.play();
					}
					this.setState({
						life: health + 10000,
						attackPower: attackLevel + 500,
						experience: +experience + 2500,
						header: 'You earned the Data Visualization Certification!',
						certifications: certs
					});
				}.bind(this), 250);
			} else if (challenge === 'back-end-5') {
				certs[certs.length] = certificationsList['Back'];

				setTimeout(function () {
					if (this.state.sound) {
						bonusSound.play();
					}
					this.setState({
						life: health + 15000,
						attackPower: attackLevel + 500,
						experience: +experience + 2500,
						header: 'You earned the Back End Development Certification!',
						certifications: certs
					});
				}.bind(this), 250);
			} else if (challenge === 'boss') {

				if (this.state.sound) {
					winner.play();
				}

				// Remove the boss from the map and re-render:
				var finalMap = this.state.map.slice();
				finalMap[68].cellType = 0;
				finalMap[69].cellType = 0;
				finalMap[88].cellType = 0;
				finalMap[89].cellType = 0;

				this.setState({
					header: 'You defeated the boss and earned the Full Stack Javascript Certification! Way to go!!!',
					map: finalMap
				});
				// Winning animatin:
				document.getElementById('headerBar').style.backgroundColor = brightBlue;
				document.getElementById('headerTitle').style.color = dark;
				return true;
			}
			// When user completes all three certifications, remove the barrier around the boss and re-render the map:
			if (certs.length === 3) {
				setTimeout(function () {

					var currentGameMap = this.state.map.slice();
					currentGameMap[47].cellType = 0;
					currentGameMap[48].cellType = 0;
					currentGameMap[49].cellType = 0;
					currentGameMap[50].cellType = 0;
					currentGameMap[67].cellType = 0;
					currentGameMap[70].cellType = 0;
					currentGameMap[87].cellType = 0;
					currentGameMap[90].cellType = 0;
					currentGameMap[107].cellType = 0;
					currentGameMap[108].cellType = 0;
					currentGameMap[109].cellType = 0;
					currentGameMap[110].cellType = 0;

					var attackLevel = this.state.attackPower;
					var exp = this.state.experience;
					var lifeHP = this.state.life;
					var level = this.state.level;

					this.setState({
						attackPower: attackLevel + 145000,
						experience: exp + 1000000,
						life: lifeHP + 500000,
						level: level + 250,
						map: currentGameMap,
						header: 'You\'ve acquired all the certifications, remarkable! The final boss is now unlocked!'
					});

					if (this.state.sound) {
						bonusSound.play();
					}
				}.bind(this), 2500);
			}
			return true;
		} else if (health <= 0) {
			this.handleDeath();
			return false;
		}
	};
	// Function to handle user movement based on arrow key input:

	App.prototype.handleKeyPress = function handleKeyPress(event) {

		// Check target location to see if there is an item there, if so, handle the challenge:
		var checkLocationForItem = function (locationObj) {
			var a = [];
			for (var key in skills) {
				a.push(key);
			}
			// Add attack  and exp points if user picks up an item based on current attack and exp points:
			var raiseAttack = function () {
				var currentAttack = this.state.attackPower;
				var newAttack;
				var currentHP = this.state.life;
				var newHP;
				if (currentAttack < 100) {
					newAttack = currentAttack + 15;newHP = currentHP + (150 - Math.round(Math.random() * 50));
				} else if (currentAttack < 250) {
					newAttack = currentAttack + 25;newHP = currentHP + (300 - Math.round(Math.random() * 150));
				} else if (currentAttack < 500) {
					newAttack = currentAttack + 75;newHP = currentHP + (500 - Math.round(Math.random() * 200));
				} else if (currentAttack < 1000) {
					newAttack = currentAttack + 125;newHP = currentHP + (600 - Math.round(Math.random() * 500));
				} else if (currentAttack >= 1000) {
					newAttack = currentAttack + 150;newHP = currentHP + (800 - Math.round(Math.random() * 600));
				}
				var experience = this.state.experience;
				var newExp = +experience + (5000 - Math.round(Math.random() * 2500));
				this.setState({
					attackPower: newAttack,
					experience: newExp,
					life: newHP
				});
			}.bind(this);
			for (var i = 0; i < a.length; i++) {
				if (a[i] === locationObj.cellType) {
					raiseAttack();
					if (this.state.skillItems.length <= 23) {
						if (this.state.sound) {
							newItemSound.play();
						}
					}
					return true;
				}
			}
			return false;
		}.bind(this);

		// Check target location to see if there is a challenge there, if so, handle the challenge:
		function checkLocationForChallenge(locationObj) {
			var cell = locationObj.cellType;
			if (cell === 'front' || cell === 'viz' || cell === 'back') {
				return true;
			} else if (cell === 'boss') {
				return true;
			} else return false;
		}

		// Calculate parameters for battle function if player encounters a challenge:
		var attemptChallenge = function (locationObj, newLocation) {

			var challenge = locationObj.cellType;
			var attack = this.state.attackPower;
			var userHealth = this.state.life;
			var damage, challengeHP, challengeID;

			if (challenge === 'front') {

				var currentChallenges = this.state.frontEndChallenges.slice();
				var check = 0;

				for (var a = 0; a < currentChallenges.length; a++) {
					if (currentChallenges[a] === newLocation) {
						challengeID = a * 1;
						check = 1;
						break;
					} else {
						check = 0;
					}
				}

				if (check === 0) {
					currentChallenges[currentChallenges.length] = newLocation;
					challengeID = (currentChallenges.length - 1) * 1;
				}

				this.setState({
					frontEndChallenges: currentChallenges
				});

				damage = 600 - Math.round(Math.random() * 200); // Damage for front end challenge
				if (this.handleBattle(challengeID, damage, userHealth, attack)) {
					return true;
				}
			} else if (challenge === 'viz') {
				var currentChallenges = this.state.dataVizChallenges.slice();
				var check = 0;

				for (var a = 0; a < currentChallenges.length; a++) {
					if (currentChallenges[a] === newLocation) {
						challengeID = a + 10;
						check = 1;
						break;
					} else {
						check = 0;
					}
				}

				if (check === 0) {
					currentChallenges[currentChallenges.length] = newLocation;
					challengeID = currentChallenges.length - 1 + 10;
				}

				this.setState({
					dataVizChallenges: currentChallenges
				});
				damage = 2500 - Math.round(Math.random() * 1000); // Damage for data viz challenge
				if (this.handleBattle(challengeID, damage, userHealth, attack)) {
					return true;
				}
			} else if (challenge === 'back') {
				var currentChallenges = this.state.backEndChallenges.slice();
				var check = 0;

				for (var a = 0; a < currentChallenges.length; a++) {
					if (currentChallenges[a] === newLocation) {
						challengeID = a + 100;
						check = 1;
						break;
					} else {
						check = 0;
					}
				}

				if (check === 0) {
					currentChallenges[currentChallenges.length] = newLocation;
					challengeID = currentChallenges.length - 1 + 100;
				}

				this.setState({
					backEndChallenges: currentChallenges
				});
				damage = 7500 - Math.round(Math.random() * 3000); // Damage for back end challenge
				if (this.handleBattle(challengeID, damage, userHealth, attack)) {
					return true;
				}
			} else if (challenge === 'boss') {
				challengeID = 'boss';
				damage = 100000 - Math.round(Math.random() * 50000); // Damage for boss
				if (this.handleBattle(challengeID, damage, userHealth, attack)) {
					console.log('The player wins!');
				}
			}
		}.bind(this);

		var currentMap = this.state.map.slice();
		var offset = this.state.offset;
		var userLocation = this.state.userLocation;
		var arrow = event.keyCode;

		// Functions to handle movement; there are four functions which are basically identical:

		// Move Left:
		if (arrow === 37) {

			// Prevent arrow key from scrolling the page:
			event.preventDefault();

			// If player dies, prevent further movement:
			if (this.state.playing) {

				var newLocation = userLocation - 1;

				// Calculate new location for player if the cell is empty:
				if (currentMap[newLocation].cellType === 0) {
					currentMap[userLocation].user = 0;
					currentMap[newLocation].user = 1;
					offset = offset - 1;
					this.updateMap(currentMap, newLocation, offset);
				}

				// If the cells is not empty, check is there is an item there, if there is, acquire the item and add it to the items array; then update the map:
				else if (checkLocationForItem(currentMap[newLocation])) {
						var currentSkills = this.state.skillItems.slice();
						currentSkills[currentSkills.length] = skills[currentMap[newLocation].cellType][0];

						this.setState({
							header: skills[currentMap[newLocation].cellType][1],
							skillItems: currentSkills
						});

						if (this.state.skillItems.length === 25) {
							setTimeout(function () {
								var attackLevel = this.state.attackPower;
								var exp = this.state.experience;
								var lifeHP = this.state.life;
								var level = this.state.level;
								if (this.state.sound) {
									bonusSound.play();
								}
								this.setState({
									header: 'You\'ve mastered all the skills! Your coding abilities are now overpowered!',
									attackPower: attackLevel + 2500,
									experience: exp + 15000,
									life: lifeHP + 15000,
									level: level + 50
								});
							}.bind(this), 250);
						};

						currentMap[userLocation].user = 0;
						currentMap[newLocation].user = 1;
						currentMap[newLocation].cellType = 0;
						offset = offset - 1;
						this.updateMap(currentMap, newLocation, offset);
					}

					// If it is not an item, there should be a challenge; handle the challenge:
					else if (checkLocationForChallenge(currentMap[newLocation])) {

							if (attemptChallenge(currentMap[newLocation], newLocation)) {
								currentMap[userLocation].user = 0;
								currentMap[newLocation].user = 1;
								currentMap[newLocation].cellType = 0;
								offset = offset - 1;
								this.updateMap(currentMap, newLocation, offset);
							}
						}
			}
		}
		// Move Up:
		else if (arrow === 38) {
				event.preventDefault();

				if (this.state.playing) {

					var newLocation = userLocation - 20;

					if (newLocation >= 0) {

						if (currentMap[newLocation].cellType === 0) {

							if (offset > 120) {
								offset = offset - 20;
							} else if (newLocation <= 130) {
								offset = newLocation;
							}

							currentMap[userLocation].user = 0;
							currentMap[newLocation].user = 1;

							this.updateMap(currentMap, newLocation, offset);
						} else if (checkLocationForItem(currentMap[newLocation])) {
							var currentSkills = this.state.skillItems.slice();
							currentSkills[currentSkills.length] = skills[currentMap[newLocation].cellType][0];

							this.setState({
								header: skills[currentMap[newLocation].cellType][1],
								skillItems: currentSkills
							});

							if (this.state.skillItems.length === 25) {
								setTimeout(function () {
									var attackLevel = this.state.attackPower;
									var exp = this.state.experience;
									var lifeHP = this.state.life;
									var level = this.state.level;
									if (this.state.sound) {
										bonusSound.play();
									}
									this.setState({
										header: 'You\'ve mastered all the skills! Your coding abilities are now overpowered!',
										attackPower: attackLevel + 50000,
										experience: exp + 15000,
										life: lifeHP + 100000,
										level: level + 50
									});
								}.bind(this), 250);
							};

							if (offset > 120) {
								offset = offset - 20;
							} else if (newLocation <= 130) {
								offset = newLocation;
							}

							currentMap[userLocation].user = 0;
							currentMap[newLocation].user = 1;
							currentMap[newLocation].cellType = 0;

							this.updateMap(currentMap, newLocation, offset);
						} else if (checkLocationForChallenge(currentMap[newLocation])) {

							if (attemptChallenge(currentMap[newLocation], newLocation)) {
								currentMap[userLocation].user = 0;
								currentMap[newLocation].user = 1;
								currentMap[newLocation].cellType = 0;

								this.updateMap(currentMap, newLocation, offset);
							}
						}
					}
				}
			}
			// Move Right
			else if (arrow === 39) {
					event.preventDefault();

					if (this.state.playing) {

						var newLocation = userLocation + 1;

						if (currentMap[newLocation].cellType === 0) {

							currentMap[userLocation].user = 0;
							currentMap[newLocation].user = 1;
							currentMap[newLocation].cellType = 0;

							offset = offset + 1;

							this.updateMap(currentMap, newLocation, offset);
						} else if (checkLocationForItem(currentMap[newLocation])) {
							var currentSkills = this.state.skillItems.slice();
							currentSkills[currentSkills.length] = skills[currentMap[newLocation].cellType][0];

							this.setState({
								header: skills[currentMap[newLocation].cellType][1],
								skillItems: currentSkills
							});

							if (this.state.skillItems.length === 25) {
								setTimeout(function () {
									var attackLevel = this.state.attackPower;
									var exp = this.state.experience;
									var lifeHP = this.state.life;
									var level = this.state.level;
									if (this.state.sound) {
										bonusSound.play();
									}
									this.setState({
										header: 'You\'ve mastered all the skills! Your coding abilities are now overpowered!',
										attackPower: attackLevel + 50000,
										experience: exp + 15000,
										life: lifeHP + 100000,
										level: level + 50
									});
								}.bind(this), 250);
							};

							currentMap[userLocation].user = 0;
							currentMap[newLocation].user = 1;
							currentMap[newLocation].cellType = 0;

							offset = offset + 1;

							this.updateMap(currentMap, newLocation, offset);
						} else if (checkLocationForChallenge(currentMap[newLocation])) {

							if (attemptChallenge(currentMap[newLocation], newLocation)) {
								currentMap[userLocation].user = 0;
								currentMap[newLocation].user = 1;
								currentMap[newLocation].cellType = 0;

								offset = offset + 1;

								this.updateMap(currentMap, newLocation, offset);
							}
						}
					}
				}
				// Move Down:
				else if (arrow === 40) {
						event.preventDefault();

						if (this.state.playing) {

							var newLocation = userLocation + 20;

							if (newLocation <= 2000) {

								if (currentMap[newLocation].cellType === 0) {

									if (offset < 120) {
										offset = offset + 20;
									} else if (newLocation >= 1870) {
										offset = 240 - (2000 - newLocation);
									}

									currentMap[userLocation].user = 0;
									currentMap[newLocation].user = 1;
									currentMap[newLocation].cellType = 0;

									this.updateMap(currentMap, newLocation, offset);
								} else if (checkLocationForItem(currentMap[newLocation])) {
									var currentSkills = this.state.skillItems.slice();
									currentSkills[currentSkills.length] = skills[currentMap[newLocation].cellType][0];

									this.setState({
										header: skills[currentMap[newLocation].cellType][1],
										skillItems: currentSkills
									});

									if (this.state.skillItems.length === 25) {
										setTimeout(function () {
											var attackLevel = this.state.attackPower;
											var exp = this.state.experience;
											var lifeHP = this.state.life;
											var level = this.state.level;
											if (this.state.sound) {
												bonusSound.play();
											}
											this.setState({
												header: 'You\'ve mastered all the skills! Your coding abilities are now overpowered!',
												attackPower: attackLevel + 50000,
												experience: exp + 15000,
												life: lifeHP + 100000,
												level: level + 50
											});
										}.bind(this), 250);
									};

									if (offset < 120) {
										offset = offset + 20;
									} else if (newLocation >= 1870) {
										offset = 240 - (2000 - newLocation);
									}

									currentMap[userLocation].user = 0;
									currentMap[newLocation].user = 1;
									currentMap[newLocation].cellType = 0;

									this.updateMap(currentMap, newLocation, offset);
								} else if (checkLocationForChallenge(currentMap[newLocation])) {

									if (attemptChallenge(currentMap[newLocation], newLocation)) {
										currentMap[userLocation].user = 0;
										currentMap[newLocation].user = 1;
										currentMap[newLocation].cellType = 0;

										this.updateMap(currentMap, newLocation, offset);
									}
								}
							}
						}
					}
	};
	// Generate the map data on component initial render:

	App.prototype.componentWillMount = function componentWillMount() {
		this.generateMap();
	};
	// Add event listeners to detect user movement:

	App.prototype.componentDidMount = function componentDidMount() {
		window.addEventListener('keydown', this.handleKeyPress);
	};
	// Main render function of root component:

	App.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'pageWrapper' },
			React.createElement(About, {
				about: this.state.about,
				startGame: this.startGame }),
			React.createElement(Header, {
				header: this.state.header }),
			React.createElement(
				'div',
				{ className: 'gameWrapper' },
				React.createElement(SideBar, {
					sound: this.state.sound,
					handleSound: this.handleSound,
					level: this.state.level,
					life: this.state.life,
					attack: this.state.attackPower,
					skillItems: this.state.skillItems,
					experience: this.state.experience,
					certifications: this.state.certifications }),
				React.createElement(Game, {
					gameMap: this.state.renderMap }),
				React.createElement(Gameover, {
					status: this.state.playing,
					replay: this.state.replay,
					reset: this.resetGame })
			)
		);
	};

	return App;
}(React.Component);

;

// Component to handle player's death and replay option:
var Gameover = function (_React$Component2) {
	_inherits(Gameover, _React$Component2);

	function Gameover() {
		_classCallCheck(this, Gameover);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	Gameover.prototype.render = function render() {
		var replayComponent;
		if (this.props.replay) {
			replayComponent = React.createElement(
				'div',
				{ className: 'replayPanel', id: 'replay' },
				React.createElement(
					'h1',
					{ onClick: this.props.reset },
					'Replay?'
				)
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'aboutScreen',
				transitionEnterTimeout: 500,
				transitionLeaveTimeout: 1000 },
			replayComponent
		);
	};

	return Gameover;
}(React.Component);

;

// Initial component to explain game rules and allow player to begin the game:
var About = function (_React$Component3) {
	_inherits(About, _React$Component3);

	function About() {
		_classCallCheck(this, About);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	About.prototype.render = function render() {
		var aboutComponent;
		if (this.props.about) {
			aboutComponent = React.createElement(
				'div',
				{ className: 'about', id: 'enterPanel' },
				React.createElement(
					'div',
					{ className: 'aboutContainer' },
					React.createElement(
						'h1',
						null,
						'Welcome to Free Code Camp in ',
						React.createElement(
							'a',
							{ target: '_blank', href: 'https://www.freecodecamp.com/challenges/build-a-roguelike-dungeon-crawler-game' },
							'Roguelike Dungeon Crawler Form'
						)
					),
					React.createElement(
						'div',
						{ className: 'content' },
						React.createElement(
							'p',
							null,
							'Three certifications stand between you and the final boss. Each certification requires you to master 5 projects, each is harder than the last. You will recognize the projects because they look like this:'
						),
						React.createElement(
							'div',
							{ className: 'challenges' },
							React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/front-end_zpsglpvzdlg.png', alt: 'Front End Challenges' }),
							React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/data-viz_zpshjybdrpe.png', alt: 'Data Viz Challenges' }),
							React.createElement('img', { src: 'http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/back-end_zpshhvy4hd1.png', alt: 'Back End Challenges' })
						),
						React.createElement(
							'p',
							{ className: 'challengeNames' },
							'Front End — Data Viz  —  Back End'
						),
						React.createElement(
							'p',
							null,
							'Collect tech skill items to level up your coding skills. Be careful, don\'t attempt the challenges without leveling up your skills. If you think you are ready, click the Free Code Camp Logo to begin.'
						),
						React.createElement('img', { className: 'fccLogo', src: 'http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/fcc_puck_zps7ddvum7q.png', alt: 'Enter Icon', onClick: this.props.startGame })
					)
				)
			);
		}
		return React.createElement(
			ReactCSSTransitionGroup,
			{
				transitionName: 'aboutScreen',
				transitionAppear: true,
				transitionAppearTimeout: 500,
				transitionEnterTimeout: 500,
				transitionLeaveTimeout: 1000 },
			aboutComponent
		);
	};

	return About;
}(React.Component);

;

// Header component which displays messages throughout the game:
var Header = function (_React$Component4) {
	_inherits(Header, _React$Component4);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	Header.prototype.render = function render() {
		var headerText = this.props.header;
		return React.createElement(
			'div',
			{ className: 'header', id: 'headerBar' },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'headerChange', transitionEnterTimeout: 1000, transitionLeaveTimeout: 10 },
				React.createElement(
					'div',
					{ key: headerText.substr(0, 5), className: 'headerWrapper' },
					React.createElement('div', { id: 'headerSpacer' }),
					React.createElement(
						'p',
						{ id: 'headerTitle' },
						headerText
					)
				)
			)
		);
	};

	return Header;
}(React.Component);

;

// Sidebar component which display player stats; i.e. Level, Exp, HP, Attack, Certifications, and Skills; these are updated conditionally as the player progresses in the game:
var SideBar = function (_React$Component5) {
	_inherits(SideBar, _React$Component5);

	function SideBar() {
		_classCallCheck(this, SideBar);

		return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
	}

	SideBar.prototype.render = function render() {
		var lifeStyle = {
			'color': mint
		};
		if (this.props.life < 2000) {
			lifeStyle = { 'color': alarm };
		};
		if (this.props.life >= 2000 && this.props.life <= 4500) {
			lifeStyle = { 'color': gold };
		};
		if (this.props.life > 10000) {
			lifeStyle = { 'color': brightBlue };
		};
		var statStyle = {
			'color': gray
		};
		var skillStyle = {
			background: 'none'
		};
		var certStyle = {
			background: 'none'
		};
		var certTitleStyle = statStyle;
		var skillTitleStyle = statStyle;

		var skillsRender = this.props.skillItems.map(function (skill) {
			return React.createElement(
				'div',
				{ key: skill, style: skillStyle },
				React.createElement('img', { src: skill, alt: 'Skill Item', style: { "width": "45px", "height": "45px" }, className: 'skillItem' })
			);
		});
		if (this.props.certifications.length === 3) {
			certTitleStyle = {
				'color': mint
			};
			certStyle = {
				'background': pink,
				'border': '1px solid' + gold
			};
		}
		if (this.props.skillItems.length === 25) {
			skillTitleStyle = {
				'color': mint
			};
			skillStyle = {
				background: blue
			};
		};
		if (this.props.skillItems.length === 25 && this.props.certifications.length === 3) {
			statStyle = {
				color: gold
			};
		};
		var certRender = this.props.certifications.map(function (cert, i) {
			var image = React.createElement('img', { src: cert, style: { 'width': '75px', 'height': '55px' }, className: 'certDiv' });
			return React.createElement(
				'div',
				{ className: 'certContainer', key: i },
				image
			);
		});
		var soundStyle = {
			'background': dark,
			'color': brightBlue
		};
		var sound = "Sound On";
		if (this.props.sound === false) {
			sound = "Sound Off";soundStyle = { 'background': 'rgb(20,20,20)', 'color': 'rgb(150,150,150)' };
		}
		return React.createElement(
			'div',
			{ className: 'sideBar' },
			React.createElement(
				'div',
				{ className: 'container' },
				React.createElement(
					'p',
					{ style: statStyle, className: 'title' },
					'Player Stats'
				),
				React.createElement(
					'p',
					{ style: statStyle, className: 'stat' },
					'Level: ',
					this.props.level
				),
				React.createElement(
					'p',
					{ style: statStyle, className: 'stat' },
					'HP: ',
					React.createElement(
						'span',
						{ style: lifeStyle },
						this.props.life
					)
				),
				React.createElement(
					'p',
					{ style: statStyle, className: 'stat' },
					'Experience: ',
					this.props.experience
				),
				React.createElement(
					'p',
					{ style: statStyle, className: 'stat' },
					'Attack: ',
					this.props.attack
				),
				React.createElement(
					'p',
					{ style: certTitleStyle, className: 'stat certTitle' },
					'Certifications: ',
					this.props.certifications.length,
					'/3'
				),
				React.createElement(
					'div',
					{ className: 'certFlex' },
					React.createElement(
						'div',
						{ style: certStyle, className: 'certList' },
						certRender
					)
				),
				React.createElement(
					'p',
					{ style: skillTitleStyle, className: 'stat skillsTitle' },
					'Skills: ',
					this.props.skillItems.length,
					'/25'
				),
				React.createElement(
					'div',
					{ className: 'skillsFlex' },
					React.createElement(
						'div',
						{ className: 'skillsList', style: skillStyle },
						skillsRender
					)
				),
				React.createElement(
					'div',
					{ className: 'soundContainer' },
					React.createElement(
						'div',
						{ className: 'soundControl', onClick: this.props.handleSound, style: soundStyle },
						React.createElement(
							'p',
							null,
							sound
						)
					)
				)
			)
		);
	};

	return SideBar;
}(React.Component);

;

// Main game board component, lots of conditional stlying going on here:
// Sliced game data array is mapped through and all the cell items are given a background based on their contents, e.g. empty, solid, player, challenge, item, boss, barrier.

var Game = function (_React$Component6) {
	_inherits(Game, _React$Component6);

	function Game() {
		_classCallCheck(this, Game);

		return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
	}

	Game.prototype.render = function render() {
		var gridStyle, gridColor;
		var mapData = this.props.gameMap;

		var renderMap = mapData.map(function (grid, i) {

			gridStyle = { width: grid.cellSize, height: grid.cellSize }; // Set cell sizes based on the pre-set dimensions

			// Set grid color for all empty grids, this is so that the gradient which is applied to the outer div is visible. Better aesthetics.
			gridColor = { background: empty };

			// Fill grids that are non-playable:
			if (grid.cellType === 1) {
				gridColor = { background: dark };
			}

			// Set images for challenges:
			else if (grid.cellType === 'front') {
					gridColor = { background: "url('http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/front-end_zpsglpvzdlg.png')", backgroundSize: 'cover' };
				} else if (grid.cellType === 'viz') {
					gridColor = { background: "url('http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/data-viz_zpshjybdrpe.png')", backgroundSize: 'cover' };
				} else if (grid.cellType === 'back') {
					gridColor = { background: "url('http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/back-end_zpshhvy4hd1.png')", backgroundSize: 'cover' };
				}

				// Set cells for barrier and boss:
				else if (grid.cellType === 'barrier') {
						gridColor = { background: barrierColor };
					} else if (grid.cellType === 'boss') {
						gridColor = { background: "url('http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/g4371_zpsizzy7el0.png')", backgroundSize: 'cover' };
					}

					// Set images for skill items:
					else if (grid.cellType === 'Bootstrap') {
							gridColor = { background: "url(" + skills.Bootstrap[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Bower') {
							gridColor = { background: "url(" + skills.Bower[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'CamperBot') {
							gridColor = { background: "url(" + skills.CamperBot[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Codepen') {
							gridColor = { background: "url(" + skills.Codepen[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'CSS3') {
							gridColor = { background: "url(" + skills.CSS3[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'D3') {
							gridColor = { background: "url(" + skills.D3[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'ES6') {
							gridColor = { background: "url(" + skills.ES6[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Git') {
							gridColor = { background: "url(" + skills.Git[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Github') {
							gridColor = { background: "url(" + skills.Github[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Gitter') {
							gridColor = { background: "url(" + skills.Gitter[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Grunt') {
							gridColor = { background: "url(" + skills.Grunt[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Heroku') {
							gridColor = { background: "url(" + skills.Heroku[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'HTML5') {
							gridColor = { background: "url(" + skills.HTML5[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'jQuery') {
							gridColor = { background: "url(" + skills.jQuery[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Javascript') {
							gridColor = { background: "url(" + skills.Javascript[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'MongoDB') {
							gridColor = { background: "url(" + skills.MongoDB[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'NodeJS') {
							gridColor = { background: "url(" + skills.NodeJS[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'React') {
							gridColor = { background: "url(" + skills.React[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Redux') {
							gridColor = { background: "url(" + skills.Redux[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Sass') {
							gridColor = { background: "url(" + skills.Sass[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'StackOverflow') {
							gridColor = { background: "url(" + skills.StackOverflow[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Sublime') {
							gridColor = { background: "url(" + skills.Sublime[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Terminal') {
							gridColor = { background: "url(" + skills.Terminal[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Twitter') {
							gridColor = { background: "url(" + skills.Twitter[0] + ")", backgroundSize: 'cover' };
						} else if (grid.cellType === 'Webpack') {
							gridColor = { background: "url(" + skills.Webpack[0] + ")", backgroundSize: 'cover' };
						}

			// Add user to user grid:
			if (grid.user === 1) {
				gridColor = { background: "url('http://i1361.photobucket.com/albums/r662/bonham000/Roguelike/fcc_puck_zps7ddvum7q.png')", backgroundSize: '51px 51px' };
			}

			// Return grid item:
			return React.createElement('div', {
				key: i,
				className: 'gridItem',
				style: Object.assign({}, gridStyle, gridColor) });
		});
		return React.createElement(
			'div',
			{ className: 'game', id: 'gameBoard' },
			React.createElement(
				'div',
				{ className: 'map', id: 'gameSpace' },
				renderMap
			)
		);
	};

	return Game;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));