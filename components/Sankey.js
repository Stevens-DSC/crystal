import React from 'react';

const google = window.google

google.charts.load('current', {
    'packages': ['sankey']
});

const totalHeader = "Avg Residential Taxpayer Impact";
const categories = [
    ["Municipal Purpose Tax", 2477.12],
    ["Municipal Library", 240.40],
    ["Municipal Open Space", 104.52],
    ["Local School District", 1980.65],
    ["County Purposes", 3376.00],
    ["County Open Space", 78.39]
]

export class Sankey extends React.Component {
    constructor() {
        super();

        // this.options = options;

        google.charts.setOnLoadCallback(() => this.renderChart());
    }

    componentDidMount() {

    }

    componentDidUpdate() {
        this.renderChart();
    }

    renderChart() {

        let data = new google.visualization.DataTable();
        data.addColumn('string', 'Total Budget (Avg Residential Taxpayer Impact)');
        data.addColumn('string', 'Category');
        data.addColumn('number', 'Amount');

        let arr = []

        for (var i = 0; i < categories.length; i += 1) {
            arr.push([totalHeader, categories[i][0], categories[i][1]]);
        }

        data.addRows(arr);

        let chart = new google.visualization.Sankey(document.getElementById("sankey_basic"));

        var options = {
            height: 300,
            width: 600,
        };

        chart.draw(data, options);


    }

    render() {
        return ( <
            div id = "sankey_basic"
            styles = {
                {
                    width: '900px;',
                    height: '600px'
                }
            } > < /div>
        )
    }


}