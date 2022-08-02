let posts = [
    {
        'author': 'Author1',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'content': 'img/image-01.jpg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author2',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'content': 'img/image-02.jpg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author3',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'content': 'img/image-03.jpg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author4',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'content': 'img/image-04.jpg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author5',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'content': 'img/image-05.jpg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author6',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'content': 'img/image-06.jpg',
        'description': 'Text123',
        'location': 'Germany'
    },
];

let postContainer = document.getElementById('postCards');

function submitSearch() {
    console.log('searched');
}

function render() {
    renderPostCards();
}


/* Object.keys(posts).forEach(post => {
    let tmpl = `<p>${posts[post].title}</p><br>
      <p>${posts[post].description}</p>
      <img src="${posts[post].image}">`;
    document.getElementById("postRoutes").innerHTML += tmpl;
  }); */

 function renderPostCards() {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        postContainer.innerHTML += /*html*/`
        <div class="post-card">
            <div class="card-header-wrapper">
                <div class="card-header-container">
                    <div class="authorPP-container">
                        <img src="${post["image"]}">
                    </div>
                    <div class="author-wrapper">
                        <div>
                            <span><b>${post["author"]}</b></span>
                         </div>
                         <span>${post["location"]}</span> -
                         <span>${post["description"]}</span>
                    </div>
                </div>
                <div class="post-card-options">
                    <img src="img/bootstrap-icons-1.9.1/three-dots.svg">
                </div>
            </div>
            <div class="card-content">
                <img src="${post["content"]}">
            </div>
            <div class="card-bottom-section">

            </div>
        </div>`;
    }
} 
