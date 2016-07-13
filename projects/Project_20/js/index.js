'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Some global style definitions:
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var transitionDivStyle = {
  'width': '250px',
  'height': '250px',
  'padding': '10px',
  'margin': '25px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '30px',
  'fontFamily': 'Avenir',
  'fontWeight': 'bold',
  'cursor': 'pointer',
  'borderRadius': '5px',
  'color': 'rgb(25,25,25)'
};

var btnActive = { 'background': '#06FF96' };
var btnInactive = { 'background': '#FDD692' };

// Root Component:
var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      toggleAll: true,
      fade: true,
      slideIn: true,
      slideUp: true,
      slider: true,
      height: true,
      width: false,
      size: false,
      rotate: false
    };

    _this.toggleAll = _this.toggleAll.bind(_this);
    _this.toggleFade = _this.toggleFade.bind(_this);
    _this.toggleSlideIn = _this.toggleSlideIn.bind(_this);
    _this.toggleSlideUp = _this.toggleSlideUp.bind(_this);
    _this.toggleSlider = _this.toggleSlider.bind(_this);
    _this.toggleHeightIn = _this.toggleHeightIn.bind(_this);
    _this.toggleWidthIn = _this.toggleWidthIn.bind(_this);
    _this.toggleSize = _this.toggleSize.bind(_this);
    _this.toggleRotate = _this.toggleRotate.bind(_this);

    return _this;
  }

  Root.prototype.toggleAll = function toggleAll() {
    if (!this.state.toggleAll) {

      this.setState({
        toggleAll: true,
        fade: true,
        slideIn: true,
        slideUp: true,
        slider: true,
        height: true
      });

      if (!this.state.width) {
        this.toggleWidthIn();
      }

      if (!this.state.size) {
        this.toggleSize();
      }

      if (!this.state.rotate) {
        this.toggleRotate();
      }
    } else {

      this.setState({
        toggleAll: false,
        fade: false,
        slideIn: false,
        slideUp: false,
        slider: false,
        height: false,
        rotate: false
      });

      if (this.state.width) {
        this.toggleWidthIn();
      }

      if (this.state.size) {
        this.toggleSize();
      }

      if (this.state.rotate) {
        this.toggleRotate();
      }
    }
  };

  Root.prototype.toggleFade = function toggleFade() {
    if (!this.state.fade) {
      this.setState({
        fade: true
      });
    } else {
      this.setState({
        fade: false
      });
    }
  };

  Root.prototype.toggleSlideIn = function toggleSlideIn() {
    if (!this.state.slideIn) {
      this.setState({
        slideIn: true
      });
    } else {
      this.setState({
        slideIn: false
      });
    }
  };

  Root.prototype.toggleSlideUp = function toggleSlideUp() {
    if (!this.state.slideUp) {
      this.setState({
        slideUp: true
      });
    } else {
      this.setState({
        slideUp: false
      });
    }
  };

  Root.prototype.toggleSlider = function toggleSlider() {
    if (!this.state.slider) {
      this.setState({
        slider: true
      });
    } else {
      this.setState({
        slider: false
      });
    }
  };

  Root.prototype.toggleHeightIn = function toggleHeightIn() {
    if (!this.state.height) {
      this.setState({
        height: true
      });
    } else {
      this.setState({
        height: false
      });
    }
  };

  Root.prototype.toggleWidthIn = function toggleWidthIn() {
    if (!this.state.width) {
      this.setState({
        width: true
      });
      setTimeout(function () {
        var element = document.getElementById('widthInId');
        element.classList.add('widthInTextAfter');
      }, 15);
    } else {
      this.setState({
        width: false
      });
      var element = document.getElementById('widthInId');
      element.className = element.className.replace('widthInTextAfter', '');
    }
  };

  Root.prototype.toggleSize = function toggleSize() {
    if (!this.state.size) {
      this.setState({
        size: true
      });
      setTimeout(function () {
        var element = document.getElementById('sizeDivId');
        element.classList.add('sizeTextAfter');
      }, 15);
    } else {
      this.setState({
        size: false
      });
      var element = document.getElementById('sizeDivId');
      element.className = element.className.replace('sizeTextAfter', '');
    }
  };

  Root.prototype.toggleRotate = function toggleRotate() {
    if (!this.state.rotate) {
      this.setState({
        rotate: true
      });
      setTimeout(function () {
        var element = document.getElementById('rotateDivId');
        element.classList.add('rotateTextAfter');
      }, 15);
    } else {
      this.setState({
        rotate: false
      });
      var element = document.getElementById('rotateDivId');
      element.className = element.className.replace('rotateTextAfter', '');
    }
  };

  Root.prototype.componentWillMount = function componentWillMount() {
    this.toggleWidthIn();
    this.toggleSize();
    this.toggleRotate();
  };

  Root.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'React CSS Transition Demos'
      ),
      React.createElement(Controller, {
        toggleAllBtns: this.state.toggleAll,
        fade: this.state.fade,
        slideIn: this.state.slideIn,
        slideUp: this.state.slideUp,
        slider: this.state.slider,
        height: this.state.height,
        width: this.state.width,
        size: this.state.size,
        rotate: this.state.rotate,
        toggleAll: this.toggleAll,
        toggleFade: this.toggleFade,
        toggleSlideIn: this.toggleSlideIn,
        toggleSlideUp: this.toggleSlideUp,
        toggleSlider: this.toggleSlider,
        toggleHeightIn: this.toggleHeightIn,
        toggleWidthIn: this.toggleWidthIn,
        toggleSize: this.toggleSize,
        toggleRotate: this.toggleRotate }),
      React.createElement(
        'div',
        { className: 'transitionsContainer' },
        React.createElement(FadeIn, { fade: this.state.fade, toggleFade: this.toggleFade }),
        React.createElement(SlideIn, { slideIn: this.state.slideIn, toggleSlideIn: this.toggleSlideIn }),
        React.createElement(SlideUp, { slideUp: this.state.slideUp, toggleSlideUp: this.toggleSlideUp }),
        React.createElement(Slider, { slider: this.state.slider, toggleSlider: this.toggleSlider }),
        React.createElement(HeightIn, { height: this.state.height, toggleHeightIn: this.toggleHeightIn }),
        React.createElement(WidthIn, { width: this.state.width, toggleWidthIn: this.toggleWidthIn }),
        React.createElement(SizeIn, { size: this.state.size, toggleSize: this.toggleSize }),
        React.createElement(RotateIn, { rotate: this.state.rotate, toggleRotate: this.toggleRotate })
      )
    );
  };

  return Root;
}(React.Component);

