import React from 'react'
import ReactECharts from 'echarts-for-react'

const LineChart = ({
    title,
    titleAlign,
    titleSize,
    chartHeight,
    xAxisData,
    seriesData,
    theme,
    bgClear,
}) => {
    const options = {
        tooltip: {
            trigger: 'axis',
        },
        title: {
            left: titleAlign,
            text: title,
            textStyle: {
                fontSize: titleSize,
            },
        },
        grid: {
            // top: '4%',
            left: 12,
            right: '3%',
            bottom: 8,
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisData,
        },
        yAxis: {
            type: 'value',
            // splitNumber: 10,
        },
        series: seriesData,
    }

    //set chart background color to transparent if bgClear prop set to true
    if (bgClear) {
        options.backgroundColor = 'transparent'
    }

    const style = {
        height: chartHeight,
        width: '100%',
    }

    return <ReactECharts option={options} theme={theme} style={style} />
}

// Set default prop values
LineChart.defaultProps = {
    title: 'Chart Title',
    titleAlign: 'left',
    titleSize: 16,
    chartHeight: 250,
    xAxisData: null,
    seriesData: null,
    theme: 'light',
    bgClear: false,
}

export default LineChart
