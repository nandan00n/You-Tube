import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// import axios from 'axios';
import { CardActions } from '@mui/material';
// const url = "/database/db.json"

const style = {
  position: 'absolute',
  borderRadius: '10px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #2884b8',
  padding: '5px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ data }) {
  const [open, setOpen] = useState(false);

  // const id = data.id;
  // console.log(id)

  const [policy, setPolicy] = useState({
    Policy_id: '',
    Date_of_Purchase: '',
    Customer_id: '',
    Fuel: '',
    VEHICLE_SEGMENT: '',
    Premium: '',
    collision: '',
    comprehensive: '',
    Customer_Gender: '',
    Customer_Region: '',
    Customer_Marital_status: ''
  })

  const {
    Policy_id,
    Date_of_Purchase,
    Customer_id,
    Fuel,
    VEHICLE_SEGMENT,
    Premium,
    collision,
    comprehensive,
    Customer_Gender,
    Customer_Region,
    Customer_Marital_status
  } = { ...data };

  const handleChange = (e) => {
    setPolicy({ ...policy, [e.target.name]: e.target.defaultValue });
  }

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.put(`${url}+/${data.id}`, ...data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}
          component="form"
          noValidate
          autoComplete="off"
        >
          <div>
            {/* <form 
              onSubmit={e => onSubmit(e)}
            > */}
              <TextField sx={{ margin:'0.5vw' }}
                required
                id="outlined"
                label="Policy id"
                type="number"
                name='Policy_id'
                defaultValue={Policy_id}
                onChange={e => handleChange(e)}
              />
              <TextField sx={{ margin:'0.5vw' }}
                disabled
                id="outlined-disabled"
                label="Date of Purchase"
                name='Date_of_Purchase'
                defaultValue={Date_of_Purchase}
                onChange={e => handleChange(e)}
              />
              <TextField sx={{ margin:'0.5vw' }}
                id="outlined-password-input"
                label="Customer id"
                type="number"
                name='Customer_id'
                defaultValue={Customer_id}
                onChange={e => handleChange(e)}
              />
              <TextField sx={{ margin:'0.5vw' }}
                id="outlined-read-only-input"
                label="Fuel"
                name='Fuel'
                defaultValue={Fuel}
                type="text"
                onChange={e => handleChange(e)}
              />
              <TextField sx={{ margin:'0.5vw' }}
                id="outlined-number"
                label="VEHICLESEGMENT"
                name='VEHICLE_SEGMENT'
                defaultValue={VEHICLE_SEGMENT}
                type="text"
                onChange={e => handleChange(e)}
              />
              <TextField sx={{ margin:'0.5vw' }}
                id="outlined"
                error
                label="Premium"
                defaultValue={Premium}
                helperText="Should not be greater than 1M"
                name='Premium'
                onChange={e => handleChange(e)}
                type="number" />

              <TextField sx={{ margin:'0.5vw' }}
                id="outlined"
                label="collisioon"
                defaultValue={collision}
                type="number"
                name='collision'
                onChange={e => handleChange(e)}
              />

              <TextField sx={{ margin:'0.5vw' }}
                id="outlined"
                label="comprehensiv"
                defaultValue={comprehensive}
                type="number"
                name='comprehensive'
                onChange={e => handleChange(e)}
              />

              <TextField sx={{ margin:'0.5vw' }}
                id="outlined"
                label="Customer Gender"
                defaultValue={Customer_Gender}
                name='Customer_Gender'
                type="text"
                onChange={e => handleChange(e)}
              />

              <TextField sx={{ margin:'0.5vw' }}
                id="outlined"
                label="Customer Region"
                defaultValue={Customer_Region}
                name='Customer_Region'
                onChange={e => handleChange(e)}
              />

              <TextField sx={{ margin:'0.5vw' }}
                id="outlined"
                label="Customer Marital status"
                defaultValue={Customer_Marital_status}
                name='Customer_Marital_status'
                type="number"
                onChange={e => handleChange(e)}
              />

              <Button disabled variant='contained' type='submit' size="small"
                sx={{ backgroundColor: 'Green', margin: "4vh -1vw 0vh 1vw" }}>Update</Button>
              <Button variant='contained' type='submit' size="small"
                onClick={() => setOpen(!open)}
                sx={{ backgroundColor: 'red', margin: "4vh -1vw 0vh 2vw" }}>Cancel</Button>
            {/* </form> */}
          </div>
        </Box>
      </Modal>
      <CardActions>
        <Button onClick={() => setOpen(!open)} variant='contained' sx={{ color: "White" }}>Edit</Button>
      </CardActions>
    </div>
  );
}