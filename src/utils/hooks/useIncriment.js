// hook that incriments a number every n amount of seconds within a range provided from 0 to the high
// [0, 3] start at zero, count up to three and repeat every n seconds. 0... 1... 2... 3... 0... 1... 2... 3...

import { useEffect, useState } from "react";

export function useIncriment(n = 1, high = 10) {
  const [count, setCount] = useState(0);

  const incriment = () =>
    count >= high ? setCount(0) : setCount((prev) => prev + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      incriment();
    }, n * 1000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, n]);

  return { count, setCount };
}
