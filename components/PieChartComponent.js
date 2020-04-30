import { render } from "react-dom"
import { Chart } from "react-google-charts"

export default props => (
  <>
    <div className='accent'>
      <div className={"chart"}>
        <Chart
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          height='400px'
          options={{
            legend: "none",
            pieSliceText: "label",
          }}
          legendToggle={false}
          {...props}
        />
      </div>
    </div>
  </>
)
