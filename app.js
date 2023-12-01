function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`);
}

function showAvatar(githubUser) {
  return new Promise(function (resolve, reject) {
    let container = document.createElement("div");
    container.className = "avatar-container";
    let img = document.createElement("img");
    img.src = "https://avatars.githubusercontent.com/u/125929236?v=4";
    img.className = "avatar";
    let title = document.createElement("h1");
    title.innerHTML = "Elnura Apyzova";
    let title2 = document.createElement("h2");
    title2.innerHTML = "Frontend Developer";
    let text = document.createElement("p");
    text.innerHTML =
      "As a dedicated Frontend Developer, I possess a strong skill set in HTML, CSS, JavaScript, SASS, Git, Bootstrap, Redux, and React. Currently, I am expanding my expertise in TypeScript and Node.js. With experience in website creation and ongoing work on a medical website, I am a detail-oriented team player who consistently strives for excellence in my work.";
    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(title2);
    container.appendChild(text);
    document.body.appendChild(container);
    setTimeout(() => {
      container.remove();
      resolve(githubUser);
    }, 10000);
  });
}
loadGithubUser("ElyaApyzova").then(showAvatar);
