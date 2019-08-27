// Fonctionnalité 1 :
let footer = document.getElementsByTagName('footer')[0];
console.log(footer);
let count = 0 ;
footer.addEventListener("click",function(){
	count++;
	console.log(`click ${count}`);
});
// Fonctionnalité 2 :
let navbarHeader = document.getElementById('navbarHeader');
let navbar = document.getElementsByClassName('navbar-toggler')[0];
let menustatus = false ;
navbar.addEventListener('click',function(){
	if (menustatus == false){
		navbarHeader.classList.remove("collapse");
		menustatus = true;
	}else {
		navbarHeader.classList.add("collapse");
		menustatus = false;
	}
});
// Fonctionnalité 3 :
let changecolor = document.getElementsByClassName('btn-sm')[1];
let changecolor1 = document.getElementsByClassName('card-text')[0];
changecolor.addEventListener('click',function(){
	changecolor1.style.color = 'red';
});
// Fonctionnalité 4 :
let changecolor2 = document.getElementsByClassName('btn-sm')[3];
let changecoloration2 = document.getElementsByClassName('card-text')[1];
let colorstatus = true;
changecolor2.addEventListener('click',function(){
	if (colorstatus == true ) { 
		changecoloration2.style.color = 'green';
		colorstatus = false;
	}else{
		changecoloration2.style.color = '';
		colorstatus = true;
	}
});
// Fonctionnalité 5 :
let link = document.getElementsByTagName('link')[0];
let navbarstatus = true;
let header = document.getElementsByTagName('header')[0];
header.addEventListener('dblclick',function(){
	if (navbarstatus == true){
		link.disabled = true;
		navbarstatus = false;
	}
	else{
		link.disabled = false;
		navbarstatus = true;
	}
});
// Fonctionnalité 6 :

let view = document.getElementsByClassName('btn btn-sm btn-success');
for (let i = 0; i <= view.length-1; i++) {
view[i].addEventListener('mouseover', myfunction);
	let cardtext = view[i].parentNode.parentNode.previousElementSibling;
	let cardimgtop = view[i].parentNode.parentNode.parentNode.previousElementSibling;
	mousestatus = true;
	function myfunction(){
		if (mousestatus == true){
			console.log(cardtext);
			cardtext.style.display = "none";
			cardimgtop.style.width = '20%';
			mousestatus = false;
		}else{
			cardimgtop.style.width = '100%';
			cardtext.style.display = "block";
			mousestatus = true;
		}	
	}
}
// Fonctionnalité 7 :
let find = document.getElementsByClassName('btn btn-secondary my-2')[0];
let bigcard = document.getElementsByClassName('col-md-4');
let parents = bigcard[0].parentNode;
find.addEventListener('click',function(){
last = bigcard[bigcard.length-1];
first = bigcard[0]
	parents.insertBefore(last,first);
});
// Fonctionnalité 8 

let find2 = document.getElementsByClassName('btn btn-primary my-2')[0];

find2.setAttribute("href","#");
let bigcard2 = document.getElementsByClassName('col-md-4');
let parents2 = bigcard2[0].parentNode;
find2.addEventListener('click',function(){
let filsss = document.getElementsByClassName('col-md-4')[0];
let find1 = document.getElementsByClassName('card mb-4 box-shadow')[0];
	let create = document.createElement('div');
	create.setAttribute("class","col-md-4");
	create.appendChild(find1);
	let parrent = filsss.parentNode;
	parrent.appendChild(create);
	filsss.remove();
});
// Fonctionnalité 9
let jsevent = document.getElementsByTagName('strong')[0];
console.log(jsevent);
let getbody = document.getElementsByTagName('body');
console.log(getbody);
jsevent.addEventListener('click',function(){
	document.addEventListener('keydown',function(event){
		key = event.keyCode;
		console.log(key);
		if (key == 65){
			getbody[0].removeAttribute('class');
			getbody[0].setAttribute("class", "col-4");
		}
		if (key == 89){
			getbody[0].removeAttribute('class');
			getbody[0].setAttribute("class", "offset-md-4");
		}
		if (key == 80){
			getbody[0].removeAttribute('class');
			getbody[0].setAttribute("class", "offset-md-8");
		}
		if (key == 66){
			getbody[0].removeAttribute('class');
		}

	});	
});