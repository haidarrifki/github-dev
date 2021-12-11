export class UI {
    constructor() {
        this.userProfile = document.getElementById('profile-card')
        this.searchUser = document.getElementById('search-user')
    }

    clearInput() {
        this.searchUser.value = ""
    }

    showUserInfo(user) {
        this.userProfile.innerHTML = `
        <div class="user-card">
        <div class="user-avatar">
        <img src="${user.avatar_url}"
          alt="User Photo">
      </div>
      <div class="user-detail">
        <div class="user-info">
          <h2 class="name">${user.name}</h2>
          <div class="user-joined-at">Joined ${user.created_at}</div>
          <a href="${user.html_url}" target="_blank" class="username">@${user.login}</a>
          <div class="bio">${user.bio}</div>
        </div>
        <div class="user-status">
          <div class="stat">
            <div class="title">Followers</div>
            <div class="value">${user.followers}</div>
          </div>
          <div class="stat">
            <div class="title">Following</div>
            <div class="value">${user.following}</div>
          </div>
          <div class="stat">
            <div class="title">Repositories</div>
            <div class="value">${user.public_repos}</div>
          </div>
        </div>
        <div class="user-contact">
          <div class="contact">
            <div class="icon">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span>${user.location}</span>
          </div>
          <div class="contact">
            <div class="icon">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                </path>
              </svg>
            </div>
            <span>${user.blog}</span>
          </div>
          <div class="contact">
            <div class="icon">
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path
                  d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                </svg>
            </div>
            <span>${user.twitter_username}</span>
          </div>
          <div class="contact">
            <div class="icon">
              <svg fill="currentColor" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"
                class="octicon octicon-organization">
                <path fill-rule="evenodd"
                  d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z">
                </path>
              </svg>
            </div>
            <span>${user.company}</span>
          </div>
        </div>
        <div id="user-repos"></div>
      </div>
      </div>
        `
    }

    showRepoInfo(repos) {
        const userRepos = document.getElementById('user-repos')

        repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 10)
            .forEach((repo) => {
                const reporepositori = document.createElement('a')
                reporepositori.href = repo.html_url
                reporepositori.className = 'repo'
                reporepositori.target = '_blank'
                reporepositori.textContent = repo.name

                userRepos.appendChild(reporepositori)
            })
    }

    showError(type, message) {
        const alert = document.createElement('div')

        alert.className = `alert alert-${type}`;
        alert.textContent = message;

        this.userProfile.appendChild(alert)

        setTimeout(() => {
            alert.remove()
        }, 3000)

    }

}
