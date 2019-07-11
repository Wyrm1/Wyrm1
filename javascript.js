/****************************************
Helpful functions
****************************************/
function id(thing) {return document.getElementById(thing);}
function cl(thing) {return document.getElementsByClassName(thing);}

/****************************************
All
****************************************/



/****************************************
Navigation
****************************************/

function navPage(evt, page) {	//Allows nav buttons to navigate to the correct page
	var i, navpage, navbutton;
	navpage = document.getElementsByClassName("navpage");
	for (i=0;i<navpage.length;i++) {
		navpage[i].style.display = "none";
	}
	document.getElementById(page).style.display = "block";
	navbutton = document.getElementsByClassName("navButton");
	for (i = 0; i < navbutton.length; i++) {
		navbutton[i].className = navbutton[i].className.replace(" active", "");
	}
	evt.currentTarget.className += " active"
}

function upgradeNav(evt, tab) {	//3 buttons that add to the nav
	document.getElementById(tab).style.display="block";
	evt.currentTarget.style.display="none";
}

/****************************************
Home
****************************************/



function toggleTextOptions() {	//Opens text selection window
	doc = document.getElementById('textOptions');
	if (doc.style.display == 'block') {doc.style.display = 'none';}
	else {doc.style.display = 'block';}
	
	/*
	document.getElementById('textOptions').style.display='block';*/
}

window.onclick = function(event) {	//Closes text selection window
	if (!event.target.matches('#textSelectButton')) {
		var dropdown = document.getElementsByClassName("textOptions");
		var i;
		for (i = 0; i < dropdown.length; i++) {
			//var openDropdown = dropdown
			dropdown[i].style.display="none";
		}
	}
}

function sendText(sent_by, message) {	//sends latest text to the box
	var tex = document.createElement("p");
	tex.className=sent_by;
	tex.innerHTML=message;
	box = document.getElementById('text-box');
	box.appendChild(tex);
	box.scrollTop = box.scrollHeight - box.clientHeight;	//scrolls to end of box
}


/****************************************
Research
****************************************/

/****************************************
Engineering
****************************************/

/****************************************
Dispatch
****************************************/

/****************************************
Increment
****************************************/

function construct_resource(name) {
	this.name = name;
	this.amount = 0;
	this.income = 0;
	this.active = 0;
	this.activate = function() {this.active=1; this.income = 1;};
	this.increment = function() {if (this.active) {this.amount = this.amount + this.income; var update = cl(this.name); for(var i=0; i<update.length; i++) {update[i].innerHTML = Number(this.amount).toLocaleString();}}};
}

var research = new construct_resource("stat-research");
var asset = new construct_resource("stat-assets");
var hero = new construct_resource("stat-hero");
	
var resource = [research, asset, hero];


var increment = setInterval(function() {
	for(i=0; i<resource.length; i++) {resource[i].increment();}
}, 1000);

/****************************************
End
****************************************/