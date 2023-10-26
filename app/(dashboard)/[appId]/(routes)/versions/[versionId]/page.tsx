import prismadb from "@/lib/prismadb";
import { VersionForm } from "./components/version-form";
import { Box, Paper } from "@mui/material";
import clientLogger from "@/lib/clientLogger";

const VersionPage = async ({
    params
}: {
    params: {versionId: string, appId: string}
}) => {

    clientLogger.info(__filename, "Version page called", `versionId: ${params.versionId}`);

    const version = await prismadb.version.findUnique({
        where: {
            id: params.versionId
        },
        // include:{
        //     images: true
        // }
    });

    const services = await prismadb.service.findMany({
        select:{
            id: true, name: true
        },
        where: {
            applicationId: params.appId
        }
    });

    const mappedService = services.map((service) => ({ value: service.id, label: service.name }));

    return ( 

        <Paper sx={{
            flexDirection: 'column',
        }}>

            <Box sx={{
                flex: '1 1 0%',
                padding: '2rem',
                paddingTop: '1.5rem'
            }}>
                <VersionForm
                    services={mappedService}
                    initialData={version}
                />
            </Box>
        </Paper>
    );
};
 
export default VersionPage;