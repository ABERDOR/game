//alert('123')
//confirm('你的電腦有100個病毒,請前往 http://google.com 去除病毒。')

url = 'json/js.json';
/*
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
*/
var add = '<button onclick=\"addf(this)\">+</button>';
var reduce = '<button onclick=\"reducef(this)\">-</button>';
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
function addf(self){
	var num = self.previousSibling;
	num.innerHTML++;
}
function reducef(self){
	var num = self.nextSibling;
	num.innerHTML--;
}
function change(self){
	self.classList.toggle('get');
	self.classList.toggle('unget');
}
function show(obj){
	if(a<4 && obj!=null){
	var ch=document.getElementById(allch[a]);
	a+=1;
	ch.innerHTML ='';
	ch.innerHTML+='<div>'+obj['職業']+'</div>';
	for (skSP in obj['skillSP']){
		//console.log(skSP);
		ch.innerHTML+='<span title=\"'+obj['skillSP'][skSP]+'\">'
			+skSP
			+"</span>";
	}
	for (va in obj['value']){
		//console.log(va);
		ch.innerHTML+='<div>'
			+va
			+reduce
			+'<a>'
			+obj['value'][va]
			+'</a>'
			+add
			+'</div>';
	}
	for (sk in obj['skill']){
		//console.log(sk);
		ch.innerHTML+='<div title=\"'+obj['skillEX'][sk]+'\">'
			+sk
			+reduce
			+'<a>'
			+obj['skill'][sk]
			+'</a>'
			+add
			+'</div>';
	}
		
	for (st in obj['statusEX']){
		ch.innerHTML+='<button class=\"unget\" onclick=\"change(this)\" title=\"'+obj['statusEX'][st]+'\">'
			+st
			+'</button>';
	}
	}
}

function addth(){
	var newth=document.getElementById('newth');
	var allbag=document.getElementById('allthing');
	allbag.innerHTML+='<span class=\"thing\">'+newth.value+'</span>'
	var things=document.body.getElementsByClassName("thing");
	for(var i=0;i<things.length;i++)
	{
		things[i].addEventListener("mousedown",drag);
	}
}
function drag(e)
{

	var it=this;
	it.style.position="absolute";
	
	var move =function(e)
	{ 
		if (e.clientY-5<=20){
		it.remove();
		}
		it.style.top=e.clientY-5+"px"
		it.style.left=e.clientX-5+"px"
	}
	var end = function(e)
	{		
		document.removeEventListener("mousemove",move);
		document.removeEventListener("mouseend",end)	
	}
	document.addEventListener("mousemove",move);
	document.addEventListener("mouseup",end)
}

