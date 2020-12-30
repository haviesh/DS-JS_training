class Node 
{ 
  constructor(value) 
    { 
        this.value = this.value; 
        this.left = null; 
        this.right = null; 
    } 
   
}

function CloserVal(tree,target){
return closetValHelper(tree,target,closest = Infinity); 
}
function closetValHelper(tree,target,closest){
currentNode = tree;
while(currentNode){
   if (Math.abs(target-closest) > Math.abs(target-currentNode.value)){
       closest = currentNode.value;
   }
   if (target> currentNode.value){
       currentNode =currentNode.right;
   }
   else if(target < currentNode.value){
       currentNode = currentNode.left;
   }
   else{
       break;
   }
   console.log(closest);
   return closest;
}
}
exports.CloserVal=CloserVal;
exports.closetValHelper=closetValHelper;

mynode = new Node('{ "tree": { "nodes": [ {"id": "10", "left": "5", "right": "15", "value": 10}, {"id": "15", "left": "13", "right": "22", "value": 15}, {"id": "22", "left": null, "right": null, "value": 22}, {"id": "13", "left": null, "right": "14", "value": 13}, {"id": "14", "left": null, "right": null, "value": 14}, {"id": "5", "left": "2", "right": "5-2", "value": 5}, {"id": "5-2", "left": null, "right": null, "value": 5}, {"id": "2", "left": "1", "right": null, "value": 2}, {"id": "1", "left": null, "right": null, "value": 1} ], "root": "10" }, "target": 12 }');
console.log(mynode);