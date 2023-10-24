
import axios from "axios";

const { BACKEND_HOST } = process.env;
const { BACKEND_PORT } = process.env;const baseURL = `${BACKEND_HOST}:${BACKEND_PORT}`;

export const serverApi = (req: Request) => axios.create({
    baseURL,
    headers: {
        'x-trace-id': req.headers.get("x-trace-id")
    }
});

export default serverApi;