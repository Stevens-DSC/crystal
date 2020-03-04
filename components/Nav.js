export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="nav-align-right">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/generalbudget">
                  <a>General Budget</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
