import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [76, 67, 90, 57],
            options: {
                chart: {
                    height: 390,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                labels: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '12px',
                    position: 'left',
                    offsetX: 160,
                    offsetY: -5,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 3
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (



            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="radialBar" height={300} />
            </div>



        );
    }
}


export default App;
