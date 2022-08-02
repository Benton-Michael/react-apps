import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({width, height}) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
     
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      // tooltip must be lowercase. Previously toolTip was used and no tooltip displayed in app
      tooltip={{ enable: true}}
      legendSettings={{ background: 'white' }}
    >
      <Inject 
        services={[Legend, Category, StackingColumnSeries, Tooltip]}
      />
      <SeriesCollectionDirective>
       {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item,index) => <SeriesDirective key={index} {...item} />)}

      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked