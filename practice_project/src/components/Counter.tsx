import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>カウンター</h1>
      <p>クリックしてカウントアップ</p>
      <p>現在：{count}</p>

      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count up!
      </button>
    </>
  );
};
