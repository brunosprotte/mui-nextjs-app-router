import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod';

const formSchema = z.object({
    name: z.string().min(1),
})

function FormDialog() {
  const storeModal = useStoreModal();
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
          name: ""
      }
  })

  // const handleClose =(event, reason) => {
  //   if (reason && reason == "backdropClick") {
  //       return;
  //   }
  //   setOpen(false);
  // };

  return (
    <div>

      <Dialog 
        open={storeModal.isOpen} 
        onClose={storeModal.onClose} 
        disableEscapeKeyDown
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={storeModal.onClose}>Cancel</Button>
          <Button onClick={storeModal.onClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog