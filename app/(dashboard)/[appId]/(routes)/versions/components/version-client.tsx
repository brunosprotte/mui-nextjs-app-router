"use client";

import Heading from "@/components/Heading";
import Separator from "@/components/Separator";
import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from "@mui/x-data-grid";
import columns, { VersionColumns } from "./columns";
import { useParams, useRouter } from "next/navigation";

interface VersionClientProps {
    data: VersionColumns[]
}

const VersionClient: React.FC<VersionClientProps> = ({
    data
}) => {

    const router = useRouter();
    const params = useParams();

    return (
        <>
            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Heading title={`Versions (${data.length})`} description="Manager versions of your App's services" />
            
                <Button onClick={() => router.push(`/${params.appId}/versions/new`)}>
                    <AddIcon 
                        sx={{
                            marginRight: '0.5rem',
                            height: '1rem',
                            width: '1rem'
                        }}
                    />
                    Add new
                </Button>
            </Box>

            <Separator />
            
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                columnVisibilityModel={{
                    // Hide columns status and traderName, the other columns will remain visible
                    id: false,
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            <Heading title="API" description="API calls for Versions" />
            <Separator />
            {/* <ApiList entityName="products" entityIdName="productId" /> */}
        </>
    );
};
 
export default VersionClient;