;

// Component for button controls:
var Controller = function (_React$Component2) {
  _inherits(Controller, _React$Component2);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Controller.prototype.render = function render() {
    var toggleAllText = "Toggle All On";
    var toggleAllBtnStyle = btnInactive;
    if (this.props.toggleAllBtns) {
      toggleAllBtnStyle = btnActive;
      toggleAllText = "Toggle All Off";
    }
    var fadeText = "Fade In";
    var fadeBtnStyle = btnInactive;
    if (this.props.fade) {
      fadeBtnStyle = btnActive;
      fadeText = "Fade Out";
    }
    var slideInText = "Slide In Left";
    var slideInBtnStyle = btnInactive;
    if (this.props.slideIn) {
      slideInBtnStyle = btnActive;
      slideInText = "Slide Out Right";
    }
    var slideUpText = "Slide In Down";
    var slideUpBtnStyle = btnInactive;
    if (this.props.slideUp) {
      slideUpBtnStyle = btnActive;
      slideUpText = "Slide Out Up";
    }
    var sliderText = "Slider In";
    var sliderBtnStyle = btnInactive;
    if (this.props.slider) {
      sliderBtnStyle = btnActive;
      sliderText = "Slider Out";
    }
    var heightText = "Height In";
    var heightBtnStyle = btnInactive;
    if (this.props.height) {
      heightBtnStyle = btnActive;
      heightText = "Height Out";
    }
    var widthText = "Width In";
    var widthBtnStyle = btnInactive;
    if (this.props.width) {
      widthBtnStyle = btnActive;
      widthText = "Width Out";
    }
    var sizeText = "Size In";
    var sizeBtnStyle = btnInactive;
    if (this.props.size) {
      sizeBtnStyle = btnActive;
      sizeText = "Size Out";
    }
    var rotateText = "Rotate In";
    var rotateBtnStyle = btnInactive;
    if (this.props.rotate) {
      rotateBtnStyle = btnActive;
      rotateText = "Rotate Out";
    }
    return React.createElement(
      'div',
      { className: 'controlWrapper' },
      React.createElement(
        'button',
        { style: toggleAllBtnStyle, onClick: this.props.toggleAll, className: 'allBtn' },
        toggleAllText
      ),
      React.createElement(
        'div',
        { className: 'controls' },
        React.createElement(
          'button',
          { style: fadeBtnStyle, onClick: this.props.toggleFade },
          fadeText
        ),
        React.createElement(
          'button',
          { style: slideInBtnStyle, onClick: this.props.toggleSlideIn },
          slideInText
        ),
        React.createElement(
          'button',
          { style: slideUpBtnStyle, onClick: this.props.toggleSlideUp },
          slideUpText
        ),
        React.createElement(
          'button',
          { style: sliderBtnStyle, onClick: this.props.toggleSlider },
          sliderText
        ),
        React.createElement(
          'button',
          { style: heightBtnStyle, onClick: this.props.toggleHeightIn },
          heightText
        ),
        React.createElement(
          'button',
          { style: widthBtnStyle, onClick: this.props.toggleWidthIn },
          widthText
        ),
        React.createElement(
          'button',
          { style: sizeBtnStyle, onClick: this.props.toggleSize },
          sizeText
        ),
        React.createElement(
          'button',
          { style: rotateBtnStyle, onClick: this.props.toggleRotate },
          rotateText
        ),
        React.createElement('hr', null)
      )
    );
  };

  return Controller;
}(React.Component);

