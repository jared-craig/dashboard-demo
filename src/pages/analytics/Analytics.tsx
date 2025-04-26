import { Grid } from '@mui/material';
import { BarChart, LineChart } from '@mui/x-charts';
import ChartCard from './components/ChartCard';

export default function Analytics() {
  const gridSize = { xs: 12, lg: 6 };

  return (
    <Grid container spacing={2}>
      <Grid size={gridSize}>
        <ChartCard title='Sales by Region and Quarter'>
          <BarChart
            xAxis={[
              {
                id: 'region',
                scaleType: 'band',
                data: ['USA', 'Canada', 'UK'],
              },
            ]}
            yAxis={[{ id: 'sales', scaleType: 'linear', width: 50 }]}
            series={[
              {
                label: 'Product A',
                data: [2345, 8765, 4321],
                stack: 'Q1',
                color: '#14b8a6',
              },
              {
                label: 'Product B',
                data: [5678, 3456, 7890],
                stack: 'Q1',
                color: '#f59e42',
              },
              {
                label: 'Product A',
                data: [6543, 2100, 9999],
                stack: 'Q2',
                color: '#14b8a6',
              },
              {
                label: 'Product B',
                data: [8888, 1234, 4567],
                stack: 'Q2',
                color: '#f59e42',
              },
              {
                label: 'Product A',
                data: [3456, 7891, 2345],
                stack: 'Q3',
                color: '#14b8a6',
              },
              {
                label: 'Product B',
                data: [6789, 4321, 8765],
                stack: 'Q3',
                color: '#f59e42',
              },
              {
                label: 'Product A',
                data: [1234, 5678, 3456],
                stack: 'Q4',
                color: '#14b8a6',
              },
              {
                label: 'Product B',
                data: [4321, 8765, 2100],
                stack: 'Q4',
                color: '#f59e42',
              },
            ]}
            height={300}
            borderRadius={5}
            hideLegend
            slotProps={{
              tooltip: {
                trigger: 'item',
              },
            }}
          />
        </ChartCard>
      </Grid>
      <Grid size={gridSize}>
        <ChartCard title='Line Chart Example 2'>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [1, 2, 5, 7, 10, 12],
              },
              {
                data: [3, 4, 6, 8, 9, 11],
              },
            ]}
            height={300}
          />
        </ChartCard>
      </Grid>
      <Grid size={gridSize}>
        <ChartCard title='Line Chart Example 3'>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [1, 2, 3, 4, 5, 6],
              },
              {
                data: [3, 4, 6, 8, 9, 11],
              },
            ]}
            height={300}
          />
        </ChartCard>
      </Grid>
      <Grid size={gridSize}>
        <ChartCard title='Line Chart Example 4'>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [1, 2, 3, 4, 5, 6],
              },
              {
                data: [3, 4, 6, 8, 9, 11],
              },
            ]}
            height={300}
          />
        </ChartCard>
      </Grid>
    </Grid>
  );
}
