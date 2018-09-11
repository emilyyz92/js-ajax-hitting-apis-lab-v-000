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
    `<li>
      <a href="${repo.html_url}">${repo.name}</a> - 
      <a href="#" onclick="getCommits(${repo.owner.login}, ${repo.name})">
      Get Commits</a>
      <a href="##" onclick="getBranches(${repo.owner.login}, ${repo.name})">
      Get Branches</a>
    </li>`
  ).join()
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(owner, repoName) {
  var commitReq = new XMLHttpRequest()
  commitReq.addEventListener('load', displayCommits)
  commitReq.open('GET', `https://api.github.com/${owner}/${repoName}/commits`)
  commitReq.send()
}

function getBranches(owner, repo) {
  var req = new XMLHttpRequest()
  req.addEventListener('load', displayBranches)
  req.open('GET')
}

function displayBranches() {
  
}
