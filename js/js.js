//alert('123')
const request= new XMLHttpRequest();
request.open('GET','json/js.json',true);
request.responseType = 'json';
request.send();


request.onload = function() {
  var res = request.response;
  console.log(request);
  console.log(res);
  var obj = JSON.parse(res);
  showname(obj);
  //showlevel(superHeroes);
}
function showname(obj){
	//console.log(obj);
	var name=document.getElementById('name');
	var name1=document.getElementById('name1');
	var name2=document.getElementById('name2');
	name.innerHTML='123';
	name1.innerHTML=obj.san;
	name2.innerHTML=obj['數值']['san'];
	
}
