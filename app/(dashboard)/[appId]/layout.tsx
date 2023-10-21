import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"

import prismadb from "@/lib/prismadb"
// import Navbar from "@/components/navbar"
import SideMenu from "@/components/SideMenu/SideMenu"

export default async function DashboardLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: { appId: string }
}) {
    const { userId } = auth()

    if (!userId) {
        redirect('/sign-in')
    }

    const app = await prismadb.application.findFirst({
        where: {
            id: params.appId,
        }
    })

    if (!app) {
        redirect("/")
    }

    return (
        <>
            {/* <Navbar /> */}
            <SideMenu />
            {children}
        </>
    )
}