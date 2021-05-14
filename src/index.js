import "./styles.css";

var obj = [
  {
    id: 4,
    name: "abc"
  },
  {
    id: 10,
    name: "ab2"
  },
  {
    id: 5,
    name: "abc3"
  },
  {
    id: 6,
    name: "abc5"
  }
];
obj
  .sort(function (a, b) {
    return a.id - b.id;
  })
  .sort(function (a, b) {
    return a.name - b.name;
  });

console.log(obj);
document.getElementById("app").innerHTML = `
<h1>Question 5</h1>
<div>

Assume there is a object of this format 
var obj = {
 “id” : 4, “name” : “abc”,
 “id” : 10, “name” : “ab2”,
 “id” : 5, “name” : “abc3”,
 “id” : 6, “name” : “abc5”
}
It can be a dictionary or java object, as per your language of choice. But its key/value pair dictionary simply.

Write a code to sort the object by id 
I.e final output should have objected sort by id’s
<br>
<b>
PS: We cannot have repeted multiple key in single object so I just
took it as array of object.
</b>
</div>
`;
