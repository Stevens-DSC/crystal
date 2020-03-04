import '../css/global.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (<div class="pageContainer">
      <Component {...pageProps} />
      </div>)
}