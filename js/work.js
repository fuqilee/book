// 在 Web Worker 中接收主线程发送的消息
self.onmessage = function(event) {
  let data = event.data;
  console.log(data);
  // 执行耗时的任务
 // const result = performHeavyTask(data);

  // 将结果发送回主线程
  self.postMessage({a:1,b:2});
};
