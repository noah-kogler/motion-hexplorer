import React, { useLayoutEffect, useState } from 'react';

export default function useDocumentFontSize() {
  const [fontSize, setFontSize] = useState(0);
  useLayoutEffect(() => {
    setFontSize(parseFloat(getComputedStyle(document.documentElement).fontSize));

    // function updateSize() {
    //   setSize({width: window.innerWidth, height: window.innerHeight});
    // }
    // window.addEventListener('resize', updateSize);
    // updateSize();
    // return () => window.removeEventListener('resize', updateSize);
  }, []);
  return fontSize;
}
