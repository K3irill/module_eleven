"use strict";

const parser = new DOMParser();

const xmlStr = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlStr, "text/xml");
console.log(xmlDOM);

const students = xmlDOM.querySelectorAll("student");

const result = {
  list: Array.from(students).map((student) => {
    const firstName = student.querySelector("first").textContent;
    const secondName = student.querySelector("second").textContent;
    const age = student.querySelector("age").textContent;
    const prof = student.querySelector("prof").textContent;
    const lang = student.querySelector("name").getAttribute("lang");

    return {
      name: `${firstName} ${secondName}`,
      age: age,
      prof: prof,
      lang: lang,
    };
  }),
};
console.log("result", result);


// const listNode = xmlDOM.querySelector("list");
// const studentNode = listNode.querySelectorAll("student");

// const nameStudent = listNode.querySelectorAll("name");
// const firstNameStudent = listNode.querySelectorAll("first");
// const secondNameStudent = listNode.querySelectorAll("second");
// const ageStudent = listNode.querySelectorAll("age");
// const profStudent = listNode.querySelectorAll("prof");

// let langAttrs = [];
// nameStudent.forEach((el) => langAttrs.push(el.getAttribute("lang")));

// const result = {
//   list: [
//     {
//       name: `${firstNameStudent[0].textContent} ${secondNameStudent[0].textContent}`,
//       age: ageStudent[0].textContent,
//       prof: profStudent[0].textContent,
//       lang: langAttrs[0],
//     },
//     {
//       name: `${firstNameStudent[1].textContent} ${secondNameStudent[1].textContent}`,
//       age: ageStudent[1].textContent,
//       prof: profStudent[1].textContent,
//       lang: langAttrs[1],
//     },
//   ],
// };
// console.log("result", result);
