```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct usage: Effect runs only when count changes
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // cleanup function
  }, [count]); // add count to dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```