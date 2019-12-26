// 'use strict'

const registrationForm = document.getElementById("registration-form");
const containerElement = document.getElementsByClassName('posts-container')[0];
const splashScreen = document.getElementById("page-splash");
const baseUrl = 'http://localhost:8080/';

function createPostElement(text, imageUrl, isLiked) {

  const html = `
        <div class="card my-3">
          <div>
            <img class="d-block w-100" src="${imageUrl}" alt="Post image">
          </div>
          <div class="px-4 py-3">
            <div class="d-flex justify-content-around">
              <span class="h1 mx-2 like"></span>
              <span class="h1 mx-2 muted">
                <i class="far fa-comment"></i>
              </span>
              <span class="mx-auto"></span>
              <span class="h1 mx-2 muted bookmark"></span>
            </div>
            <hr>
            <div>${text}</div>
            <hr>
          </div>
        </div>
        `
  // Create the DOM element from the HTML.
  const div = document.createElement('div');
  div.innerHTML = html.trim();
  const postElement = div.firstChild;
  console.log(postElement);

  const like = postElement.getElementsByClassName('like')[0];

  // if the post is already liked - hide like button
  if(isLiked){
    like.innerHTML = '<i class="fas fa-heart"></i>';
    like.classList.add('text-danger');
  } else {
    like.innerHTML = '<i class="far fa-heart"></i>';
    like.classList.add('muted');
  }

  return postElement;
}

function hideSlashScreen() {
  splashScreen.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

function showSlashScreen() {
  splashScreen.removeAttribute('style');
  document.body.classList.add('no-scroll');
}

function clearRegistrationForm() {
  registrationForm.reset();
}

async function loginUser(userFormData) {
  const response = await fetch(baseUrl + 'users', {method: "POST"});
  console.log(response);
  return response;
}

// Bindings on load.
window.addEventListener('load', function() {
  const post = {
    text: "lorem ipsum",
    image: "http://placekitten.com/g/300/200",
    isLiked: true
  }
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // event.stopPropagation()
    const formData = new FormData(event.target);
    loginUser(formData);
    clearRegistrationForm()
  })
  containerElement.insertBefore(
        createPostElement(post.text, post.image, post.isLiked),
        containerElement.firstChild);

}, false);