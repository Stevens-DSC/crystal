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

export default () => (
  <>
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
