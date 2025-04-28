import { Grid, Stack } from '@mui/material';
import {
  BarChart,
  Gauge,
  gaugeClasses,
  LineChart,
  PieChart,
} from '@mui/x-charts';
import ChartCard from './components/ChartCard';
import { getGaugeColor } from './helpers';
import { CHART_DATA, GAUGE_DATA } from './data';

export default function Analytics() {
  const gridSize = { xs: 12, lg: 6 };

  return (
    <Grid container spacing={2}>
      <Grid size={gridSize}>
        <ChartCard title='Quarterly Sales'>
          <BarChart
            dataset={CHART_DATA}
            xAxis={[
              {
                scaleType: 'band',
                dataKey: 'quarter',
              },
            ]}
            yAxis={[{ id: 'sales', scaleType: 'linear', width: 50 }]}
            series={[
              {
                dataKey: 'usa',
                label: 'USA',
              },
              {
                dataKey: 'canada',
                label: 'Canada',
              },
              {
                dataKey: 'uk',
                label: 'UK',
              },
            ]}
            height={300}
            borderRadius={5}
          />
        </ChartCard>
      </Grid>
      <Grid size={gridSize}>
        <ChartCard title='Sale Trends'>
          <LineChart
            dataset={CHART_DATA}
            xAxis={[{ scaleType: 'point', dataKey: 'quarter' }]}
            yAxis={[{ id: 'sales', scaleType: 'linear', width: 50 }]}
            series={[
              {
                dataKey: 'usa',
                label: 'USA',
              },
              {
                dataKey: 'canada',
                label: 'Canada',
              },
              {
                dataKey: 'uk',
                label: 'UK',
              },
            ]}
            height={300}
          />
        </ChartCard>
      </Grid>
      <Grid size={gridSize}>
        <ChartCard title='Sale Market Share'>
          <PieChart
            dataset={CHART_DATA}
            series={[
              {
                data: [
                  {
                    label: 'USA',
                    value: CHART_DATA.reduce((sum, row) => sum + row.usa, 0),
                  },
                  {
                    label: 'Canada',
                    value: CHART_DATA.reduce((sum, row) => sum + row.canada, 0),
                  },
                  {
                    label: 'UK',
                    value: CHART_DATA.reduce((sum, row) => sum + row.uk, 0),
                  },
                ],
              },
            ]}
            height={300}
          />
        </ChartCard>
      </Grid>
      <Grid size={gridSize}>
        <ChartCard title='Customer Satisfaction'>
          <Stack direction='row' spacing={2} sx={{ height: 300 }}>
            {Object.entries(GAUGE_DATA).map(([key, value]) => (
              <Gauge
                key={key}
                value={value}
                text={() => `${key.toUpperCase()}\n${value}%`}
                sx={{
                  [`& .${gaugeClasses.valueArc}`]: {
                    fill: getGaugeColor(value),
                  },
                }}
              />
            ))}
          </Stack>
        </ChartCard>
      </Grid>
    </Grid>
  );
}
