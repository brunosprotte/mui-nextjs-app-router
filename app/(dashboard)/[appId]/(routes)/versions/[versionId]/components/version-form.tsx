"use client";
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Heading from "@/components/Heading";
import Separator from "@/components/Separator";
import { Box, Button, Paper } from "@mui/material";
import { Service, Version } from '@prisma/client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FormTextField from '@/components/form-components/Input/FormTextField';
import FormDropdown, { DropdownOptions } from '@/components/form-components/Dropdown/FormDropdown';

const formSchema = z.object({
    version: z.string().min(1).default(""),
    serviceId: z.string().min(1).default(""),
    migrations: z.object({ id: z.string() }).array()
});

type VersionFormValues = z.infer<typeof formSchema>;

type VersionFormProps = {
    initialData: Version | null
    services: DropdownOptions[]
}

export const VersionForm: React.FC<VersionFormProps> = ({
    initialData,
    services,

}) => {


    const params = useParams();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const title = initialData ? "Edit version" : "Create version";
    const description = initialData ? "Edit version" : "Add a new version";
    const toastMessage = initialData ? "Version updated" : "Version created";
    const action = initialData ? "Save changes" : "Create";

    const {
        handleSubmit, reset, control, setValue 
    } = useForm<VersionFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
            ? initialData
            : {
                version: '',
                serviceId: '',
            }, 
    });

    return (

        <>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            >
                <Heading title={title} description={description} />

                {/* {initialData && ( */}
                <Button
                    disabled={loading || !initialData}
                    variant='outlined'
                    color='error'
                    onClick={() => setOpen(true)}
                    size='small'
                >
                    <DeleteIcon sx={{ height: '1rem', width: '1rem' }} />
                </Button>
                {/* )}  */}
            </Box>

            <Separator />
            
            <Box sx={{
                marginTop: '2rem',
                marginBottom: '2rem',
                width: '100%'
            }}
            >

                <FormDropdown
                    name="serviceId"
                    control={control}
                    label="Service"
                    options={services}
                />

                <FormTextField
                    name='version'
                    control={control}
                    disabled={loading}
                    label='Version'
                />

            </Box>
        
        </>

    );
};
 
export default VersionForm;