;

// Fade In Component:
var FadeIn = function (_React$Component3) {
  _inherits(FadeIn, _React$Component3);

  function FadeIn() {
    _classCallCheck(this, FadeIn);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  FadeIn.prototype.render = function render() {
    var background = {
      'background': '#c03546'
    };
    var component;
    if (this.props.fade) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleFade, className: 'transitionBox' },
        React.createElement(
          'p',
          null,
          'This div fades in and out'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'fadeDiv',
        transitionEnterTimeout: 1000,
        transitionLeaveTimeout: 1000 },
      component
    );
  };

  return FadeIn;
}(React.Component);

;

// Slide In Component:
var SlideIn = function (_React$Component4) {
  _inherits(SlideIn, _React$Component4);

  function SlideIn() {
    _classCallCheck(this, SlideIn);

    return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
  }

  SlideIn.prototype.render = function render() {
    var background = {
      'background': '#004e66'
    };
    var component;
    if (this.props.slideIn) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleSlideIn, className: 'transitionBox' },
        React.createElement(
          'p',
          null,
          'This div slides in and out'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'slideInDiv',
        transitionEnterTimeout: 800,
        transitionLeaveTimeout: 800 },
      component
    );
  };

  return SlideIn;
}(React.Component);

;

// Slide Up Component:
var SlideUp = function (_React$Component5) {
  _inherits(SlideUp, _React$Component5);

  function SlideUp() {
    _classCallCheck(this, SlideUp);

    return _possibleConstructorReturn(this, _React$Component5.apply(this, arguments));
  }

  SlideUp.prototype.render = function render() {
    var background = {
      'background': '#f8ca00'
    };
    var component;
    if (this.props.slideUp) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleSlideUp, className: 'transitionBox' },
        React.createElement(
          'p',
          null,
          'This div slides up and down'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'slideUpDiv',
        transitionEnterTimeout: 800,
        transitionLeaveTimeout: 800 },
      component
    );
  };

  return SlideUp;
}(React.Component);

