firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if(user.emailVerified) {

        } else {
            setTimeout(()=>{
                window.location.assign("./emailVerification.html")
            }, 300)
        }
    } else {
        setTimeout(()=>{
            window.location.assign("./authentication.html")
        }, 300)
    }
  });


  const logout = ()=>{
    firebase.auth().signOut().then(() => {
      window.location.assign("./authentication.html")
    })
  }


  document.addEventListener('DOMContentLoaded', function () {
  
    // Reference to the "posts" collection in Cloud Firestore
    var postsRef = firebase.firestore().collection('posts').orderBy("Date", "asc");
  
    // Function to display posts on the forum
    function displayPosts(posts) {
      var forumList = document.querySelector('.list-group');
      forumList.innerHTML = ''; // Clear existing posts
      posts.reverse();
  
      posts.forEach(function (post) {
        var postElement = document.createElement('a');
        postElement.href = '#';
        postElement.classList.add('list-group-item', 'list-group-item-action');
  
        var titleElement = document.createElement('h5');
        titleElement.classList.add('mb-1');
        titleElement.textContent = post.posttitle;
  
        var contentElement = document.createElement('p');
        contentElement.classList.add('mb-1');
        contentElement.textContent = post.postvalue;
  
        var postedByElement = document.createElement('small');
        postedByElement.textContent = 'Posted by: ' + post.user;

        var postedDateElement = document.createElement('small');
        postedDateElement.textContent = 'Post Date: ' + post.Date;
  
        // Like, Dislike, and Comment Buttons
        var buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('mt-2');
  
        var likeButton = createButton('btn-outline-success', 'fas fa-thumbs-up', ' Like (' + post.like + ')', function () {
          handleLike(post.id);
        });
  
        var dislikeButton = createButton('btn-outline-danger', 'fas fa-thumbs-down', ' Dislike (' + post.dislikes + ')', function () {
          handleDislike(post.id);
        });
  
        var commentButton = createButton('btn-outline-primary', 'fas fa-comment', ' Comment', function () {
          handleComment(post.id);
        });
  
        buttonsDiv.appendChild(likeButton);
        buttonsDiv.appendChild(dislikeButton);
        buttonsDiv.appendChild(commentButton);
  
        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(postedByElement);
        postElement.appendChild(document.createElement('br'));
        postElement.appendChild(postedDateElement);
        postElement.appendChild(buttonsDiv);
  
        forumList.appendChild(postElement);
      });
    }
  
    // Function to create a button element
    function createButton(className, iconClass, text, clickHandler) {
      var button = document.createElement('button');
      button.type = 'button';
      button.classList.add('btn', 'btn-sm', className, 'mr-2');
      button.innerHTML = '<i class="' + iconClass + '"></i>' + text;
      button.addEventListener('click', clickHandler);
      return button;
    }
  
    // Function to handle the "Like" button click
    function handleLike(postId) {

    }
  
    // Function to handle the "Dislike" button click
    function handleDislike(postId) {
      // Implement the logic to handle the "Dislike" button click
      // You may need to update the post in the Firestore database
    }
  
    // Function to handle the "Comment" button click
    function handleComment(postId) {
      // Implement the logic to handle the "Comment" button click
      // You may navigate to a different page or show a modal for comments
    }
  
    // Fetch and display posts on page load
    postsRef.get().then(function (querySnapshot) {
      var posts = [];
      querySnapshot.forEach(function (doc) {
        posts.push(doc.data());
      });
      displayPosts(posts);
    });
  });
  