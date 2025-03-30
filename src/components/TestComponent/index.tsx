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

  const onClickPut = async () => {
    try {
      const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify({ text: "put test body" }),
      });
      const json = await res.json();
      console.log("put response", json);
    } catch (err) {
      console.error(err);
    }
  };

  const onClickPost = async () => {
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ text: "post test body" }),
      });
      const json = await res.json();
      console.log("post response", json);
    } catch (err) {
      console.error(err);
    }
  };

  const onClickDelete = async () => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
      });
      const json = await res.json();
      console.log("delete response", json);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <p>
        id: {test ? test.id : "-"} / click: {clickNum}
      </p>
      <p>
        <button onClick={onClick}>ボタン</button>
        <button onClick={onClickPut}>PUT</button>
        <button onClick={onClickPost}>POST</button>
        <button onClick={onClickDelete}>DELETE</button>
      </p>
    </div>
  );
};
