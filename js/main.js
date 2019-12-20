'use strict'

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


// Bindings on load.
window.addEventListener('load', function() {
  var containerElement = document.getElementsByClassName('posts-container')[0];
  const post = {
    text: "lorem ipsum",
    image: "http://placekitten.com/g/300/200",
    isLiked: true
  }
  containerElement.insertBefore(
        createPostElement(post.text, post.image, post.isLiked),
        containerElement.firstChild);

}, false);