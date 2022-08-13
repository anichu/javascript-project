const followersContainer = document.querySelector(".followers-container");

const displayFollowers = (data) => {
	let html = "";
	console.log(data);
	data.forEach((d) => {
		html += `
    <article class='follower'>
      <div class='profile-image'>
        <img src=${d.avatar_url} />
      </div>
      <div class='profile-info'>
        <h1>${d.login}</h1>
        <a href=${d.html_url}>view profile</a>
      </div>
    </article>
    `;
	});

	followersContainer.innerHTML = html;
};

export default displayFollowers;
