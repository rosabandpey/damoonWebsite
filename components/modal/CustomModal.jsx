import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height:'95%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 20,
  p: 4,
};

export default function CustomModal(props) {
  

  return (
      <div>

      
      {props.open && 
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            
          {props.children}
          </Box>
        </Modal>
    
      }
    </div>
  );
}