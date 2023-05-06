const nomeForm = document.querySelector("#name-form");
const divWelcome = document.querySelector("#welcome");
const logoutBtn = document.querySelector("#logout");

function checkUser() {
    const username = localStorage.getItem("name");

    if (username) {
        nomeForm.style.display = "none";
        divWelcome.style.display = "block";

        const userNameElement = document.querySelector("#username");

        userNameElement.textContent = username;
    } else {
        nomeForm.style.display = "block";
        divWelcome.style.display = "none";
    }
}

nomeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#input_name");
    localStorage.setItem("name", nameInput.value);

    nameInput.value = "";

    checkUser();
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem("name");
    
    checkUser();
});

// Application start
checkUser();