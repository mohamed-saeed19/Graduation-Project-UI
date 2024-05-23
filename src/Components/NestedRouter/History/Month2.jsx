
import * as React from 'react';
import { useEffect } from 'react';
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

export let Angry = [
  { x: 'May', y: 27, fill: '#FF2414', toolTipMappingName: 'May' },
  { x: 'Jun', y: 27, fill: '#FF2414', toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 27, fill: '#FF2414', toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 27, fill: '#FF2414', toolTipMappingName: 'Aug' },
  
];
export let Sad = [
  { x: 'May', y: 18, fill: '#0057AE', toolTipMappingName: 'May' },
  { x: 'Jun', y: 18, fill: '#0057AE', toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 18, fill: '#0057AE', toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 18, fill: '#0057AE', toolTipMappingName: 'Aug' },
  
];
export let Happy = [
  { x: 'May', y: 40,fill:'#FFEB00', toolTipMappingName: 'May' },
  { x: 'Jun', y: 40,fill:'#FFEB00', toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 40,fill:'#FFEB00', toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 40,fill:'#FFEB00', toolTipMappingName: 'Aug' },
 
];
export let Natural = [
  { x: 'May', y: 10,fill: " #CFD8DC", toolTipMappingName: 'May' },
  { x: 'Jun', y: 10,fill: " #CFD8DC", toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 10,fill: " #CFD8DC", toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 10,fill: " #CFD8DC", toolTipMappingName: 'Aug' },
  
];
export let Calm = [
  { x: 'May', y: 35,fill: " #00BEFF", toolTipMappingName: 'May' },
  { x: 'Jun', y: 35,fill: " #00BEFF", toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 35,fill: " #00BEFF", toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 35,fill: " #00BEFF", toolTipMappingName: 'Aug' },
  
];
export let Fear = [
  { x: 'May', y: 20,fill: "  #B7043C", toolTipMappingName: 'May' },
  { x: 'Jun', y: 20,fill: "  #B7043C", toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 20,fill: "  #B7043C", toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 20,fill: "  #B7043C", toolTipMappingName: 'Aug' },
  
];
export let Disgusted = [
  { x: 'May', y: 32,fill: "  #A1E533", toolTipMappingName: 'May' },
  { x: 'Jun', y: 32,fill: "  #A1E533", toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 32,fill: "  #A1E533", toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 32,fill: "  #A1E533", toolTipMappingName: 'Aug' },

];
export let Surprised = [
  { x: 'May', y: 27,fill: "  #FF6900",  toolTipMappingName: 'May' },
  { x: 'Jun', y: 8, fill: "  #FF6900", toolTipMappingName: 'Jun' },
  { x: 'Jul', y: 19,fill: "  #FF6900",  toolTipMappingName: 'Jul' },
  { x: 'Aug', y: 17,fill: "  #FF6900",  toolTipMappingName: 'Aug' },
  
];

const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const Month2 = () => {
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
      args.chart.series[0].marker.dataLabel.font.color = '#000000';
      args.chart.series[1].marker.dataLabel.font.color = '#000000';
      args.chart.series[2].marker.dataLabel.font.color = '#000000';
      args.chart.series[3].marker.dataLabel.font.color = '#000000';
      args.chart.series[4].marker.dataLabel.font.color = '#000000';
      args.chart.series[5].marker.dataLabel.font.color = '#000000';
      args.chart.series[6].marker.dataLabel.font.color = '#000000';
      args.chart.series[7].marker.dataLabel.font.color = '#000000';
    }
  };
  return (
    <div className="control-pane  ">
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

            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <div className='text-center mt-5'>
    <Link to="/homepage/history/year"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn  px-3 mx-2' > 1</button></Link>
    <Link to=""><button style={{background:" #F85899",color:"white"}} className='btn px-3 mx-2'> 2</button></Link>
    <Link to="/homepage/history/year/month3"><button style={{background:" rgb(243, 223, 227)",color:"black"}} className='btn px-3 mx-2'> 3</button></Link>
  </div>   
    </div>
  );
};
export default Month2;


