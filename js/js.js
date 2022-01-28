//alert('123')

url = 'json/js.json';

fetch(url, {})
.then((response) => {
  //console.log(response);
  return response.json(); 
}).then((jsonData) => {
  showname(jsonData['魔藝師']);
  //console.log(jsonData);
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
var allch = ['ch0','ch1','ch2','ch3'];
var a=0;
function showname(obj){
	if(a<4){
	var ch=document.getElementById(allch[a]);
	a+1;
	ch.innerHTML+='<div>'+obj['職業']+'</div>';
	for (skSP in obj['allskSP']){
		console.log(skSP);
		ch.innerHTML+='<div>'+skSP+'</div>';
	}
	for (va in obj['value']){
		console.log(va);
		ch.innerHTML+='<div>'+va+'</div>';
	}
	for (sk in obj['allsk']){
		console.log(sk);
		ch.innerHTML+='<div>'+sk+'</div>';
	}
		
	ch.innerHTML+='<div>'+obj['職業']+'</div>';	
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';	
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';
	}
}
