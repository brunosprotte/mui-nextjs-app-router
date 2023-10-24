"use client";

import { Box, Typography } from "@mui/material";

interface HeadingProps {
    title: string,
    description: string   
}

const Heading: React.FC<HeadingProps> = ({
    title, description
}) => ( 
    <Box>
        <Typography
            variant="h3"
            letterSpacing={'-0.025em'}
        >
            {title}
        </Typography>
        <Typography
            variant="caption"
            color={'text.secondary'}
        >
            {description}
        </Typography>
    </Box>
);

export default Heading;