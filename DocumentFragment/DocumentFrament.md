# 文档片段 DocumentFragment

了解 <b>文档片段 DocumentFragment</b> 前，我们先知道 什么是 <b>文档对象 document object</b>

### 什么是 文档对象

文档对象：也就是 document 对象，它是 DOM 树的结构化后的体现，与 DOM 树有着密不可分的关系,

那跟 DOM 树有关的话我们就可以第一时间想到这玩意会涉及到<a href='../2.浏览器渲染机制/浏览器渲染.md'>浏览器的渲染</a>逻辑, 也就是会涉及到浏览器的重绘或者重排

回想一下，我们如果需要更改一个页面中的元素，我们是不是需要用到 <b>document object</b>来获取页面中的元素的文档对象，然后操作这个对象的属性，最后同步到 DOM 树上来触发浏览器的渲染。

那我们如果有一个循环，在这个

### 什么是 文档片段

通俗的讲：他是一个轻量的 Document 对象，
我们在浏览器的控制台中输出 document 浏览器会返回一个完整的文档对象，也就是 document 对象，而文档片段 DocumentFragment 呢，跟 document 对象 是一样的，只是他没有 document 对象那么多的内容，DocumentFragment 是最小化的文档对象
