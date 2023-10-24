import { auth } from "@clerk/nextjs";

import path from "path";

import { headers } from 'next/headers';
import   logger   from "@/logger";

const clientLogger = {
    info: (fileName: string, message: string, aditionalData?: string) => {
        const log = buildMessage(fileName, message, aditionalData);
        logger.info(log);
    },
    error: (fileName: string, message: string, aditionalData?: string) => {
        const log = buildMessage(fileName, message, aditionalData);
        logger.error(log);
    }
};

const buildMessage = (fileName: string, message: string, aditionalData?: string) => {
    const file = path.relative(process.cwd(), fileName);
    const traceId = headers().get('x-trace-id');
    const sessionId = auth().sessionId || '';
    const userId = auth().userId || '';
    const logMessage = message;
    const logAditionalData = aditionalData || '';

    return String().concat(
        `[${file}] `,
        `[${traceId}] `,
        `[${sessionId}] `,
        `[${userId}] `,
        `[${logMessage}] `,
        `[${logAditionalData}] `
    );

};

export default clientLogger;