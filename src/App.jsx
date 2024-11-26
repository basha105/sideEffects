import { useEffect, useState } from 'react'
import './App.css'

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count +1)
    }, 1000);

    return () => {
      clearInterval(key);
    };

  }, []);

  

  return (
    <p>{counter} seconds have passed.</p>
  )
}


