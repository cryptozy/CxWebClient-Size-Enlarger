var elemId = "ctl00_cpmain_ProjectStateGrid_GridData";

function getElementId() {
	// returns the element ID working on
	return elemId;
}

function changeHeight(newHeight) {
	var elem = document.getElementById(getElementId());
	// changes the height of the element
	elem.style.height = newHeight;
}

function getCodedHeight() {
	// get the actual Height result from page's running code
	var heightValue = document.getElementById(getElementId()).style.height;
	var numb = heightValue.match(/\d/g);
	// and parse the px out of it (only returns int)
	numb = numb.join("");
	return numb;
}

function calcNewHeight() {
	// calcuate the new Height, built as a function so that it'll refresh
	return this.innerHeight - 250;
}

// the actual client side running code
window.setInterval(function(){
  // see if the Height in running page code is like we want it to be
  if (getCodedHeight() != calcNewHeight()) {
	changeHeight(calcNewHeight()+"px");
  }
// refresh every second, so that whenever we change the ascending, descending criteria, it takes effect
}, 1000);