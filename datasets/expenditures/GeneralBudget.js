import { render } from "react-dom"
import Link from "next/link"
import { Chart } from "react-google-charts"
import LargeStatContainer from "../../components/LargeStatContainer"
import SpendingTable from "./SpendingTable"
import PieChartComponent from "../../components/PieChartComponent"
import TextHeader from "../../components/TextHeader"

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

const sum = (exp) =>
  exp
    .map((row) => row[1])
    .filter((row) => !isNaN(row))
    .reduce((acc, cur) => acc + cur)

export default () => (
  <>
    <section id='budgets'>
      <TextHeader
        title={"Let's talk budgets."}
        text={
          <p>
            Whether you're looking for how much is spent on education, or how
            the funding for the park's going, we've got you covered.
          </p>
        }
        first={false}
      />
      <div className='overview-genbudget'>
        <section className='section-generic'>
          <LargeStatContainer
            title={"Total Tax Expenditures"}
            value={sum(expenditures)}
            subtext={"Now, let's see how that gets broken up"}
            sublink={
              "https://www.dropbox.com/s/xz913vlz04ud4nu/2019%20City%20of%20Hoboken%20Adopted%20Budget.pdf?dl=0"
            }
          />
          <PieChartComponent data={expenditures} />
        </section>

        <SpendingTable expenditures={expenditures} />
      </div>
    </section>
  </>
)
