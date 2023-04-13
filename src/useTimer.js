import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const [splitList, setSplitList] = useState([]);

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    isStart.current = true;
    // isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) setTime((time) => time + 1);
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    startTimer();
  };
  const resetTimer = () => {
    stopTimer();
    setTime(0);
    setSplitList([]);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const splitTimer = () => {
    console.log("split time");
    // save time to splitList
    if (isStart.current) {
      setSplitList([...splitList, time]);
    }
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    splitTimer,
    splitList,
  };
};

export default useTimer;
