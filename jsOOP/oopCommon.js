/*
һ����̳���һ����
o:����
p:����
*/
function extend(o,p){
for(var prop in p){
o[prop] = p[prop];
}
}


function classOf(o){
return Object.prototype.toString.call(o).slice(8,-1);
}