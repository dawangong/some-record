getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // ...
});


//上面的代码使用then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。