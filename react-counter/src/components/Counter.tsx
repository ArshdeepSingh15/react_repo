import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
 
const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [auto, setAuto] = useState(false);
  const [stepSize, setStepSize] = useState(1);
 
  const delay = Math.floor(Math.random() * 5000 + 3000); //  8seconds
 
  const reqRef = useRef(0); // lock prevention
 
  // title updation
  useEffect(() => {
    document.title = `count is = ${count}`;
  }, [count]);
 
  // api mimic
  useEffect(() => {
    if (!auto) return;
    reqRef.current++;
    const currId = reqRef.current;
 
    console.log("stepsize fetching...");
    console.log("fetch started with delay: ", delay);
 
    // now delay
    const timout = window.setTimeout(() => {
      const ss = Math.floor(Math.random() * 20) + 1;
      console.log("fetch completed: stepsize: ", ss);
 
      //preventing race condition
      if (currId == reqRef.current) {
        setStepSize(ss);
        console.log("step size: ", ss);
      } else {
        console.log("ignored!", ss);
      }
    }, delay);
 
    // cleanup
    return () => {
      clearTimeout(timout);
      console.log("Fetching canceling...");
    };
  }, [auto]);
 
  // auto
  useEffect(() => {
    if (auto) {
      let interval = window.setInterval(() => {
        setCount((c) => c + stepSize);
      }, 1200);
 
      return () => clearInterval(interval);
    }
  }, [auto, stepSize]);
 
  // width Condition
  const [wide, setWide] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
 
  useLayoutEffect(() => {
    if (auto) {
      const ele = textRef.current;
      if (ele) {
        const width = ele.getBoundingClientRect().width;
 
        if (width > 20) {
          console.log("auto count stopped, width limit exceeded");
          setWide(true);
        }
      }
    }
  }, [count, auto, stepSize]);
 
  useEffect(() => {
    if (wide) {
      setAuto(false);
      setWide(false);
    }
  }, [wide]);
 
  return (
    <>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <h2>Counter</h2>
 
        <p>
          Current count: <span ref={textRef}>{count}</span>
        </p>
 
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <button onClick={() => setCount((c) => c - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Reset</button>
 
        <hr />
 
        <button onClick={() => setAuto((a) => !a)}>
          {auto ? "Stop Auto Count" : "Start Auto Count"}
        </button>
 
        <p>Stepsize : {stepSize}</p>
      </div>
    </>
  );
};
 
export default Counter;