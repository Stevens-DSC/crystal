import "../css/fonts.css"
import "../css/layout.css"
import "../css/chart-styles.css"
import "../css/people-section.css"
import "../css/transport-section.css"
import "../css/responsive-override.css"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className='pageContainer'>
      <Component {...pageProps} />
    </div>
  )
}
