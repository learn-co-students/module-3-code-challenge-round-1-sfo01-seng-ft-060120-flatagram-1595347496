document.addEventListener('DOMContentLoaded', function() {
    getImage()
    postRequest()
});

const getImage = () => {
    fetch('http://localhost:3000/images/1')
  .then(response => response.json())
  .then(json => fetchAllImages(json))

  
}
const postRequest = (data) => {
  
    // console.log(data)

    fetch('http://localhost:3000/comments', {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => console.log(json))
    // .then(json => json.forEach(comments => makePostRequest(comments)))
  //  console.log(comments)
}


function fetchAllImages(image){
  // console.log(image)
  let imageURLContainer = document.getElementsByClassName('image')
  imageURLContainer[0].src = image.image
  let imageTitleContainer = document.getElementsByClassName('title')
  imageTitleContainer[0].innerText = image.title
  // console.log(imageURLContainer)
    let imageCommentsContainer = document.getElementsByClassName('comment-form')[0]
    // imageCommentsContainer.innerHTRML = 
    // console.log(imageCommentsContainer)
    imageCommentsContainer.addEventListener('click', postRequest(image) )
    // console.log()
}

function makePostRequest(e){
  e.preventeDefault()
    // console.log(e)
}
console.log(makePostRequest)