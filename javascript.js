/****************************************
Helpful functions
****************************************/

/****************************************
All
****************************************/



/****************************************
Navigation
****************************************/

function navPage(evt, page) {	//code for nav buttons
	//var i, navpage, navbutton;
	$('.navpage').hide();
	$('#' + page).show();
	$('.navButton').removeClass('active');
	$(evt.target).addClass('active');
}

$('body').click(function (event) {
   if($(event.target).closest('#optionsMenu').length && $(event.target).is('#optionsMenu')) {
     $("#optionsMenu").hide();		//close options menu if you click outside of it
   }     
});

/****************************************
Home
****************************************/

function reply(sent_by, message) {
	var txt = "<div class='" + sent_by + "'><p>" + message + "</p></div>";
	$('#text-box').append(txt);
	$("#text-box").scrollTop($(document).height());
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
	this.activate = function() {this.active=1;};
	this.increment = function() {if (this.active) {this.amount = this.amount + this.income; $('.' + this.name).html(Number(this.amount).toLocaleString())}};
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