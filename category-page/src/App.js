// Filename - App.js
// Notes: Built from https://www.geeksforgeeks.org/how-to-create-a-website-in-react-js/

import React from "react";
import "./App.css";
import logo from './bruinlist-logo.png'

function App() {  
	return (
		<div>
			<nav class="navbar background">
      <div class="logo">
        <a href="LINK GOES HERE">
          <img src={logo} />
          </a>
        </div>

      <div class="navElements">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          id="search"
        />
        <button class="search-submit" type="submit">Submit</button>
      <button class="post-button" type="submit">Post</button>
      </div>

      <div class="loginNav">
          <a class="login" href="google.com">Sign up</a>
          <a class="login"> | </a>
          <a class="login" href="google.com">Log in</a>
        </div>
    </nav>


			<body class="body">
				<div class="box-main">
					<div class="main">
          <h1 class="category-title">
                  Housing Search
                </h1>


            {/* Just for visualization */}
            <div class="post">
                <a class="post-title" href="postlink">
                  Subletting double on Strathmore (f)
                </a>
                <div class="post-author">
                  <a class="post-author-link" href="authorlink">
                    Emily B.
                  </a>
                </div>
                <p class="post-description">
                  My roommate is leaving and we're looking to fill her spot. Rent is $1500/month, utilities included. I do have one hyperactive iguana so please only reach out if you are okay with reptiles! DM for details!
                </p>
              </div>
              <div class="post">
                <a class="post-title" href="postlink">
                Sophomore looking for triple
                </a>
                <div class="post-author">
                  <a class="post-author-link" href="authorlink">
                    Jack S.
                  </a>
                </div>
                <p class="post-description">
                  I am a chill dude majoring in history looking for housing for next year. I'm also deathly allergic to reptiles so no pets please. Thx guyz
                </p>
              </div>


					</div>
				</div>
			</body>

      <body class="">

      </body>

		</div>
	);
}

export default App;
