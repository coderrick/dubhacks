$(function() {
    console.log('Hello World');
	var myExampleClickHandler = function (element) { 
		console.log('Clicked element:', element);
		console.log('Clicked $element:', $(element));
		console.log('Clicked element src:', $(element).attr('src')); 
	}
	var myDomOutline = DomOutline({ onClick: myExampleClickHandler });
	// Start outline:
	myDomOutline.start();

	// Stop outline (also stopped on escape/backspace/delete keys):
	myDomOutline.stop();
});
