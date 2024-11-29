import React from 'react';
//style
import {
  Box,
  InputBase,
  IconButton,
  Avatar,
  Typography,
  Button,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';
import './CreateComponent.css'

export default function CreateComponent() {
  return (
    <div >
      <div className='ContentSearch'>
        <Typography variant="body2" sx={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'left' }}>
            Add New User
        </Typography>
      </div>
      <div className='ContentBody'>
      {/* contenedor del avatar */}
          <div className='Contentavatar'>
              <Avatar sx={{ bgcolor: '#1976d2', height: '20vh', width: '20vh' }}>D</Avatar>
              <Button
                variant="contained"
                component = 'label'
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  textTransform: 'none',
                  height: "30px",
                  width: "120px"
                }}
              >
                Upload New
                <input
                  hidden
                  type="file"
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      console.log("Archivo seleccionado:", e.target.files[0].name);
                    }
                  }}
                />
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'gray',
                  color: 'black',
                  textTransform: 'none',
                  height: "30px",
                  width: "150px"
                }}
              >
                Delete Avatar
              </Button>
          </div>
          <div className="ContentForm">
            <div className="FormGroup">
              <span>First Name</span>
              <input type="text" />
            </div>
            <div className="FormGroup">
              <span>Last Name</span>
              <input type="text" />
            </div>
            <div className="FormGroup">
              <span>Email</span>
              <input type="text" />
            </div>
            <div className="FormGroup">
              <span>Phone Number</span>
              <input type="text" />
            </div>
            <div className="FormGroup">
              <span>Gender</span>
              <RadioGroup row defaultValue="male" name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Male" className="RadioOption" sx={{marginRight: '5vh', marginLeft: '3vh', height: '3px'}}/>
                <FormControlLabel value="female" control={<Radio />} label="Female"  className="RadioOption" sx={{height: '3px'}}/>
              </RadioGroup>
            </div>
            <div className="FormGroup">
              <span>Registration</span>
              <input type="text" />
            </div>
            <div className="FormGroup">
              <span>Address</span>
              <input type="text" />
            </div>
            <div className="FormGroup">
              <span>Password</span>
              <input type="password" />
            </div>

          </div>
          <div style={{textAlign: 'right', marginRight: '10vh'}}>
              <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      textTransform: 'none',
                      height: "5vh",
                      width: "20vh"
                    }}
              >
                Save
              </Button>
          </div>
      </div>

    </div>
  )
}
