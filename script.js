document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
    const emailInput = document.querySelector("#email");

    form.addEventListener("submit", handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (isEmailValid(emailInput.value)) {
            clearForm();
        } else {
            showError();
        }
    }

    function isEmailValid(email) {
        const emailPattern = /^[^@]+@[^@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function showError() {
        form.classList.add("error");
    }

    function clearForm() {
        form.classList.remove("error");
        emailInput.value = "";
    }
});

