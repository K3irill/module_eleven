"use sttrict";

const jsonStr = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

const jsonData = JSON.parse(jsonStr);
const student = jsonData.list;

const result2 = {
    list: Array.from(student)
}
result2.list[0].name = 'Tom'
console.log(result2);
//есть смысл что-нибдуь дальше делать?>)

