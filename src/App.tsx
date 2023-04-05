import { useState, useEffect, useRef } from "react";

import { fetchFlag, typingSpeed } from "./utils";

export const App = () => {
  const flag = useRef("");
  const [flagCaptured, setFlagCaptured] = useState(false);
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const { flagPromise, abort } = fetchFlag();

    flagPromise.then((fetchedFlag) => {
      flag.current = fetchedFlag;
      setFlagCaptured(true);

      let tick = 0;
      const interval = setInterval(() => {
        tick += 1;
        setTicks(tick);
        if (tick === flag.current?.length) {
          clearInterval(interval);
        }
      }, typingSpeed);
    });

    return abort;
  }, []);

  if (!flagCaptured) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {Array(ticks)
        .fill(0)
        .map((_, index) => (
          <li key={index}>{flag.current[index]}</li>
        ))}
    </ul>
  );
};
