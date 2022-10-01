import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

const App = () => {
  const [text, setText] = useState("Hello World!");

  const call = useCallback(async () => {
    const respones = await axios.get("http://localhost:4000/call");

    setTimeout(() => {
      setText(respones.data.data);
    }, 3000);
  }, []);

  // 3.DidMount
  useEffect(() => {
    // 백앤드와 통신을 한다.
    call();
    // 데이터를 받아서 변수에 저장한다.
    //const response = {
    //data: "이브이 왜 안줘",
    //};

    // 변수를 state에 저장한다.
    //setTimeout(() => {
    //setText(response.data);
    //}, 3000);

    // 4.UnMount
    //return () => {
    //console.log("asfdadfas");
    //};
  }, []);

  // 1.constructor
  //const text = "Hello World";
  //console.log("123213");

  // 2.rendering
  return <div>{text}</div>;
};

export default App;
