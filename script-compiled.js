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

    _this.state = {};
    return _this;
  }

  _createClass(StopWatch, [{
    key: "render",
    value: function render() {
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
              { href: "#", className: "button", id: "start" },
              "Start"
            ),
            React.createElement(
              "a",
              { href: "#", className: "button", id: "stop" },
              "Stop"
            ),
            React.createElement(
              "a",
              { href: "#", className: "button", id: "reset" },
              "Reset"
            )
          ),
          React.createElement("div", { className: "stopwatch" }),
          React.createElement(
            "div",
            { className: "controls-bottom" },
            React.createElement(
              "a",
              { href: "#", className: "button", id: "save" },
              "Save"
            ),
            React.createElement(
              "a",
              { href: "#", className: "button", id: "clear-list" },
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

var element = React.createElement(StopWatch);
ReactDOM.render(element, document.getElementById("app"));

/*class Stopwatch {
  constructor(display, results) {
    this.running = false;
    this.display = display;
    this.results = results;
    this.reset();
    this.print(this.times);
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      miliseconds: 0
    };
  }

  print() {
    this.display.innerText = this.format(this.times);
  }
  format(times) {
    return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(
      Math.floor(times.miliseconds)
    )}`;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(() => this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
    this.times.miliseconds += 1;
    if (this.times.miliseconds >= 100) {
      this.times.seconds += 1;
      this.times.miliseconds = 0;
    }
    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  saveToList() {
    const listItem = document.createElement("li")
    listItem.innerText = this.format(this.times);
    this.results.appendChild(listItem);
  }

  clearList() {
    this.results.innerHTML = "";
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

const stopwatch = new Stopwatch(
  document.querySelector(".stopwatch"),
  document.querySelector(".results")
);

const startButton = document.getElementById("start");
startButton.addEventListener("click", () => stopwatch.start());

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => stopwatch.stop());

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  stopwatch.reset(), stopwatch.print();
});

const saveButton = document.getElementById("save");
saveButton.addEventListener("click", () => stopwatch.saveToList());

const clearListButton = document.getElementById("clear-list");
clearListButton.addEventListener("click", () => stopwatch.clearList());
*/
