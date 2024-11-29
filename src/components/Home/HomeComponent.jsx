import React, { useState } from 'react';

//data
import { dataHome } from '../../data/homedata';
//style
import './HomeComponent.css';

import {
  Box,
  InputBase,
  IconButton,
  Avatar,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper
} from '@mui/material';

import {
  Search as SearchIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  FilterList,
  FileDownload,
} from '@mui/icons-material';

import Pagination from '@mui/material/Pagination';

//Componenete de paginacion manual

const CustomPagination = ({ count, page, handleChangePage }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginLeft: "15px" }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          variant="outlined"
          onClick={() => handleChangePage(null, page - 1)}
          disabled={page === 0}
        >
          Previous
        </Button>
      </Box>
      <Pagination
        count={count}
        page={page + 1}
        onChange={handleChangePage}
        color="secondary"
        sx={{ flexGrow: 1, justifyContent: 'center', marginLeft: '30%' }}
        showFirstButton={false}
        showLastButton={false} 
        hidePrevButton  
        hideNextButton  
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {/* Custom Next Button */}
        <Button
          variant="outlined"
          onClick={() => handleChangePage(null, page + 1)}
          disabled={page === count - 1}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default function HomeComponent() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  //Paginacion
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }; 
  const totalPages = Math.ceil(dataHome.length / rowsPerPage);

  return (
    <div>
      <div className="ContenSearchBar" style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f1f1f1',
            borderRadius: '20px',
            padding: '5px 10px',
            width: '50%',
            marginRight: '20px',
          }}
        >
          <SearchIcon sx={{ color: '#888' }} />
          <InputBase
            placeholder="Search…"
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginLeft: '3%' }}>
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '20%' }}>
            <Avatar sx={{ bgcolor: '#1976d2' }}>A</Avatar>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="body2" sx={{ fontSize: '13px', fontWeight: 'bold' }}>
                Diego Suescun
              </Typography>
              <Typography variant="caption" sx={{ fontSize: '12px', color: 'text.secondary' }}>
                diegoSuescun@email.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>

      <div className="contentFilters" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', gap: '15px' }}>
        <Typography variant="body2">Showing:</Typography>
          <Box sx={{ minWidth: 80 }}>
            <select
              style={{
                padding: '5px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              {[5, 10, 15, 20].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </Box>
        <Button
          variant="contained"
          startIcon={<FilterList />}
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            textTransform: 'none',
            height: "23px",
            width: "80px"
          }}
        >
          Filter
        </Button>
        <Button
          variant="contained"
          startIcon={<FileDownload />}
          sx={{
            backgroundColor: '#4caf50',
            color: '#fff',
            textTransform: 'none',
            height: "23px",
            width: "80px"
          }}
        >
          Export
        </Button>
      </div>

      <div className="contentTable">
        <TableContainer component={Paper} style={{ borderRadius: "30px", width: "150vh" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: '15px',
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '25%',
                    height: "35px"
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '15px',
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    width: '25%',
                    textAlign: 'center',
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '15px',
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '25%',
                  }}
                >
                  Number
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: '15px',
                    padding: '4px 8px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Registration
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataHome
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontSize: '12px', padding: '4px 28px', height: "10px" }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar sx={{ bgcolor: '#1976d2' }}>{row.name.charAt(0)}</Avatar>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 'bold' }}>
                            {row.name}
                          </Typography>
                          <Typography variant="caption" sx={{ fontSize: '10px', color: 'text.secondary' }}>
                            {row.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontSize: '12px', padding: '4px 8px', height: "10px",textAlign: 'center', }}>{row.date}</TableCell>
                    <TableCell sx={{ fontSize: '12px', padding: '4px 8px', height: "10px", textAlign: 'center', }}>
                      {row.number?.slice(0, -4).replace(/./g, '*') + row.number.slice(-4)}
                    </TableCell>
                    <TableCell sx={{ fontSize: '12px', padding: '4px 8px', height: "10px", textAlign: 'center', }}>
                      {row.registration.slice(0, -4).replace(/./g, '*') + row.registration.slice(-4)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TableFooter>
          <TableRow>
            <TableCell colSpan={4} sx={{ padding: '10px', textAlign: 'center', width: "1000px" }}>
              <CustomPagination
                count={totalPages}
                page={page}
                handleChangePage={handleChangePage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
        </TableContainer>
        
      </div>
    </div>
  );
}
