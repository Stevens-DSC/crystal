import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/sankey

//Using React Google Charts: https://www.npmjs.com/package/react-google-charts

const options = {};
class ExampleChart extends React.Component {
  render() {
    return (
    <div>
        <div>
            <h2>2019 Budget</h2>
        </div>
        <div className="App">
        <Chart
            width={'100%'}
            height={350}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Area of Funding', 'Total Dollars'],
                ['Municipal Purpose Tax', 56493419],
                ['Municipal Library', 5780509],
                ['Municipal Open Space', 2343871],
                ['Fire Districts (total levies)', 0],
                ['Other Special Districts (total levies)', 0],
                ['Local School District', 47068021],
                ['Regional School District', 0],
                ['County Purposes', 73827805],
                ['County Library', 0],
                ['County Board of Health', 0],
                ['County Open Space', 1761929],
                ['Other County Levies (total)', 0],
            ]}
            options={{
                allowHtml: true,
                is3D: true,
            }}
            rootProps={{ 'data-testid': '1' }}
            />
      </div>
    </div>
    );
  }
}

export default ExampleChart