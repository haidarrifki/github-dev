import { Github } from "./github.js"
import { UI } from "./ui.js"

const searchUser = document.getElementById('search-user')
const searchBtn = document.querySelector('.search-btn')
const github = new Github()
const ui = new UI()


eventlisetner()
function eventlisetner(e) {
    searchBtn.addEventListener('click', getData);
}

searchUser.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        getData(event);
    }
})

function getData(e) {
    let username = searchUser.value.trim()

    if (username === "") {
        confirm("Please enter a valid username.")

    } else {
        github.getGithubData(username)
        .then(response => {
            if (response.user.message === "Not Found") {
                ui.showError('danger', 'User not found.')
            } else {
                ui.showUserInfo(response.user)
                ui.showRepoInfo(response.repo)
            }
        }).catch(error => {})
    }

    ui.clearInput()
    e.preventDefault()
}
