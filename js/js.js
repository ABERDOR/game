//alert('123')

url = 'json/js.json';

fetch(url, {})
.then((response) => {
  //console.log(response);
  return response.json(); 
}).then((jsonData) => {
  show(jsonData['魔藝師']);
  //console.log(jsonData);
}).catch((err) => {
  console.log('錯誤:', err);
})
var add = '<button onclick=\"addf()\">';
var reduce = '<button onclick>=\"reducef()\"';
var allch = ['ch0','ch1','ch2','ch3'];
var a=0;
function addch(){
	var newch=document.getElementById('newch');
	fetch(url, {})
	.then((response) => {
	  //console.log(response);
	  return response.json(); 
	}).then((jsonData) => {
	  show(jsonData[newch.value]);
	  //console.log(jsonData);
	}).catch((err) => {
	  console.log('錯誤:', err);
	})
}
function addf(){
	
}
function reducef(){
	
}
function show(obj){
	if(a<4){
	var ch=document.getElementById(allch[a]);
	a+=1;
	ch.innerHTML+='<div>'+obj['職業']+'</div>';
	for (skSP in obj['skillSP']){
		//console.log(skSP);
		ch.innerHTML+='<div title=\"'+obj['skillSP'][skSP]+'\">'
			+skSP
			+"</div>";
	}
	for (va in obj['value']){
		//console.log(va);
		ch.innerHTML+='<div>'
			+va
			+'<a>'
			+obj['value'][va]
			+'</a>'
			+'</div>';
	}
	for (sk in obj['skill']){
		//console.log(sk);
		ch.innerHTML+='<div title=\"'+obj['skillEX'][sk]+'\">'
			+sk
			+'<a>'
			+obj['skill'][sk]
			+'</a>'
			+'</div>';
	}
		
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';	
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';	
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';
	//ch.innerHTML+='<div>'+obj['職業']+'</div>';
	}
}
