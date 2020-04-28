import { render } from "react-dom"
import Link from "next/link"
import { Chart } from "react-google-charts"
import CurrencyUtils from "../../utils/CurrencyUtils"

export default (props) => (
  <>
    <section className='section-chart'>
      <div className='accent'>
        <div className={"chart-table"}>
          <table>
            {props.expenditures.map((row, indx) => (
              <tr key={"row" + indx}>
                {row.map((cell, cIndex) => (
                  <td key={"cell" + cIndex}>{CurrencyUtils.formatMoney(cell)}</td>
                ))}
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  </>
)
