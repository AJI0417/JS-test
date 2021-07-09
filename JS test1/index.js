//解法一
 const classA = document.getElementsByClassName('A');
 const result = [];

Array.prototype.forEach.call(classA, (elA) => {
  Array.prototype.forEach.call(elA.children, (elB) => {
    result.push(elB.children[0].textContent, elB.children[1].textContent);
    })
})
        
console.log(result);

//解法二
const c1List = document.querySelectorAll('.A .B .c1');
const c2List = document.querySelectorAll('.A .B .c2');
const textList = [];

for (let i = 0; i < c1List.length; i++) {
  const c1 = c1List[i].textContent;
  const c2 = c2List[i].textContent;
  textList.push(c1, c2);
}

console.log(textList);

//宗鴻解法
document.querySelectorAll('.B').forEach(function (element) {
  element.querySelectorAll('.c1').forEach(function (elementB) {
      console.log(elementB.textContent)
  });
  element.querySelectorAll('.c2').forEach(function (elementB) {
      console.log(elementB.textContent)
  });
});