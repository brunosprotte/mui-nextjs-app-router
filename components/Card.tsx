import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProps {
    title: string
    content: string
}

const OutlinedCard: React.FC<CardProps> = ({ title, content }: CardProps) => (
    <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </Box>
);
 
export default OutlinedCard;