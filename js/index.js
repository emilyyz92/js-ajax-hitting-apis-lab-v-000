// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  let user = document.getElementById("username").value
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${user}/repos`)
  req.send()
}

function displayRepositories() {
  var repos = JSON.parse(this.responseText)
  let repoList = '<ul></ul>'
  repoList += repos.map(repo =>
    `<li> <a href="${repo.html_url}">${repo.name}</a></li>`
  ).join()
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits() {

}
