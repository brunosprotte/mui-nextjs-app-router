import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

import SideMenu from "@/components/SideMenu";
import Navbar from "@/components/AppBar";
import { ReactNode } from "react";
import { Box } from "@mui/material";

export default async function DashboardLayout({
    children,
    params
}: {
    children: ReactNode,
    params: { appId: string }
}) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const app = await prismadb.application.findFirst({
        where: {
            id: params.appId,
        }
    });

    if (!app) {
        redirect("/");
    }

    return (
        <Box  display={'flex'}>
            <Navbar />
            <SideMenu />
            <Box margin={4} marginTop={10} height={'100%'} width={'100%'}>
                {children}
            </Box>
            
        </Box>
    );
}