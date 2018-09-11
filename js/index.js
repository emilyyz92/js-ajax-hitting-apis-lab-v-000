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
  const repoList = `<ul>` + repos.forEach(function(element) {
    debugger;
    return `<li> <a href="${element.html_url}">${element.name}</a></li>`
  }) + `</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
