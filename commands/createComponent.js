const fs = require("fs");

// 파라미터
let param = process.argv[2];

const firstTxt = param.substring(0, 1);
const UpperTxt = firstTxt.toUpperCase();
const ingyerTxt = param.substring(1, param.length);
param = UpperTxt + ingyerTxt;

const fileName = param + ".jsx";

// console.log(param);
// console.log(fileName);

const targetPath = `./components/${fileName}`;

const targetContent = `
import React, {useState} from "react";
import styled from "styled-components";

const ${param} = () => {
    ////////// STATE //////////

    ////////// HOOKS //////////

    ////////// EFFECT //////////

    ////////// HANDLER //////////

    return <div> ${param} </div>

};

export default ${param};
`;

console.log(targetPath);

// 그 파일이 있으면 어떻게?

fs.readFile(targetPath, "utf-8", (error, description) => {
  if (error) {
    // 파일이 없을 때! 에라가 나겠지
    console.log("✅ 파일이 없어 만들수 있어");
    //경로, 내용, 콜백함수
    fs.writeFile(targetPath, targetContent, (error) => {
      if (error) {
        console.error(error);
        console.log("❌ jsx 파일 생성에 실패 했습니다.");
      }
    });
  } else {
    console.log("❌ Aleary Exist The File. Can Not Make It!");
  }
});
