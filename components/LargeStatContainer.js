import { render } from "react-dom"
import Link from "next/link"
import { Chart } from "react-google-charts"
import CurrencyUtils from "../utils/CurrencyUtils"

export default (props) => (
  <>
    <div className='largeStatContainer'>
      <h4>{props.title}</h4>
      <div className='largeStat'>{CurrencyUtils.formatMoney(props.value)}</div>
      <p>
        <a target="_blank" className="hidden-button" href={props.sublink || "#"}>
          <>
            {props.subtext} <img src='/right_arrow_thing.svg' alt='logo' />
          </>
        </a>
      </p>
    </div>
  </>
)
