import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>      
        <a href="http://github.com">
          <img src="images/githubOctLogo.png"/>
        </a>
        <ul>
          <li>
            <a href="http://feeds.feedburner.com/Octocats">RSS</a>
          </li>
          <li>
            <a href="https://octodex.github.com/faq.html">FAQ</a>
          </li>
          <li>
            <a href="http://www.github.com/">Back to Github</a>
          </li>
        </ul>
      </header>
    )
  }
}
export default Header