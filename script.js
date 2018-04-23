class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    };
  }

  reset() {
    this.setState({
      times: {
        minutes: 0,
        seconds: 0,
        miliseconds: 0
      }
    });
  }

  format() {
    return `${pad0(this.state.times.minutes)}:${pad0(
      this.state.times.seconds
    )}:${pad0(Math.floor(this.state.times.miliseconds))}`;
  }

  start() {
    if (!this.state.running) {
      this.setState({ running: true });
      this.watch = setInterval(() => this.step(), 10);
    }
  }
  step() {
    if (!this.state.running) return;
    this.calculate();
  }

  calculate() {
    let { miliseconds, seconds, minutes } = this.state.times;

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
        miliseconds,
        seconds,
        minutes
      }
    });
  }

  stop() {
    this.setState({ running: false });
    clearInterval(this.watch);
  }

  saveToList() {
    let resultsList = document.querySelector(".results");
    let listItem = document.createElement("li");
    listItem.innerText = this.format(this.state.times);
    resultsList.appendChild(listItem);
  }

  clearList() {
    let clearResultsList = document.querySelector(".results");
    while (clearResultsList.firstChild) {
      clearResultsList.removeChild(clearResultsList.firstChild);
    }
  }

  render() {
    return (
      <div className={"timer"}>
        <div className={"container"}>
          <nav className={"controls-top"}>
            <a
              href={"#"}
              className={"button"}
              id={"start"}
              onClick={() => this.start()}
            >
              Start
            </a>
            <a
              href={"#"}
              className={"button"}
              id={"stop"}
              onClick={() => this.stop()}
            >
              Stop
            </a>
            <a
              href={"#"}
              className={"button"}
              id={"reset"}
              onClick={() => this.reset()}
            >
              Reset
            </a>
          </nav>
          <div className={"stopwatch"}>{this.format()}</div>
          <div className={"controls-bottom"}>
            <a
              href={"#"}
              className={"button"}
              id={"save"}
              onClick={() => this.saveToList()}
            >
              Save
            </a>
            <a
              href={"#"}
              className={"button"}
              id={"clear-list"}
              onClick={() => this.clearList()}
            >
              Clear
            </a>
          </div>
        </div>
        <ul className={"results"} />
      </div>
    );
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = "0" + result;
  }
  return result;
}

const element = React.createElement(StopWatch);
ReactDOM.render(element, document.getElementById("app"));