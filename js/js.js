//alert('123')
const request= new XMLHttpRequest();
request.open('GET','json/js.json',true);
request.responseType = 'json';
request.send();


request.onload = function() {
  var res = request.response;
  var obj = JSON.parse(res);
  showname(obj);
  //showlevel(superHeroes);
}
function showname(obj){
	var name=document.getElementById('name');
	var name1=document.getElementById('name1');
	name.innerHTML='123';
	name1.innerHTML=obj.san;
}
