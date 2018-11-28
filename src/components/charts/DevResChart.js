/* 
Desc: Financial Management Report
*/

import React from 'react';
import * as d3 from "d3";
import Constants from '../../constants';

class DevResultChart extends React.Component {

    drawChart(propData, width, height) {
        d3.select('#devResChart').select('svg').remove();

        // Check for valid data, if not do not render the chart
        if(propData && propData.length > 0){
            // Values from Target and Actual
            let data = [];
            // Holds the x axis bars (Target & Actual) name
            let xAxisData = [];
            let legendTexts = ['Q1 Target', 'Q1 Actual'];
            let legendColors = [Constants.TARGET_COLOR, Constants.ACTUAL_COLOR];
            let title = 'ITC Development Results';
            let colorIndex = 1;

            // Manipulate the data and push it to x and y axis variables. There is one name for one Target and Actual  
            propData.forEach(element => {
                xAxisData.push(element.name);
                data.push(element.values.T);
                data.push(element.values.A);
            }); 

            // Fixed values for placing the graph elements
            let marginTop  = 80,
                marginBottom  = 80,
                marginLeft = 50;

            const svg = d3.select('#devResChart')
                .append('svg')
                .attr("style", `outline: thin solid ${Constants.GRID_COLOR};`)
                .attr('width', width)
                .attr('height', height);

            const chart = svg.append('g')

            // Calculate the max value of y axis
            let xMax = d3.max(data, d => d);
            xMax = xMax + (xMax / 10);

            // Create y axis
            const yScale = d3.scaleLinear()
            .range([height - (marginTop + marginBottom - 10), 0])
            .domain([0, xMax]);

            svg.append('g')
            .attr('transform', `translate(${marginLeft}, ${marginBottom})`)
            .call(d3.axisLeft(yScale));

            // Create x axis
            const xScale = d3.scaleBand()
            .range([0, width - 80])
            .domain(xAxisData.map(d => d))

            svg.append('g')
            .attr('transform', `translate(${marginLeft}, ${height - marginBottom + 10})`)
            .call(d3.axisBottom(xScale));

            // Grid
            chart.append('g')
            .attr('color', Constants.GRID_COLOR)
            .attr('width', '100')
            .attr('transform', `translate(${marginLeft}, ${marginBottom})`)
            .call(d3.axisLeft()
                    .scale(yScale)
                    .tickSize(-width + marginBottom , 0, 0)
                    .tickFormat(''));

            let totalWidthXaxis = width - 80;
            let widthGap = totalWidthXaxis / (propData.length * 2);
            let even = true;
            let manipulatedIndex = 1;

            // Create all the rectangles. x axis logic is to make two adjacent bars and gap between those two
            chart.selectAll()
            .data(data)
            .enter()
            .append('rect')
            .attr("x", (d, i) => 
                    {
                        if(even) 
                        {
                            even = !even;
                            return (widthGap * ((manipulatedIndex * 2) - 1)) - 40;
                        }
                        else
                        { 
                            even = !even;
                            return (widthGap * ((manipulatedIndex++ * 2) - 1)) + 10;
                        }
                    }
                )
            .attr('y', s => height - (marginBottom + marginTop - 10))
            .attr('width', 40)
            .attr('transform', `translate(${marginLeft - 5}, ${marginBottom})`)
            .attr("fill", () => {
                    colorIndex === 1? colorIndex = 0 : colorIndex = 1;
                return legendColors[colorIndex];
            })
            .on('mouseover', d => {
                let rect = d3.select(d3.event.target);
                let xVal = rect.attr('x');
                let yVal = rect.attr('y');
                let transVal = rect.attr('transform');

                d3.select('#devResChart').select('svg').append('text')
                    .attr('id', 'hoverText')
                    .attr('x', +xVal + 12)
                    .attr('y', +yVal + 20)
                    .style("fill", "white") 
                    .style("font-weight", "bold") 
                    .attr('transform', transVal).text(d);

                let currCol = rect.attr('fill');
                if(currCol === Constants.TARGET_COLOR){
                    rect.attr('fill', Constants.TARGET_HOVER_COLOR);
                }
                else{
                    rect.attr('fill', Constants.ACTUAL_HOVER_COLOR);
                }
            })
            .on('mouseout', d => {
                let rect = d3.select(d3.event.target);
                let currCol = rect.attr('fill');
                d3.select('#hoverText').remove();
                if(currCol === Constants.TARGET_HOVER_COLOR){
                    rect.attr('fill', Constants.TARGET_COLOR);
                }
                else{
                    rect.attr('fill', Constants.ACTUAL_COLOR);
                }
            })
            .attr('height', 0)
            .transition()
                .duration(1500)
                .delay(10)
                .attr('height', s => height - yScale(s) - (marginBottom + marginTop - 10))
                .attr('y', s => yScale(s))
            

            // Creating legends. Create number os g elements for each legends
            let legend = svg.selectAll('.legend')
                .data(legendTexts.slice())
                .enter().append('g')
                .attr('class', 'legend')
                .attr('transform', (d, i) => { return `translate( ${i * 150}, 160)`});  // 150 - gap between two legends ans 160 - y axis value

            // Create rects for each g created above
            legend.append('rect')
                .attr('x', width / 2 - 100)
                .attr('y', height/ 2 + 20)
                .attr('width', 18)
                .attr('height', 18)
                .attr("style", `outline: thin solid black;`)
                .style('fill', (d, i) => legendColors[i]);

            // Create text for each g
            legend.append('text')
                .attr('x', width / 2 - marginBottom)
                .attr('y', height / 2 + 33)
                .style('font-size', '12px')
                .text(d => d);

            // Create text to show title
            svg.append('text')
                .attr('x', width /  2)
                .attr('y', 30)
                .attr("text-anchor", "middle")  
                .style("font-size", "22px") 
                .text(title)
        }
        else{
            d3.select('#devResChart').append('svg')
            .attr('width', width)
            .attr('height', height)
            .attr("style", `outline: thin solid ${Constants.GRID_COLOR};`)
            .append('text')
            .attr('x', width /  2)
            .attr('y', 200)
            .style("font-size", "22px") 
            .attr("text-anchor", "middle") 
            .text('No data found');
        }
    }

    componentWillReceiveProps(nextProps){
        let itcDevResultData = null;
        let isDataChanged = false;

        if(nextProps.data && nextProps.data.itcDevResult)
            itcDevResultData = nextProps.data.itcDevResult;

        if(!this.props.data)
            isDataChanged = true;
        else if(JSON.stringify(this.props.data.itcDevResult) !== JSON.stringify(nextProps.data.itcDevResult))
            isDataChanged = true;

        if(isDataChanged)
            this.drawChart(itcDevResultData, nextProps.width, nextProps.height);
    }
    

    componentDidMount() {
        let itcDevResultData = null;
        
        if(this.props.data && this.props.data.itcDevResult)
            itcDevResultData = this.props.data.itcDevResult;

        this.drawChart(itcDevResultData, this.props.width, this.props.height);
      }

      render(){
        return null
      }
}

export default DevResultChart;