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

  // Reference to the "users" collection in Cloud Firestore
  var usersRef = firebase.firestore().collection('users');

  // Function to display user profiles
  function displayUserProfiles(users) {
    var userList = document.getElementById('userList');
    userList.innerHTML = ""; // Clear existing user profiles

    if (users.length === 0) {
      console.log('No users found.');
      return;
    }

    users.forEach(function (user) {
      var userElement = document.createElement('div');
      userElement.classList.add('list-group-item', 'list-group-item-action');

      // Display user details (you can customize this based on your data structure)
      var emailElement = document.createElement('p');
      emailElement.classList.add('mb-1');
      emailElement.textContent = 'Email: ' + user.Email;

      var signUpElement = document.createElement('p');
      signUpElement.classList.add('mb-1');
      signUpElement.textContent = 'User since: ' + user.SignUpDate;

      // Add more user details as needed

      userElement.appendChild(emailElement);
      userElement.appendChild(signUpElement);
      // Add more user details as needed

      userList.appendChild(userElement);
    });
  }

  // Fetch and display user profiles on page load
  usersRef.get().then(function (querySnapshot) {
    var users = [];
    querySnapshot.forEach(function (doc) {
      users.push(doc.data());
    });
    console.log('Fetched users:', users);
    displayUserProfiles(users);
  }).catch(function (error) {
    console.error('Error fetching users:', error);
  });
});
