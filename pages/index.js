import { render } from "react-dom"
import { Chart } from "react-google-charts"
import Link from "next/link"
import GeneralBudget from "../datasets/expenditures/GeneralBudget"
import Footer from "../components/Footer"


export default () => (
  <>
    <div className='hoboken-image'>
      <div className='header'>
        <div className='logo-section'>
          <img className='logo' src='/logo.svg' alt='logo' />
        </div>
        <div className='accent'></div>
      </div>
      <div className='text-section text-header'>
        <h1>Let's talk money.</h1>
        <p>
          Whether you're looking for how much is spent on education, or how the
          funding for the park's going, we've got you covered.
        </p>
      </div>
      <GeneralBudget />
      <Footer />
    </div>
  </>
)
