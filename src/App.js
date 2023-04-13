import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    active,
    splitList,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Tien Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
        {/* render splitList */}
        <ul>
          {splitList.map((record, index) => {
            return (
              <li>
                <div className="split_list_display">
                  <p>{formatTime(record)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
