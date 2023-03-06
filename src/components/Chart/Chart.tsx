import "./Chart.css";

import ChartBar from "./ChartBar";

interface dataPoint {
    value: number;
    label: string;

}

interface ChartProps {
    dataPoints: dataPoint[]
}

const Chart = ({dataPoints}: ChartProps) => {

    const totalMaximum = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

    return <div className={"chart"}>

        {dataPoints.map(dataPoint => {
            return <ChartBar
                key={dataPoint.label}
                label={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}/>

        })}
    </div>;
}

export default Chart;