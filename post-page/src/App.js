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
        <a class="category-title" href="categories/housing-search">Back to Housing Search</a>
					<div class="main">


            <div class="post">
              <a class="post-title" href="postlink">
                Subletting double on Strathmore (f)
              </a>
              <div class="post-author">
                <a class="post-author-link" href="authorlink">
                  catbeebunny
                </a>
              </div>
              <p class="post-description">
              My roommate is leaving and we're looking to fill her spot. <p /><br /> Rent is $1500/month, utilities included. I do have one hyperactive iguana so please only reach out if you are okay with reptiles! DM for details!
              </p>

              <div class="comments-section">
                <h2>Comments</h2>
                <div class="add-comment">
                    <input
                      type="text"
                      placeholder="Add comment..."
                      name="comment"
                      id="comment"
                    />
                    <button class="comment-submit" type="submit">Submit</button>
                </div>

                  <div class="comment">
                    <div class="comment-author">
                      <a class="comment-author-link" href="authorlink">
                        ChancellorRexX
                      </a>
                    </div>
                    I'm interested! I have a really cute golden retriever, hopefully that's okay!
                  </div>

                  <div class="comment">
                    <div class="comment-author">
                      <a class="comment-author-link" href="authorlink">
                        katie_sunset_0
                      </a>
                    </div>
                    I don't really like iguanas, but I'd pay extra to stay there for the summer if you get rid of it. 
                  </div>

                  <div class="comment">
                    <div class="comment-author">
                      <a class="comment-author-link" href="authorlink">
                        the_terminator5
                      </a>
                    </div>
                    Is parking included?
                  </div>

                </div>


    

            </div>


          </div>
        </div>
      </body>
    </div>
  )
}

export default App;
