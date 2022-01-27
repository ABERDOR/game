//alert('123')

url = 'json/js.json';

fetch(url, {})
.then((response) => {
  return response.json(); 
}).then((jsonData) => {
  console.log(jsonData);
}).catch((err) => {
  console.log('錯誤:', err);
})
/*
const request= new XMLHttpRequest();
request.open('GET','json/js.json',true);
request.responseType = 'json';
request.send();
request.onload = function() {
	var res = request.response;
	//var text = this.responseText;
	console.log(this);
	console.log(request);
	console.log(res);
	var obj = JSON.parse(res);
	showname(obj);
	//showlevel(superHeroes);
}
*/
function showname(obj){
	//console.log(obj);
	var name=document.getElementById('name');
	var name1=document.getElementById('name1');
	var name2=document.getElementById('name2');
	name.innerHTML='13';
	name1.innerHTML=obj.san;
	name2.innerHTML=obj['數值']['san'];
	
}
