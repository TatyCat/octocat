import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <a href="http://feeds.feedburner.com/Octocats">RSS</a>
          </li>
          <li>
            <a href="https://octodex.github.com/faq.html">FAQ</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="http://github.com">
              <img src="images/github-brands.svg" />
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <p>SDG's &copy; Github Clone 2019</p>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer
