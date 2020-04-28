import { render } from "react-dom"
import Link from "next/link"
import { Chart } from "react-google-charts"
import LargeStatContainer from "../../components/LargeStatContainer"
import SpendingTable from "./SpendingTable"
import PieChart from "../../components/PieChart"

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
    exp.map((row) => row[1])
    .filter(row => !isNaN(row))
    .reduce((acc, cur) => acc + cur)

export default () => (
  <>
    <div className='overview-genbudget'>
      <section className='section-generic'>
        <LargeStatContainer
          title={"Total Tax Expenditures"}
          value={sum(expenditures)}
          subtext={"Now, let's see how that gets broken up"}
        />
        <PieChart data={expenditures} />
      </section>

      <SpendingTable expenditures={expenditures} />
    </div>
  </>
)
