
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
  Highlight,
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import loading from "../../../image/loading.json"
import PropTypes from 'prop-types';



export let Angry = [];
export let Natural = [];
export let Happy = [];
export let Sad = [];
export let Disgusted = [];
export let Fear = [];
export let Surprised = [];
export let Calm = [];








export default function Month1({year}) {
  // if (!year || !year.Year || !year.Year["January 2024"]) {
  //   return (
  //     <div className='col-md-12 d-flex align-items-center justify-content-center'>
  //       <div>
  //         <Lottie animationData={loading} />
  //       </div>
  //     </div>
  //   );
  // }
  console.log(year)

  Angry = [
    { x: 'Jan', y: 27, fill: '#FF2414', toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 27, fill: '#FF2414', toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 27, fill: '#FF2414', toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 27, fill: '#FF2414', toolTipMappingName: 'Apr' },
  ];
  Sad = [
    { x: 'Jan', y: 18, fill: '#0057AE', toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 18, fill: '#0057AE', toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 18, fill: '#0057AE', toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 18, fill: '#0057AE', toolTipMappingName: 'Apr' },
    
  ];
  Happy = [
    { x: 'Jan', y: 40,fill:'#FFEB00', toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 40,fill:'#FFEB00', toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 40,fill:'#FFEB00', toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 40,fill:'#FFEB00', toolTipMappingName: 'Apr' },
   
  ];
  Natural = [
    { x: 'Jan', y: 10,fill: " #CFD8DC", toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 10,fill: " #CFD8DC", toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 10,fill: " #CFD8DC", toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 10,fill: " #CFD8DC", toolTipMappingName: 'Apr' },
    
  ];
  Calm = [
    { x: 'Jan', y: 35,fill: " #00BEFF", toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 35,fill: " #00BEFF", toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 35,fill: " #00BEFF", toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 35,fill: " #00BEFF", toolTipMappingName: 'Apr' },
    
  ];
  Fear = [
    { x: 'Jan', y: 20,fill: "  #B7043C", toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 20,fill: "  #B7043C", toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 20,fill: "  #B7043C", toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 20,fill: "  #B7043C", toolTipMappingName: 'Apr' },
    
  ];
  Disgusted = [
    { x: 'Jan', y: 32,fill: "  #A1E533", toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 32,fill: "  #A1E533", toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 32,fill: "  #A1E533", toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 32,fill: "  #A1E533", toolTipMappingName: 'Apr' },
  
  ];
  Surprised = [
    { x: 'Jan', y: 27,fill: "  #FF6900",  toolTipMappingName: 'Jan' },
    { x: 'Feb', y: 8, fill: "  #FF6900", toolTipMappingName: 'Feb' },
    { x: 'Mar', y: 19,fill: "  #FF6900",  toolTipMappingName: 'Mar' },
    { x: 'Apr', y: 17,fill: "  #FF6900",  toolTipMappingName: 'Apr' },
    
  ];


  const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;

  const loaded = (args) => {
    let chart = document.getElementById('charts');
    chart.setAttribute('title', '');
  };

  const load = (args) => {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, 'Dark')
      .replace(/contrast/i, 'Contrast');
    if (selectedTheme === 'highcontrast') {
      args.chart.series.forEach(series => {
        series.marker.dataLabel.font.color = '#000000';
      });
    }
  };

  
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: 'center' }}
          legendSettings={{ enableHighlight: true }}
          primaryXAxis={{
            labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
            labelRotation: Browser.isDevice ? -45 : 0,
            valueType: 'Category',
            title: 'Year',
            interval: 1,
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
          }}
          primaryYAxis={{
            title: 'The number of repetitions of emotion',
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            maximum: 50,
            interval: 10,
          }}
          chartArea={{ border: { width: 0 } }}
          load={load.bind(this)}
          tooltip={{
            enable: true,
            header: '<b>${point.tooltip}</b>',
            shared: true,
          }}
          width={Browser.isDevice ? '100%' : '75%'}
          title="Yearly Emotions Analysis"
          loaded={loaded.bind(this)}
        >
          <Inject
            services={[
              ColumnSeries,
              Legend,
              Tooltip,
              Category,
              DataLabel,
              Highlight,
            ]}
          />
          <SeriesCollectionDirective>
  {/* hover values */}
  <SeriesDirective
              dataSource={Angry}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Angry"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={ Sad}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Sad"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Happy}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Happy"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Natural}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Natural"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Calm}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Calm"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Fear}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Fear"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Disgusted}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Disgusted"
              type="Column"
              pointColorMapping='fill'

            />
            <SeriesDirective
              dataSource={Surprised}
              tooltipMappingName="toolTipMappingName"
              xName="x"
              columnSpacing={0.1}
              yName="y"
              name="Surprised"
              type="Column"
              pointColorMapping='fill'

            />          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <div className='text-center mt-5'>
        <Link to="/"><button style={{ background: "#F85899", color: "white" }} className='btn px-3 mx-2'>1</button></Link>
        <Link to="/homepage/history/year/month2"><button style={{ background: "rgb(243, 223, 227)", color: "black" }} className='btn px-3 mx-2'>2</button></Link>
        <Link to="/homepage/history/year/month3"><button style={{ background: "rgb(243, 223, 227)", color: "black" }} className='btn px-3 mx-2'>3</button></Link>
      </div>
    </div>
  );
}

Month1.propTypes = {
  year: PropTypes.object.isRequired,
};