;

// Slider Component:
var Slider = function (_React$Component6) {
  _inherits(Slider, _React$Component6);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _React$Component6.apply(this, arguments));
  }

  Slider.prototype.render = function render() {
    var background = {
      'background': '#348AA7'
    };
    var component;
    if (this.props.slider) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleSlider, className: 'transitionBox' },
        React.createElement(
          'p',
          null,
          'This div slides around'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'sliderDiv',
        transitionEnterTimeout: 1000,
        transitionLeaveTimeout: 1000 },
      component
    );
  };

  return Slider;
}(React.Component);

;

// Height In/Out Component:
var HeightIn = function (_React$Component7) {
  _inherits(HeightIn, _React$Component7);

  function HeightIn() {
    _classCallCheck(this, HeightIn);

    return _possibleConstructorReturn(this, _React$Component7.apply(this, arguments));
  }

  HeightIn.prototype.render = function render() {
    var background = {
      'background': '#BF4E30'
    };
    var component;
    if (this.props.height) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleHeightIn, className: 'transitionBox' },
        React.createElement(
          'p',
          null,
          'This div grows and squishes'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'heightInDiv',
        transitionEnterTimeout: 1000,
        transitionLeaveTimeout: 1000 },
      component
    );
  };

  return HeightIn;
}(React.Component);

;

// Width In/Out Component:
var WidthIn = function (_React$Component8) {
  _inherits(WidthIn, _React$Component8);

  function WidthIn() {
    _classCallCheck(this, WidthIn);

    return _possibleConstructorReturn(this, _React$Component8.apply(this, arguments));
  }

  WidthIn.prototype.render = function render() {
    var background = {
      'background': '#ed317f'
    };
    var component;
    if (this.props.width) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleWidthIn, className: 'transitionBox' },
        React.createElement(
          'p',
          { id: 'widthInId', className: 'widthInTextBefore' },
          'This div expands and squeezes (with fade in text!)'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'widthInDiv',
        transitionEnterTimeout: 750,
        transitionLeaveTimeout: 1000 },
      component
    );
  };

  return WidthIn;
}(React.Component);

;

// Size In/Out Component:
var SizeIn = function (_React$Component9) {
  _inherits(SizeIn, _React$Component9);

  function SizeIn() {
    _classCallCheck(this, SizeIn);

    return _possibleConstructorReturn(this, _React$Component9.apply(this, arguments));
  }

  SizeIn.prototype.render = function render() {
    var background = {
      'background': '#1D2D44'
    };
    var component;
    if (this.props.size) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleSize, className: 'transitionBox' },
        React.createElement(
          'p',
          { id: 'sizeDivId', className: 'sizeTextBefore' },
          'This div expands and contracts (with fade in text!)'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'sizeInDiv',
        transitionEnterTimeout: 750,
        transitionLeaveTimeout: 1000 },
      component
    );
  };

  return SizeIn;
}(React.Component);

;

// Size In/Out Component:
var RotateIn = function (_React$Component10) {
  _inherits(RotateIn, _React$Component10);

  function RotateIn() {
    _classCallCheck(this, RotateIn);

    return _possibleConstructorReturn(this, _React$Component10.apply(this, arguments));
  }

  RotateIn.prototype.render = function render() {
    var background = {
      'background': '#5B3758'
    };
    var component;
    if (this.props.rotate) {
      component = React.createElement(
        'div',
        { style: Object.assign({}, transitionDivStyle, background), onClick: this.props.toggleRotate, className: 'transitionBox' },
        React.createElement(
          'p',
          { id: 'rotateDivId', className: 'rotateTextBefore' },
          'This div rotates!'
        )
      );
    }
    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: 'rotateInDiv',
        transitionEnterTimeout: 1000,
        transitionLeaveTimeout: 1500 },
      component
    );
  };

  return RotateIn;
}(React.Component);

;

ReactDOM.render(React.createElement(Root, null), document.getElementById('main'));