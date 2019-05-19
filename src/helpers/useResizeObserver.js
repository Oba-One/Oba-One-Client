import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';

function useResizeObserver() {
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const throttleResize = useCallback(
    throttle(() => {
      const width = window.innerWidth;
      setWidth(width);
    }, 200),
  );

  useEffect(
    () => {
      window.addEventListener('resize', throttleResize);
      throttleResize();

      return () => {
        window.removeEventListener('resize', throttleResize);
      };
    },
    [windowWidth],
  );

  return windowWidth;
}

export default useResizeObserver;
