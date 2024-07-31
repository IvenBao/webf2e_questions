# 文档片段 DocumentFragment

文档片段是轻量级的 document 对象，主要是用来存储临时的节点信息，然后再一次性把文档片段中的内容渲染到 DOM 树上

了解 <b>文档片段 DocumentFragment</b> 前，我们先知道 什么是 <b>文档对象 document object</b>

## 什么是 文档对象

文档对象：也就是 document 对象，它是 DOM 树的结构化后的体现，与 DOM 树有着密不可分的关系

```js
console.log(document); // document 就是文档对象
```

那跟 DOM 树有关的话我们就可以第一时间想到这玩意会涉及到<a href='../2.浏览器渲染机制/浏览器渲染.md'>浏览器的渲染</a>逻辑, 也就是会涉及到浏览器的重绘或者重排

## 什么是 文档片段

通俗的讲：他是一个轻量的 Document 对象，

文档片段 DocumentFragment 呢，跟 document 对象 是一样的，只是他没有 document 对象那么多的内容，DocumentFragment 是最小化的文档对象

```js
const documentfragment = new DocumentFragment();
console.dir(documentfragment); // 输出的内容就是文档片段对象中的内容
```

对于直接操作的 document 对象来更改 DOM 树来说，

使用文档片段对象先将所有需要 DOM 变化的内容全都先存档到文档片段对象上，等到 js 程序运行到最后的时候，再将 DocumentFragment 文档片段对象中存储的内容，一次性同步到 document 对象上，使 DOM 树只重排一次，

这样做的效率更高，可以看下面的实际应用来体会一下

## 实际应用

回想一下，我们如果需要更改一个页面中的元素，我们是不是需要用到 <b>document object</b>来获取页面中的元素的文档对象，然后操作这个对象的属性，最后同步到 DOM 树上来触发浏览器的渲染。

那我们如果有一个循环，在这个循环中我们会频繁地去通过 document object 来改变 dom 树

```js
// 直接使用 document 对象来操作dom树
for (let i = 0; i <= 100; i++) {
  let div = document.createElement("div");
  div.innerHTML = i;
  document.body.appendChild(div); //每执行一次该代码，页面中就会插入一段div，渲染线程就会重新走一遍，一共走了100遍
}
```

我们直接如上这么写，在实际情况中<a href='../2.浏览器渲染机制/浏览器渲染.md'>浏览器的主渲染进程</a>中的渲染线程会操作 DOM 重排 100 次，极大的影响浏览器的 cpu 利用率

```js
// 使用DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i <= 100; i++) {
  const div = document.createElement("div");
  div.innerHTML = i;
  fragment.appendChild(div); // 这里不会使DOM树重排，只会把这些内容记录在文档片段对象中，最多就只是占用一点内存，不会造成浏览器渲染线程的阻塞
}
document.body.appendChild(fragment); // 操作一遍DOM树
```
