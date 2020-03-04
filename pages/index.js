// Here's an example of what a sample page looks like.
// See more: https://nextjs.org/learn/basics/getting-started/first-page

import Link from "next/link"

export default () => (
    <div>
      <div className="navbar">
        <div className="nav-align-right">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/generalbudget"><a>General Budget</a></Link></li>
          </ul>
        </div>
      </div>
      <h1>Home</h1>
    </div>
  )
  
  