// 题目
function a(){
  console.log(2);
  return new Promise(function (resolve, reject) {
    console.log(3); //立即执行
    resolve();
  }).then(function () { // 放到微任务
    console.log(4);
  });
}
setTimeout(function () {
  console.log(1);
}, 0);
a().then(function () { // 只有then的内容会放到微任务中
  console.log(5);
});
console.log(6);


//答案：326451

//解题过程：
// 主渲染进程: 2,3,6
// 消息队列
// 1.微队列:4,5
// 2.事件队列:
// 3.倒计时队列：1