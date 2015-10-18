$(function() {
    console.log('Hello World');
	var myExampleClickHandler = function (element) { console.log('Clicked element:', element); }
	var myDomOutline = DomOutline({ onClick: myExampleClickHandler });
	var srcval = element.attr('src');
	console.log("Video link: " + srcval);
	// Start outline:
	myDomOutline.start();

	// Stop outline (also stopped on escape/backspace/delete keys):
	myDomOutline.stop();
});
