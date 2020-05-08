const listRepos = async (user) => {
  const repos = await fetch(
    `https://api.github.com/users/${user}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  const markup = repos
    .map((repo) => {
      return `
        <li>
          <a href="${repo.html_url}" >${repo.name}</a>
          ⭐️${repo.stargazers_count}
        </li>
      `;
    })
    .join("");

  const content = document.getElementById("content");

  console.log(content);

  content.innerHTML = `<ul>${markup}</ul>`;
};

listRepos("scottliv");
