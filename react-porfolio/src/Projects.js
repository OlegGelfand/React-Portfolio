import React from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';
import './App.css';

drilldown(Highcharts);

function Projects() {

  const options = {
    chart: 
    {
      type:'pie',
      backgroundColor: '#000',

    },
   
      title: {
        text: 'My Projects'
      },
      xAxis: {
        type: 'category'
      },

      legend: {
        enabled: true,
      },
    series: [
      {
        name:'Software',
        colorByPoint:true,
        data:[
          {
            name: 'React',
            y:1,
            drilldown:'react',
          },
          {
            name: 'VanillaJs',
            y:1,
            drilldown:'vanillajs',
          },{
            name: 'Python',
            y:1,
            drilldown:'python',
          },

        ]
      }
    ],
    drilldown:{
      series:[
        {
          id:'react',
          data: [['Portfolio',4],['TeslaApp',2]]
        }, {
          id:'python',
          data: [['not sure yet',4],['ill add something soon',2],['something will be here soon',1] ]
        }, {
          id:'vanillajs',
          data: [['',4],['to do list',2],['Ford',1],['Chevy',1] ]
        },

      ]
    }
   
    
  };
  return (
    <div>
      <div className="container">
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </div>
    </div>
  );
}

export default Projects;
