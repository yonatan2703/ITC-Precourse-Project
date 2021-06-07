// URL of the Github API.
const GITHUB_URL = "https://api.github.com/users/yonatan2703";

// Getting information and inserting it into the site.
fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    document.getElementById("my-name").innerHTML = data.name;
  })