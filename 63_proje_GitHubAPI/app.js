// ELementleri Seçme
const githubForm = document.getElementById('github-form');
const githubName = document.getElementById('githubname');
const clearLastUsers = document.getElementById('clear-last-users');
const lastUsers = document.getElementById('last-users');

const github = new GitHub();
const ui = new UI();

eventListener();

function eventListener() {
    githubForm.addEventListener('submit', getData);
    clearLastUsers.addEventListener('click', clearAllSearched);
    document.addEventListener('DOMContentLoaded', getAllSearched);
}


function getData(e) {
    let username = githubName.value.trim();

    if (username === "") {
        ui.showError('Lütfen geçerli bir kullanıcı adı giriniz.');
    } else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") {
                    // HATA
                    ui.showError('Kullanıcı Bulunamadı');
                    // console.log('hata');
                } else {
                    ui.addSearchedUserToUI(username);
                    Storage.addSearchUserToStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                    // console.log(response);
                }
            })
            .catch(err => ui.showError(err));
    }

    ui.clearInput(); // Input clear
    e.preventDefault();
}

function clearAllSearched() {
    // Aramaları temizle
    if (confirm('Emin misiniz?')) {
        // Silme
        Storage.clearAllSearchedUsersFromStorage(); // Storageden temizleyecek
        ui.clearAllSearchedFromUI();
    }
}

function getAllSearched() {
    // Arananları storageden alma
    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(username => {
        result += `<li class="list-group-item">${username}</li>`;
    });

    lastUsers.innerHTML = result;
}