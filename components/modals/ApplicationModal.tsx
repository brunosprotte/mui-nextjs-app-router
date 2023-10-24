import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import useStoreModal from '@/hooks/use-store-modal';
import FormTextField from '../form-components/Input/FormTextField';

const formSchema = z.object({
    name: z.string().min(1),
});

function FormDialog() {
    const storeModal = useStoreModal();
    const [loading, setLoading] = useState(false);

    const {
        handleSubmit, control, 
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);

            const response = await axios.post('/api/applications', values);
      
            window.location.assign(`/${response.data.id}`);
        } catch (error) {
            // console.log('Something went wrong!');
            // toast.error("Something went wrong!")
        } finally{
            setLoading(false);
        }
    };

    return (
        <div>

            <Dialog 
                open={storeModal.isOpen} 
                onClose={storeModal.onClose} 
                disableEscapeKeyDown
                fullWidth
            >
                <DialogTitle>Create application</DialogTitle>
                <DialogContent>
                    <DialogContentText padding={1}>
                        Add an Application to manage
                    </DialogContentText>
                    <FormTextField
                        name='name'
                        control={control}
                        disabled={loading}
                        label='Application name'
                        rest={{ autoFocus: true }}
                    />

          
                </DialogContent>
                <DialogActions>
                    <Button onClick={storeModal.onClose} variant='outlined' color='error'>Cancel</Button>
                    <Button onClick={handleSubmit(onSubmit)} variant='contained'>Continue</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;