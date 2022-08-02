let posts = [
    {
        'author': 'Author1',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author2',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author3',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author4',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author5',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
        'description': 'Text123',
        'location': 'Germany'
    },
    {
        'author': 'Author6',
        'image': 'img/bootstrap-icons-1.9.1/person-circle.svg',
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

        postContainer.innerHTML += `
        <div class="post-card">
            <div class="post-card-wrapper">
                <div>
                     <img src="${post["image"]}">
                </div>
                <div>
                    <div class="author-wrapper">
                        ${post["author"]}
                    </div>
                    <div>
                        ${post["location"]}
                    </div>
                </div>
                <div>
                     ${post["description"]}
                </div>
                <div>
                    options
                </div>
            </div>
        </div>`;
    }
} 
