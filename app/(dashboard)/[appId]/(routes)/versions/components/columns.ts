import { GridColDef } from "@mui/x-data-grid";

export type VersionColumns = {
    id: string
    serviceName: string
    version: string
    isReleased: boolean
    createdAt: string


}

const columns: GridColDef[] = [
    { 
        field: 'id', 
        headerName: 'ID', 
        type: "string",
        // width: 70 
    },
    { 
        field: 'serviceName', 
        headerName: 'Service', 
        type: "string",
        width: 130 
    },
    { 
        field: 'version', 
        headerName: 'version', 
        type: "number",
        // width: 130 
    },
    {
        field: 'isReleased',
        headerName: 'Released',
        type: "boolean",
        width: 90,
    },
];

export default columns;