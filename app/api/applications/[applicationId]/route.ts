import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"

import prismadb from "@/lib/prismadb";

export async function PATCH (req: Request, { params }: {params: {applicationId: string}}) {
    try {
        const { userId } = auth()
        const body = await req.json();
        const {name} = body

        if (!userId) {
            return new NextResponse("Unauthenticated", {status: 401 })   
        }

        if (!name) {
            return new NextResponse("Name is required", {status: 400 })
        }

        if (!params.applicationId) {
            return new NextResponse("Application is required", {status: 400 })
        }

        const application = await prismadb.application.updateMany({
            where:{
                id: params.applicationId
            },
            data:{
                name
            }
        })

        return NextResponse.json(application)

    } catch (error) {
        console.log('[APPLICATION_PATCH]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}

export async function DELETE (req: Request, { params }: {params: {applicationId: string}}) {
    try {
        const { userId } = auth()

        if (!userId) {
            return new NextResponse("Unauthenticated", {status: 401 })   
        }

        if (!params.applicationId) {
            return new NextResponse("Store is required", {status: 400 })
        }

        const application = await prismadb.application.deleteMany({
            where:{
                id: params.applicationId
            },
        })

        return NextResponse.json(application)
    } catch (error) {
        console.log('[APPLICATION_DELETE]', error)
        return new NextResponse("Internal error", { status: 500 })
    }
}