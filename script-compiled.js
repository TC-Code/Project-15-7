"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StopWatch = function (_React$Component) {
  _inherits(StopWatch, _React$Component);

  function StopWatch(props) {
    _classCallCheck(this, StopWatch);

    var _this = _possibleConstructorReturn(this, (StopWatch.__proto__ || Object.getPrototypeOf(StopWatch)).call(this, props));

    _this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
    return _this;
  }

  _createClass(StopWatch, [{
    key: "reset",
    value: function reset() {
      this.setState({
        times: {
          minutes: 0,
          seconds: 0,
          miliseconds: 0
        }
      });
    }
  }, {
    key: "format",
    value: function format() {
      return pad0(this.state.times.minutes) + ":" + pad0(this.state.times.seconds) + ":" + pad0(Math.floor(this.state.times.miliseconds));
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (!this.state.running) {
        this.setState({ running: true });
        this.watch = setInterval(function () {
          return _this2.step();
        }, 10);
      }
    }
  }, {
    key: "step",
    value: function step() {
      if (!this.state.running) return;
      this.calculate();
    }
  }, {
    key: "calculate",
    value: function calculate() {
      var _state$times = this.state.times,
          miliseconds = _state$times.miliseconds,
          seconds = _state$times.seconds,
          minutes = _state$times.minutes;


      miliseconds += 1;
      if (miliseconds >= 100) {
        seconds += 1;
        miliseconds = 0;
      }
      if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
      }

      this.setState({
        times: {
          miliseconds: miliseconds,
          seconds: seconds,
          minutes: minutes
        }
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      this.setState({ running: false });
      clearInterval(this.watch);
    }
  }, {
    key: "saveToList",
    value: function saveToList() {
      var resultsList = ReactDOM.findDOMNode(this).querySelector(".results");
      var listItem = document.createElement("li");
      listItem.innerText = this.format(this.state.times);
      resultsList.appendChild(listItem);
    }
  }, {
    key: "clearList",
    value: function clearList() {
      var clearResultsList = ReactDOM.findDOMNode(this).querySelector(".results");
      while (clearResultsList.firstChild) {
        clearResultsList.removeChild(clearResultsList.firstChild);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "div",
        { className: "timer" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "nav",
            { className: "controls-top" },
            React.createElement(
              "a",
              {
                href: "#",
                className: "button",
                id: "start",
                onClick: function onClick() {
                  return _this3.start();
                }
              },
              "Start"
            ),
            React.createElement(
              "a",
              {
                href: "#",
                className: "button",
                id: "stop",
                onClick: function onClick() {
                  return _this3.stop();
                }
              },
              "Stop"
            ),
            React.createElement(
              "a",
              {
                href: "#",
                className: "button",
                id: "reset",
                onClick: function onClick() {
                  return _this3.reset();
                }
              },
              "Reset"
            )
          ),
          React.createElement(
            "div",
            { className: "stopwatch" },
            this.format()
          ),
          React.createElement(
            "div",
            { className: "controls-bottom" },
            React.createElement(
              "a",
              {
                href: "#",
                className: "button",
                id: "save",
                onClick: function onClick() {
                  return _this3.saveToList();
                }
              },
              "Save"
            ),
            React.createElement(
              "a",
              {
                href: "#",
                className: "button",
                id: "clear-list",
                onClick: function onClick() {
                  return _this3.clearList();
                }
              },
              "Clear"
            )
          )
        ),
        React.createElement("ul", { className: "results" })
      );
    }
  }]);

  return StopWatch;
}(React.Component);

function pad0(value) {
  var result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

var element = React.createElement(StopWatch);
ReactDOM.render(element, document.getElementById("app"));
ReactDOM.render(element, document.getElementById("app-two"));
