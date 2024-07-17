const msgStatus = document.querySelector(".msg-status");

if (document.location.search === "?mail_status=sent") {
	msgStatus.classList.add("msg-success");
	msgStatus.textContent = "Wiadomość wysłano!";

	setTimeout(() => {
		msgStatus.classList.remove("msg-success");
	}, 3000);
}

if (document.location.search === "?mail_status=error") {
	msgStatus.classList.add("msg-error");
	msgStatus.textContent = "Wystąpił błąd!";

	setTimeout(() => {
		msgStatus.classList.remove("msg-error");
	}, 3000);
}
