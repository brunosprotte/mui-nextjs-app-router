import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const SERVER_SIDE_HOST = process.env.NEXT_PUBLIC_SERVER_SIDE_HOST;
const SERVER_SIDE_PORT = process.env.NEXT_PUBLIC_SERVER_SIDE_PORT;
const baseURL = `${SERVER_SIDE_HOST}:${SERVER_SIDE_PORT}`;

const clientApi = (authToken: string | null) => axios.create({
    baseURL,
    headers: {
        Authorization: authToken,
        "x-trace-id": uuidv4()
    }
});

export default clientApi;