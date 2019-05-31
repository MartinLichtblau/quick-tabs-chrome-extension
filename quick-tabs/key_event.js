window.addEventListener("focus", function(event) 
{ 
	document.addEventListener('keydown', keyDown, false); //add the keyboard handler
	document.addEventListener('keypress', keyPress, false); //add the keyboard handler
	document.addEventListener('keyup', keyUp, false); //add the keyboard handler
	chrome.extension.sendRequest({control: "addEventListener"});
}, false);

window.addEventListener("blur", function(event) 
{ 
	document.removeEventListener('keydown', keyDown); //add the keyboard handler
	document.removeEventListener('keypress', keyPress); //add the keyboard handler
	document.removeEventListener('keyup', keyUp); //add the keyboard handler
	chrome.extension.sendRequest({control: "removeEventListener"});
}, false);

trigger_key = 71; // g key
function keyDown(e){
	if (e.key == 'Control'){ // if e.shiftKey is not provided then script will run at all instances of typing "G"
		chrome.extension.sendRequest({control: "down"}); //build newurl as per viewtext URL generated earlier.
	}
}

function keyPress(e){
	if (e.key == 'Control'){ // if e.shiftKey is not provided then script will run at all instances of typing "G"
		chrome.extension.sendRequest({control: "press"}); //build newurl as per viewtext URL generated earlier.
	}
}

function keyUp(e){
	if (e.key == 'Control'){ // if e.shiftKey is not provided then script will run at all instances of typing "G"
		chrome.extension.sendRequest({control: "up"}); //build newurl as per viewtext URL generated earlier.
	}
}
	// goes into manifest
	 // "content_scripts": [
   // {
     // "matches": ["http://*/*", "https://*/*"], // run for http & https pages
     // "js": ["key_event.js"],  // key_event.js is injected to the page, this handles key press
     // "run_at": "document_start" // run before everything else, else there will be conflicts at pages which accept keyboard inputs ( eg:google search)
   // }
   // ],
