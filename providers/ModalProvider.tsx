"use client"

import { useEffect, useState} from 'react'

import  FormDialog  from '@/components/modals/ApplicationModal';


export const ModalProvider = ()=> {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if(!isMounted) {
        return null
    }

    return (
        <>
            <FormDialog />
        </>
    )
}