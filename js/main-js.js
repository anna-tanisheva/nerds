var button = document.querySelector(".write-us");
var popup = document.querySelector(".modal-window");

var close = popup.querySelector(".close");

var form = popup.querySelector("form");
var fullname = popup.querySelector("[id=name-id]");
var email = popup.querySelector("[id=email-id]");
var text = popup.querySelector("[id=message-id]");


var storage_fullname = localStorage.getItem("fullname");
var storage_email = localStorage.getItem("email");


button.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-window-show");
	if (storage_fullname) {
		fullname.value = storage_fullname;
		email.focus();
	} if (storage_email) {
		email.value = storage_email;
		text.focus();
	} else {
		fullname.focus();
	}
});


close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-window-show");
});

form.addEventListener("submit", function(event) {
	if (!fullname.value || !email.value || !text.value) {
		event.preventDefault();
		if (!fullname.value) {
			event.preventDefault();
			fullname.classList.add("input-error");
			if (fullname.addEventListener("focus", function(event) {
				event.preventDefault();
				fullname.classList.remove("input-error");
			})) {
			}
		} if (!email.value) {
			event.preventDefault();
			email.classList.add("input-error");
			if (email.addEventListener("focus", function(event) {
				event.preventDefault();
				email.classList.remove("input-error");
			})) {
			}
		} if (!text.value) {
			event.preventDefault();
			text.classList.add("input-error");
			if (text.addEventListener("focus", function(event) {
				event.preventDefault();
				text.classList.remove("input-error");
			})) {
			}
		}	
	} else {
		localStorage.setItem("fullname", fullname.value);
		localStorage.setItem("email", email.value);
	}
})


window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-window-show")) {
			popup.classList.remove("modal-window-show");
		}
	}
});
