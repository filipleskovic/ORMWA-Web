function setupPopup(buttonId, popupId) {
	document.getElementById(buttonId).onclick = function () {
		var popup = document.getElementById(popupId);
		popup.style.display = "block";
		setTimeout(function () {
			popup.style.display = "none";
		}, 3000);
	};
}

setupPopup("popupButton1", "popup1");
setupPopup("popupButton2", "popup2");
setupPopup("popupButton3", "popup3");
setupPopup("popupButton4", "popup4");
setupPopup("popupButton5", "popup5");
setupPopup("popupButton6", "popup6");