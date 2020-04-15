import { render } from "react-dom"
import { Chart } from "react-google-charts"
import Link from "next/link"

// I KNOW that this page is terribly made - it's a MVP!


const expenditures = [
  ["Taxes", "Tax Levy"],
  ["Municipal Purpose", 56493419.0],
  ["Municipal Library", 5780509.0],
  ["Municipal Open Space", 2343871.0],
  ["Fire Districts (total levies)", 0],
  ["Other Special Districts (total levies)", 0],
  ["Local School District", 47068021.0],
  ["Regional School District ", 0],
  ["County Purposes", 73827805.0],
  ["County Library", 0],
  ["County Board of Health", 0],
  ["County Open Space", 1761929.0],
  ["Other County Levies (total)", 0],
]

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
      <div className='overview-genbudget'>
        <section className='section-generic'>
          <div className='largeStatContainer'>
            <h4>Total tax expenditures</h4>
            <div className='largeStat'>$187,275,554</div>
            <p>
              Now, let's see how that gets broken up{" "}
              <img src='/right_arrow_thing.svg' alt='logo' />
            </p>
          </div>
          <div className='accent'>
            <div className={"chart"}>
              <Chart
                chartType='PieChart'
                data={expenditures}
                loader={<div>Loading Chart</div>}
                height='400px'
                options={{
                  legend: "none",
                  pieSliceText: "label",
                }}
                legendToggle={false}
              />
            </div>
          </div>
        </section>

        <section className='section-chart'>
          <div className='accent'>
            <div className={"chart-table"}>
              <table>
                {expenditures.map((row, indx) => (
                  <tr key={"row" + indx}>
                    {row.map((cell, cIndex) => (
                      <td key={"cell" + cIndex}>
                        {isNaN(cell)
                          ? cell
                          : cell.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })}
                      </td>
                    ))}
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </section>
      </div>
      <div className=' text-footer'>
        <div class='text-section'>
          <h2>More info?</h2>
          <p>
            We're working on it. Submit a pull request to add some more
            information!
          </p>
          <footer>
            Made with &#x2665; at{" "}
            <a href='https://stevens.edu'>Stevens Institute of Technology.</a>
          </footer>
        </div>
      </div>
    </div>
  </>
)
