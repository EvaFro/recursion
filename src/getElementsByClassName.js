// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,node
) {
  var results = [];
  node = node || document.body;

  if(node.className.split(' ').indexOf(className) != -1){
    results.push(node);
  }

  if(node.children){
    for(var i = 0, count = node.children.length; i < count; i++){
      results = results.concat( getElementsByClassName(className, node.children[i]));
    }
  }
  return results;

};
