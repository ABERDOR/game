alert('123')
const request= new XMLHttpRequest();
request.open('GET','https://github.com/ABERDOR/game/blob/main/js/js.js',true);
request.responseType = 'json';
request.send();


request.onload = function() {
	var name=document.getelementById('name');
	name.innerHTML='123';
  var superHeroes = request.response;
  showname(superHeroes);
  showlevel(superHeroes);
}
function showname(name){
	var name=document.getelementById('name');
	name.innerHTML='123';

}
