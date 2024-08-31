import { Box, Typography } from '@mui/material';
import React from 'react';
import { whiteColor } from '../utils/const';

export const Footer: React.FC = () => {

    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                // position: 'fixed',
                bottom: 0,
                textAlign: 'center',
                padding: '8px 0',
                boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
            }}
        >
            <Typography variant="body2" style={{fontSize: "8px", color: whiteColor}}>
                &copy; 2024 Website created by Reginald Randolph
            </Typography>
        </Box>
    );
};
