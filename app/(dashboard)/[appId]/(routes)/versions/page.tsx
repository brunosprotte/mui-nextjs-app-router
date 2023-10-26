import prismadb from "@/lib/prismadb";
import { Box, Paper } from "@mui/material";

import { VersionColumns } from "./components/columns";
import { format } from 'date-fns';
import VersionClient from "./components/version-client";
import clientLogger from "@/lib/clientLogger";

const VersionsPage = async ({
    params
}: {
    params: { appId: string}
}) => {

    clientLogger.info(__filename, "Versions page called");

    const versions = await prismadb.service.findMany({
        where: {
            applicationId: params.appId
        },
        include: {
            versions: {
                orderBy:{
                    createdAt: 'desc'
                },
                take: 1
            }
        },
        orderBy: [
            { name: 'asc' },
            { createdAt: 'desc' }
        ]
    });

    const formattedVersions: VersionColumns[] = versions.map((item) => ({
        id: item.id,
        isReleased: item.versions[0].isReleased,
        serviceName: item.name,
        version: item.versions[0].version,
        createdAt: format(item.createdAt, "DD MMMM, yyyy"),
    }));

    return ( 
        
        <Paper sx={{
            flexDirection: 'column',
        }}>

            <Box sx={{
                flex: '1 1 0%',
                padding: '2rem',
                paddingTop: '1.5rem',
                marginTop: '1rem',
                marginBottom: '1rem'
            }}>
                <VersionClient data={formattedVersions}/>
            </Box>
        </Paper>
    );
};
 
export default VersionsPage;