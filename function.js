let collapse1 = document.getElementById("button1");
let collapse2 = document.getElementById("button2");
let collapse3 = document.getElementById("button3");
let collapse4 = document.getElementById("button4");
let collapse5 = document.getElementById("button5");
let collapse6 = document.getElementById("button6");

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");
let content4 = document.getElementById("content4");
let content5 = document.getElementById("content5");
let content6 = document.getElementById("content6");

collapse1.onclick = function(){
	this.classList.toggle('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content1.style.maxHeight) {
		content1.style.maxHeight = null;
	} else {
		content1.style.maxHeight = content1.scrollHeight + "px";
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse2.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content2.style.maxHeight) {
		content2.style.maxHeight = null;
	} else {
		content2.style.maxHeight = content2.scrollHeight + "px";
		content1.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse3.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content3.style.maxHeight) {
		content3.style.maxHeight = null;
	} else {
		content3.style.maxHeight = content3.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse4.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse5.classList.remove('active');
	collapse6.classList.remove('active');

	if (content4.style.maxHeight) {
		content4.style.maxHeight = null;
	} else {
		content4.style.maxHeight = content4.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content5.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse5.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse6.classList.remove('active');

	if (content5.style.maxHeight) {
		content5.style.maxHeight = null;
	} else {
		content5.style.maxHeight = content5.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content6.style.maxHeight = null;
	}
}

collapse6.onclick = function(){
	this.classList.toggle('active');
	collapse1.classList.remove('active');
	collapse2.classList.remove('active');
	collapse3.classList.remove('active');
	collapse4.classList.remove('active');
	collapse5.classList.remove('active');

	if (content6.style.maxHeight) {
		content6.style.maxHeight = null;
	} else {
		content6.style.maxHeight = content6.scrollHeight + "px";
		content1.style.maxHeight = null;
		content2.style.maxHeight = null;
		content3.style.maxHeight = null;
		content4.style.maxHeight = null;
		content5.style.maxHeight = null;
	}
}