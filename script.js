let posts = [
  {
    author: "can.tkcu",
    image: "img/bootstrap-icons-1.9.1/person-circle.svg",
    content: "img/image-01.jpg",
    description: "Birb enjoying piggie boat",
    location: "Vacation",
    comments: ["hahahah😂"],
  },
  {
    author: "LoreHunter1337",
    image: "img/bootstrap-icons-1.9.1/person-circle.svg",
    content: "img/image-02.jpg",
    description: "pulling up at the local bar",
    location: "Night City",
    comments: [],
  },
  {
    author: "Micha.Lenz",
    image: "img/bootstrap-icons-1.9.1/person-circle.svg",
    content: "img/image-03.jpg",
    description: "cruising & vibing",
    location: "Greece",
    comments: [],
  },
  {
    author: "Ezio Auditore",
    image: "img/bootstrap-icons-1.9.1/person-circle.svg",
    content: "img/image-04.jpg",
    description: "Tagliatelle <3",
    location: "Italy",
    comments: [],
  },
  {
    author: "ItsMarie",
    image: "img/bootstrap-icons-1.9.1/person-circle.svg",
    content: "img/image-05.jpg",
    description: "Work, Life, Coffee balance",
    location: "Germany",
    comments: [],
  },
  {
    author: "EdgePhotography",
    image: "img/bootstrap-icons-1.9.1/person-circle.svg",
    content: "img/image-06.jpg",
    description: "Stairway to enlightenment",
    location: "Germany",
    comments: [],
  },
];


let emojis = ["😍", "🥰", "😂", "😀", "❤", "💯"];

let postContainer = document.getElementById("postCards");


/** TODO's
 * date time
 * responsive
 * brainstorm addit. Ideas
 */


function submitSearch() {
  console.log("searched");
}

function stopProp() {
  event.stopPropagation();
}

function submitComment(index) {
  let input = document.getElementById(`commentIN${index}`);
  posts[index]["comments"].push(input.value);
  renderComments();
  input.value = "";
}

function liked(i, like) {
  let elem = document.getElementById(`like${i}, ${like}`);
  elem.classList.toggle("liked");
}

////////////////////////////////////////////////////////////////////////////////////////////RENDER FUNCS////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function render() {
  renderPostCards();
  renderComments();
}

function renderPostCards() {
  for (let i = 0; i < posts.length; i++) {
    postContainer.innerHTML += generatePostCard(i);
    renderEmojis(i);
  }
}

function renderComments() {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    let commentOUT = document.getElementById(`commentOUT${i}`);
    commentOUT.innerHTML = "";
    for (let j = 0; j < post["comments"].length; j++) {
      commentOUT.innerHTML += generatePostComment(i, j);
    }
  }
}

function renderEmojis(i) {
  for (let index = 0; index < emojis.length; index++) {
    let list = document.getElementById(`emojiTable${i}`);
    const element = emojis[index];
    list.innerHTML += `<span id="emojis" onclick="addEmoji(${i},${index})">${element}</span>`;
  }
}

function addEmoji(i, index) {
  let inputField = document.getElementById(`commentIN${i}`);
  let emoji = emojis[index];

  inputField.value += emoji;
}

function emoji(i) {
  let elem = document.getElementById(`emojiTable${i}`);
  elem.classList.toggle("d-none");
}

////////////////////////////////////////////////////////////////////////////////////////////GENERATED HTML/JS////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generatePostCard(index) {
  const post = posts[index];
  return /*html*/ `
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
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                 <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
            </div>
        </div>
        <div class="card-content">
            <img src="${post["content"]}">
        </div>
        <div class="card-bottom-section">
            <div class="interaction">
                <div class="Interaction-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                    </svg>
                </div>
                <div class="bookmark-icon"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                </div>
            </div>
            <div class="like-section padding">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <span>Liked by ${post["author"]} and others...</span>
            </div>
            <div id="commentOUT${index}" class="comment-section">
               
            </div>
            <div class="date">
                <ins><datetime-local></datetime-local></ins>
            </div>
            <form class="comment-form padding" onsubmit="submitComment(${index}); return false;">
                <div id="emojiList" class="emoji-list" onclick="emoji(${index})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16" >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                  </svg>
                  <div id="emojiTable${index}" class="d-none" onclick="stopProp()">

                  </div>
                </div>
                <input id="commentIN${index}" type="text" required  min-length="1" class="comment-input padding" name="UserComment" placeholder="Add Comment...">
                <button class="post-button">Post</button>
            </form>
        </div>
    </div>`;
}

function generatePostComment(i, j) {
  const post = posts[i];
  const comment = post["comments"][j];
  const like = [j];
  return /*html*/ `
  <div class="comment-wrapper">
      <div class="comment-container">
          <img src="${post["image"]}">
          <div>${posts[0]["author"]}</div>
          <div>${comment}</div>
      </div>
       <button id="like${i}, ${like}" onclick="liked(${i}, ${like})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkgray" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
       </button>
 </div>`;
}
