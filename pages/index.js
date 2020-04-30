import { render } from "react-dom"
import { Chart } from "react-google-charts"
import Link from "next/link"
import GeneralBudget from "../datasets/expenditures/GeneralBudget"
import Footer from "../components/Footer"
import HeaderSection from "../components/HeaderSection"
import TextHeader from "../components/TextHeader"
import Leadership from "../datasets/leadership/Leadership"
import Transport from "../datasets/transport/Transport"
import NavSection from "../datasets/nav/NavSection"
import Head from "next/head"

const PageHead = () => (
  <Head>
    <meta charSet='utf-8' />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <meta
      name='viewport'
      content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
    />
    <meta
      name='description'
      content='We aim to bring attention to data-driven trends within the Hoboken government so that we can collectively build a better, well-informed, local community.'
    />
    <meta name='keywords' content='hoboken government open data' />
    <title>Project Crystal - The Hoboken Open Data Project</title>

    <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
    <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
    <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
    <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
    <link
      rel='apple-touch-icon'
      sizes='114x114'
      href='/apple-icon-114x114.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='120x120'
      href='/apple-icon-120x120.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='144x144'
      href='/apple-icon-144x144.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='152x152'
      href='/apple-icon-152x152.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/apple-icon-180x180.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='192x192'
      href='/android-icon-192x192.png'
    />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/manifest.json' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
    <meta name='theme-color' content='#ffffff' />
  </Head>
)

export default () => (
  <>
    <PageHead />
    <div className='hoboken-image'>
      <HeaderSection />

      <NavSection />

      <GeneralBudget />

      <Transport />

      <Leadership />

      <Footer />
    </div>
  </>
)
