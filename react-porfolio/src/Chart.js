import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './App.css';


function Chart() {

  const options = {
    series: [
      {
        name:'Profit',
        type:'pie',
        data: [100,200,30,100,30,50,100]
      }
    ]
  };
  return (
    <div>
      <div className="container">
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </div>
    </div>
  );
}

export default Chart;
