import App from "next/app";
import "../css/fonts.css"
import "../css/layout.css"
import "../css/chart-styles.css"
import "../css/people-section.css"
import "../css/transport-section.css"
import "../css/responsive-override.css"

class MyApp extends App{
  render(){
    const { Component, pageProps } = this.props;
    return (
      <div className='pageContainer'>
      <Component {...pageProps} />
    </div>
    )
  }
}

export default MyApp;