import { render } from "react-dom"
import { Chart } from "react-google-charts"
import Link from "next/link"
import GeneralBudget from "../datasets/expenditures/GeneralBudget"
import Footer from "../components/Footer"
import HeaderSection from "../components/HeaderSection"
import TextHeader from "../components/TextHeader"
import Leadership from "../datasets/leadership/Leadership"

export default () => (
  <>
    <div className='hoboken-image'>

      <HeaderSection />

      <GeneralBudget />

      <Leadership />

      <Footer />

    </div>
  </>
)
