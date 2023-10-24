
import * as React from 'react';
import Heading from '@/components/Heading';
import Separator from '@/components/Separator';
import clientLogger from '@/lib/clientLogger';
import { Avatar, Box, Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { formatter } from '@/lib/utils';

function DashboardPage() {

    clientLogger.info(__filename, "Dashboard page called");

    return ( 

        <Paper sx={{
            flexDirection: 'column',
            width: '100%',
            padding: 2
        }}>

            <Heading title='Dashboard' description='Overview of your app'/>
            <Separator />
            
            <Box sx={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
            }}>
                
                <Card variant="outlined">
                    <CardHeader
                        title='Total Revenue'
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="Total Revenue">
                                $
                            </Avatar>
                        }
                    />                     
                    <CardContent>
                        <Typography variant="body2">
                            {formatter.format(98152)}
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardHeader
                        title='Total Revenue'
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="Total Revenue">
                                $
                            </Avatar>
                        }
                    />                     
                    <CardContent>
                        <Typography variant="body2">
                            {formatter.format(98152)}
                        </Typography>
                    </CardContent>
                </Card>

                <Card variant="outlined">
                    <CardHeader
                        title='Total Revenue'
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="Total Revenue">
                                $
                            </Avatar>
                        }
                    />                     
                    <CardContent>
                        <Typography variant="body2">
                            {formatter.format(98152)}
                        </Typography>
                    </CardContent>
                </Card>

                
            </Box>
            
        </Paper>

    );
};
 
export default DashboardPage;