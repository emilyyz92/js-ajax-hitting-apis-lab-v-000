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
      <a href="#" data-owner="${repo.owner.login}" data-name="${repo.name}" onclick="getCommits(this)">
      Get Commits</a>
      <a href="##" data-owner="${repo.owner.login}" data-name="${repo.name}" onclick="getBranches(this)">
      Get Branches</a>
    </li>`
  ).join()
  document.getElementById("repositories").innerHTML = repoList
}

function getCommits(el) {
  var commitReq = new XMLHttpRequest()
  commitReq.addEventListener('load', displayCommits)
  commitReq.open('GET', `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.name}/commits`)
  commitReq.send()
}

function getBranches(el) {
  var req = new XMLHttpRequest()
  req.addEventListener('load', displayBranches)
  req.open('GET', `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.name}/branches`)
  req.send()
}

function displayBranches() {
  var branches = JSON.parse(this.responseText)
  let branchList = '<ul></ul>'
  branchList += branches.map(branch => `<li>${branch.name}</li>`)
  document.getElementById('details').innerHTML = branchList
}

function displayCommits() {
  var commits = JSON.parse(this.responseText)
  let commitsList = '<ul></ul>'
  commitsList += commits.map(commit => `<li>${commit.commit.committer.name} - ${commit.commit.committer.message}`)
  document.getElementById("details").innerHTML = commitsList
}
