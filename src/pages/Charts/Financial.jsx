import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, CandleSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, Legend } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader, Header } from '../../components';
import { financialChartData } from '../../data/dummy'; // Import your financial data here

const date1 = new Date('2017, 1, 1');

// Filter data based on the condition
const filteredData = financialChartData.filter(value => value.x >= date1);

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="Chart" title="AAPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={{ valueType: 'DateTime' }}
          primaryYAxis={{ title: 'Price' }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[CandleSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={filteredData}
              xName="x"
              low="low"
              high="high"
              open="open"
              close="close"
              name="Apple Inc"
              type="Candle"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
