/* 
Desc: Financial Management Report
*/

import React from 'react';
import * as d3 from "d3";
import Constants from '../../constants';

class FMRChart extends React.Component{

    drawStackedChart(itcFinacialMgmtData, width, height){
        
        d3.select('#fmrChart').select('svg').remove();
        
        if(itcFinacialMgmtData && itcFinacialMgmtData.length > 0){
            let data = [...itcFinacialMgmtData];
            
            let marginBottom  = 80,
                marginTop  = 80,
                marginRight = 50,
                marginLeft = 50;

            let legendTexts = ['Series1', 'Series2'];
            let legendColors = [Constants.TARGET_COLOR, Constants.ACTUAL_COLOR];
            let title = 'ITC Financial Management Report';
            let xAsixData = [];

            // Adding the SVG to the placeholder
            const svg = d3.select('#fmrChart')
                .append('svg')
                .attr("style", `outline: thin solid ${Constants.GRID_COLOR};`)
                .attr('width', width)
                .attr('height', height);

            let chart = svg.append('g');

            // Transform the data to stack enabled
            data.forEach((d) => {
                let y0 = 0;
                d.items = legendColors.map((color, index) => {
                    return {
                        color: color,
                        y0: y0,
                        y1: y0 += +d[`series${index + 1}`],
                        val: d[`series${index + 1}`]
                    }
                });

                xAsixData.push(d.name);
            });
            // End of Transform

            // Create x scale
            const x = d3.scaleBand().range([0, width - (marginRight + marginLeft - 20)]).domain(xAsixData);
            const xAxis = d3.axisBottom(x);

            // Calculate the max value of y axis
            let xMax = d3.max(data, item => item.items[1].y1);
            xMax = xMax + (xMax / 10);

            // Create y scale
            const y = d3.scaleLinear().rangeRound([height - (marginTop + marginBottom - 10), 0]).domain([0, xMax]);
            const yAxis = d3.axisLeft(y).ticks(10);
            
            // Adding grid
            chart.append('g')
            .attr('color', Constants.GRID_COLOR)
            .attr('transform', `translate(${marginLeft}, ${marginBottom})`)
            .call(d3.axisLeft()
                    .scale(y)
                    .tickSize(-width + marginBottom , 0, 0)
                    .tickFormat(''));

            // Adding x axis
            svg.append('g')
                .attr('transform', `translate(${marginLeft}, ${height - marginBottom + 10})`)
                .call(xAxis);
            // Adding y axis
            svg.append('g')
                .attr('transform', `translate(${marginLeft}, ${marginBottom})`)
                .call(yAxis);

            // Dynamically calculate the width gap based on items length count
            let totalWidthXaxis = width - (marginRight + marginLeft - 20);
            let widthGap = totalWidthXaxis / (data.length * 2);

            // Create the stacked rectangles
            let mgmts = chart.selectAll('.mgmts')
            .data(data)
            .enter()
            .append('g')
            .attr('transform', (d, i) => `translate(${((widthGap * (((i + 1) * 2) - 1)) + (marginLeft / 2) )}, ${marginBottom})`); // widthGap * (1,3,5,7....) based on items count

            mgmts.selectAll('rect')
            .data(d => d.items)
            .enter()
            .append('rect')
                .attr('width', 50) //x.bandwidth())
                .attr('y', height - (marginBottom + marginTop - 10))
                .attr('height', 0)
                .attr('fill', d => d.color)
                .on('mouseover', d => {

                    //console.log(d3.select(d3.event.target));

                    let rect = d3.select(d3.event.target);
                    let currCol = rect.attr('fill');

                    let xVal = rect.attr('x');
                    let yVal = rect.attr('y');
                    let transVal = rect.attr('transform');

                    d3.select('#fmrChart').select('svg').append('text')
                        .attr('id', 'hoverText')
                        .attr('x', 500)
                        .attr('y', +yVal + 90)
                        //.style("fill", "white") 
                        .style("font-weight", "bold") 
                        .attr('transform', transVal).text(d.val);

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
                .transition()
                    .duration(1500)
                    .delay(10)
                    .attr('y', d => y(d.y1))
                    .attr('height', d => y(d.y0) - y(d.y1))

            // Adding number is legends with their position
            const legends = svg.selectAll('.legend')
                .data(legendTexts.slice())
                .enter()
                .append('g')
                .attr('class', 'legend')
                .attr('transform', (d, i) => { return `translate(${ i * 150 }, ${160})`}); // 150 - gap between two legends ans 160 - y axis value

            // Adding rectangles to the legends created above
            legends.append('rect')
                .attr('x', width / 2 - 100)
                .attr('y', height / 2 + 20)
                .attr('width', 18)
                .attr('height', 18)
                .attr("style", `outline: thin solid black;`)
                .style('fill', (d, i) => legendColors[i]);

            // Adding text to the legends created above
            legends.append('text')
                .attr('x', width / 2 - marginBottom)
                .attr('y', height / 2 + 33)
                .style('font-size', '12px')
                .text(d => d);

            // Adding title for the chart
            svg.append('text')
                .attr('x', width / 2)
                .attr('y', 30)
                .attr('text-anchor', 'middle')
                .style('font-size', '22px')
                .text(title);
        }
        else{
            d3.select('#fmrChart').append('svg')
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
        let itcFinacialMgmtData = null;
        let isDataChanged = false;

        if(nextProps.data && nextProps.data.itcFinacialMgmtData){
            itcFinacialMgmtData = nextProps.data.itcFinacialMgmtData;

            if(!this.props.data){
                isDataChanged = true;
            }
            else if(this.props.data.itcFinacialMgmtData.length !== nextProps.data.itcFinacialMgmtData.length){
                isDataChanged = true;
            }
            else{
                this.props.data.itcFinacialMgmtData.forEach((item, index) => {
                    if(!isDataChanged){
                        if(!isDataChanged && item.series1 !== itcFinacialMgmtData[index].series1)
                            isDataChanged = true;
                        else if(!isDataChanged && item.series2 !== itcFinacialMgmtData[index].series2)
                            isDataChanged = true;
                        else if(!isDataChanged && item.name !== itcFinacialMgmtData[index].name)
                            isDataChanged = true;
                    }
                });
            } 
        }

        if(isDataChanged)
            this.drawStackedChart(itcFinacialMgmtData, nextProps.width, nextProps.height);
    }

    componentDidMount(){
        let itcFinacialMgmtData = null;

        if(this.props.data && this.props.data.itcFinacialMgmtData)
            itcFinacialMgmtData = this.props.data.itcFinacialMgmtData;

        this.drawStackedChart(itcFinacialMgmtData, this.props.width, this.props.height);
    }

    render(){
        return null;
      }
}

export default FMRChart;