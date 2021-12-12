export class UI {
  constructor() {
    this.userProfile = document.getElementById('profile-card')
    this.searchUser = document.getElementById('search-user')
  }

  clearInput() {
    this.searchUser.value = ""
  }

  showUserInfo(user) {
    let twitter = (user.twitter_username == null) ? "None" : user.twitter_username;
    let d = new Date(user.created_at);
    let datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
      d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);

    let userName = (user.name == null) ? user.login : user.name;
    let bio = (user.bio == null) ? "Don't have bio" : user.bio;
    let userLocation = (user.location == null) ? "None" : user.location;
    let blog = (user.blog == "") ? "None" : user.blog;
    let company = (user.company == null) ? "None" : user.company;
    this.userProfile.innerHTML = `
        <div class="user-card">
        <div class="user-avatar">
        <img src="${user.avatar_url}"
          alt="User Photo">
      </div>
      <div class="user-detail">
        <div class="user-info">
          <h2 class="name">${userName}</h2>
          <div class="user-joined-at">Joined at ${datestring}</div>
          <a href="${user.html_url}" target="_blank" class="username">@${user.login}</a>
          <div class="bio">${bio}</div>
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
                            <svg fill="none" stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </div>
                        <span>${userLocation}</span>
                    </div>
                    <div class="contact">
                        <div class="icon">
                            <svg fill="none" stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                                </path>
                            </svg>
                        </div>
                        <span>${blog}</span>
                    </div>
                    <div class="contact">
                        <div class="icon">
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"/></svg>
                        </div>
                        <span>${twitter}</span>
                    </div>
                    <div class="contact">
                        <div class="icon">
                            <svg fill="currentColor" aria-hidden="true" viewBox="0 0 16 16" version="1.1"
                                data-view-component="true" class="octicon octicon-organization">
                                <path fill-rule="evenodd"
                                    d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z">
                                </path>
                            </svg>
                        </div>
                        <span>${company}</span>
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