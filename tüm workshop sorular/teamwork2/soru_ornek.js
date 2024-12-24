//        1. SORU ÖRNEK
// ****  Kullanışlı Özel Hook Örnekleri:  useFocus Hook'u , useDelay Hook'u, useWindowSize Hook'u, useFetch Hook'u, useLocalStorage Hook'u, useMediaQuery Hook'u, useToggle Hook'u


// Diyelim ki, bir bileşende pencere boyutunu izleyen bir hook yapmak istiyorsunuz:

/*
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Temizlik işlevi
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;


// Bu useWindowSize hook'u, pencere boyutlarını izler ve bu bilgiyi döndürür. Şimdi bu hook'u herhangi bir bileşende kullanabilirsiniz:


import React from 'react';
import useWindowSize from './useWindowSize';

function MyComponent() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Pencere genişliği: {width}px</p>
      <p>Pencere yüksekliği: {height}px</p>
    </div>
  );
}

export default MyComponent;

*/