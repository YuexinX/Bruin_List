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

      <div class="loginNav" align="right">
        <a class="login" href="google.com">Sign up</a>
        <a class="login"> | </a>
        <a class="login" href="google.com">Log in</a>
      </div>

    </nav>

    <h3 align="center">Discover & share</h3>
    <h4 align="center">the latest news at UCLA</h4>
    <div class="navElements">
        <input
          type="text"
          placeholder="Search topics..."
          name="search"
          id="search"
        />
        <button class="search-submit" type="submit">Submit</button>
      </div>

    <div class="categories" align="center">
    <table>
      {/* This first section is for visualization purposes */}
                <tr> 
                    <th><a class="category-link" href="site/link-to-category-page">Housing</a></th>
                    <th><a class="category-link" href="site/link-to-category-page">Classes</a></th>
                    <th><a class="category-link" href="site/link-to-category-page">Sports</a></th>
                    <th><a class="category-link" href="site/link-to-category-page">Gaming</a></th>
                </tr>
                <tr>
                    <th><a class="category-link" href="site/link-to-category-page">Events</a></th>
                    <th><a class="category-link" href="site/link-to-category-page">Food</a></th>
                    <th><a class="category-link" href="site/link-to-category-page">Clubs</a></th>
                    <th><a class="category-link" href="site/link-to-category-page">Internships</a></th>
                </tr>

      {/* This section is dynamic and probably more like what we'd use */}

                {/* {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })} */}
            </table>
    </div>

    </div>
  )
}

export default App;
