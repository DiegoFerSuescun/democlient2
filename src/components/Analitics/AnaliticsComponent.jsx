import React from 'react';

//Styles
import { Box, Typography } from '@mui/material';
import { LineChart, PieChart, BarChart, ScatterChart  } from '@mui/x-charts';

//DATA para grafico de frecuencias 
const frequencyData = [
  { x: '0', y: 5 },
  { x: '1', y: 12 },
  { x: '2', y: 8 },
  { x: '3', y: 15 },
  { x: '4', y: 18 },
  { x: '5', y: 10 },
  { x: '6', y: 20 },
  { x: '7', y: 15 },
  { x: '8', y: 7 },
  { x: '9', y: 2 },
  { x: '10', y: 4 },
  { x: '11', y: 9 },
  { x: '12', y: 16 },
];

//DATA para grafico de torta 
const pieData = [
  { id: 'Customers', value: 50, color: 'royalblue' },
  { id: 'Active', value: 30, color: 'yellow' },
  { id: 'Disabled', value: 20, color: 'lightblue' },
];

//DATA para grafico de barras
const barData = [
  { month: 'Jan', Customers: 12, Active: 5, Disabled: 2 },
  { month: 'Feb', Customers: 19, Active: 10, Disabled: 3 },
  { month: 'Mar', Customers: 3, Active: 15, Disabled: 4 },
  { month: 'Apr', Customers: 5, Active: 20, Disabled: 5 },
  { month: 'May', Customers: 2, Active: 25, Disabled: 6 },
  { month: 'Jun', Customers: 3, Active: 30, Disabled: 7 },
  { month: 'Jul', Customers: 8, Active: 35, Disabled: 8 },
  { month: 'Aug', Customers: 12, Active: 25, Disabled: 6 },
  { month: 'Sep', Customers: 14, Active: 20, Disabled: 5 },
  { month: 'Oct', Customers: 9, Active: 15, Disabled: 4 },
  { month: 'Nov', Customers: 6, Active: 10, Disabled: 3 },
  { month: 'Dec', Customers: 7, Active: 5, Disabled: 2 },
];
export default function AnaliticsComponent() {
  const maxPoint = frequencyData.reduce((prev, current) => (prev.y > current.y ? prev : current), frequencyData[0]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box sx={{ width: '45%', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
        <Typography variant="h6" sx={{ marginBottom: '3px', fontWeight: 'bold' }}>
          Total Revenue
        </Typography>
          <LineChart
            xAxis={[{ scaleType: 'band', data: frequencyData.map((d) => d.x) }]}
            series={[{ data: frequencyData.map((d) => d.y), color: 'lightblue', area: true }]}
            height={280}
            grid={{ vertical: true, horizontal: true }}
          />
        </Box>

        <Box sx={{ width: '45%', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
          <Typography variant="h6" sx={{ marginBottom: '3px', fontWeight: 'bold' }}>
            Properties in percentage
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
            <PieChart
              series={[{ data: pieData.map(({ id, value, color }) => ({ id, value, color })) }]}
              height={200}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {pieData.map((item) => (
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }} key={item.id}>
                  <Box
                    sx={{
                      width: '25px',
                      height: '20px',
                      backgroundColor: item.color,
                      marginRight: '20px',
                      borderRadius: '50%',
                    }}
                  />
                  <Typography variant="body2">{item.id}: {item.value}%</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '20px',
          width: '90%',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        <BarChart
          xAxis={[
            {
              scaleType: 'band',
              data: barData.map((d) => d.month),
            },
          ]}
          series={[
            { label: 'Customers', data: barData.map((d) => d.Customers), color: 'royalblue' },
            { label: 'Active', data: barData.map((d) => d.Active), color: 'yellow' },
            { label: 'Disabled', data: barData.map((d) => d.Disabled), color: 'lightblue' },
          ]}
          height={300}
        />
      </Box>
    </Box>
  );
}
