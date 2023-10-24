import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import  prismadb from "@/lib/prismadb";
import { ReactNode } from "react";


export default async function SetupLayout({
    children
}: {
    children: ReactNode
}) {
    const { userId } = auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const app = await prismadb.application.findFirst();

    if (app) {
        redirect(`/${app.id}`);
    }

    return (
        
        { children }
        
    );
}