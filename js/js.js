//alert('123')
const request= new XMLHttpRequest();
request.open('GET','json/js.json',true);
request.responseType = 'json';
request.send();


request.onload = function() {
  var superHeroes = request.response;
  showname(superHeroes);
  //showlevel(superHeroes);
}
function showname(res){
	var name=document.getElementById('name');
	var name1=document.getElementById('name1');
	name.innerHTML='123';
	name1.innerHTML=res['san'];
}
