"use client";

import { useState, useEffect } from "react";
import type { Test } from "@/types/test";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const TestComponent = () => {
  const [clickNum, setClickNum] = useState<number>(0);
  const [test, setTest] = useState<Test | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const json: Test = await res.json();
        setTest(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTest();
  }, []);

  const onClick = () => {
    setClickNum(clickNum + 1);
  };

  return (
    <div>
      <p>
        id: {test ? test.id : "-"} / click: {clickNum}
      </p>
      <p>
        <button onClick={onClick}>ボタン</button>
      </p>
    </div>
  );
};
