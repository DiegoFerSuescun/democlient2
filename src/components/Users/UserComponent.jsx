import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//data
import { dataUsers } from '../../data/userData';
//style
import './UserComponent.css';

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
  Spa,
} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
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

export default function UserComponent() {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  //Paginacion
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }; 
  const totalPages = Math.ceil(dataUsers.length / rowsPerPage);

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
      </div>

      <div className="contentFilters" style={{ display: 'flex', justifyContent: 'right', alignItems: 'right', padding: '10px', gap: '15px', marginBottom:'20px' }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            textTransform: 'none',
            height: "30px",
            width: "120px"
          }}
          onClick={() => navigate('/createuser')}
        >
          Add New
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
                    textAlign: 'center',
                    width: '25%',
                    height: "35px"
                  }}
                >
                  Email
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
                  Joning Date
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
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontSize: '12px', padding: '4px 28px', height: "10px" }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar sx={{ bgcolor: '#1976d2' }}>{row.name.charAt(0)}</Avatar>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="body2" sx={{ fontSize: '15px'}}>
                            {row.name}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ fontSize: '12px', padding: '4px 8px', height: "10px",textAlign: 'center', }}>{row.email}</TableCell>
                    <TableCell sx={{ fontSize: '12px', padding: '4px 8px', height: "10px", textAlign: 'center', }}>{row.date}</TableCell>
                    <TableCell 
                      sx={{ fontSize: '12px', padding: '4px 8px', height: "10px", textAlign: 'center'}}
                    >
                      {row.status ? (
                        <span style={{backgroundColor: 'green', color: 'white', fontWeight: 'bold', borderRadius: '5px', width: '60px', display: 'inline-block', height: "20px" }}>ACTIVO</span>
                      )  : (
                        <span style={{backgroundColor: 'gray', color: 'black', fontWeight: 'bold', borderRadius: '5px', width: '65px', display: 'inline-block', height: "20px" }}>
                          INACTIVO
                        </span>
                      )}
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
  )
}
