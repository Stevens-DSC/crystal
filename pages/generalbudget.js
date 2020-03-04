// Here's an example of what a sample page looks like.
// See more: https://nextjs.org/learn/basics/getting-started/first-page

import Link from "next/link"

export default () => (
  <>
    <div class="header">
      <div class="logo-section">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div class="accent"></div>
    </div>
    <div class="overview-genbudget">
      <h1>Budget</h1>
      <section class="section-generic">
        <div>
          <div class="largeStat">100%</div>
          <p>Here's a statistic that is 100% of a statistic. There are lots of statistics, but this one is <em>very</em> important.</p>
        </div>
        <div class="accent">a</div>
      </section>
      <section class="section-generic">
        <div class="accent">a</div>
        <div>b</div>
      </section>
      <section class="section-generic">
        <div>a</div>
        <div class="accent">b</div>
      </section>
      <footer></footer>
    </div>
  </>
)
