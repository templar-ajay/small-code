/*
Please write a javascript function that takes an object as an argument
and returns an updated object with all of the values that are integers incremented by 1.
Do not mutate the original object.

Now modify the above function to also work for objects that may have other
 objects as values, potentially several layers deep like a tree.
  This new function should update all of the leaves of the object tree.
*/

const samObject = {
  naem: "Sam",
  salary: 3,
  age: 5,
  bf: 0,
  crush: {
    school: 5,
    college: 3,
    office: {
      crush_name: "jay",
      crush_height: 168,
      crush_salary: 3,
    },
  },
};
const newObj = f(samObject);
console.log(`the newObj`, newObj);

function f(x) {
  const o = {};
  i(x);
  function i(x) {
    for (let [k, v] of Object.entries(x)) {
      Number(v) === v ? (o[k] = v + 1) : Object(v) === v ? i(v) : null;
    }
  }
  return o;
}
