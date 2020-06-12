import React, { useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts/modules/drilldown';
import './App.css';
import About from './About'

drilldown(Highcharts);

function Projects() {
  const [display, setDisplay] = useState(false);

  const handleDisplayAboutMe = () => {
    setDisplay(false);
  };
  const handleHideAboutMe = () => {
    setDisplay(true);
  };
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
          data: [['Portfolio',1],['TeslaApp',1]]
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
      <div className="footer">
      {/* <Link to="/main">
                    <p>main</p>
                  </Link> */}
      <button  onClick={!display ? handleHideAboutMe : handleDisplayAboutMe}>
          {" "}
          <h1>about me</h1>{" "}
        </button>
        {display ? (
          <div>
            <About />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Projects;
