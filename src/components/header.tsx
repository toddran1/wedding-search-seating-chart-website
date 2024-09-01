import { Box, Typography } from '@mui/material';
import React from 'react';
import headerImage from '../utils/header_image.jpg'; // Import the image
import { borderRadius, fontFamily } from '../utils/const';

export const Header: React.FC = () => {

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="80%" // Set width to 80% of the page
            height="350px" // Adjust height to minimize space
            sx={{
                backgroundImage: `url(${headerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                fontFamily,
                borderRadius,
                textAlign: 'center',
                paddingBottom: 0,
                marginBottom: 0,
                margin: '0 auto',
                '@media (max-width: 768px)': {
                    width: '90%', // Adjust width for smaller screens
                    height: '250px', // Reduce height for smaller screens
                },
                '@media (max-width: 480px)': {
                    width: '95%', // Further adjust width for phones
                    height: '200px', // Further reduce height for phones
                }
            }}
        >
            {/* Render different text based on screen size */}
            <Typography variant="h4" gutterBottom sx={{
                fontFamily,
                letterSpacing: '0.1rem',
                fontSize: '2rem',
                '@media (max-width: 480px)': {
                    display: 'none', // Hide the default text on mobile screens
                }
            }}>
                REGINALD RANDOLPH
            </Typography>
            <Typography variant="h6" sx={{
                fontFamily,
                margin: '0.5rem 0',
                '@media (max-width: 480px)': {
                    display: 'none', // Hide the default text on mobile screens
                }
            }}>
                and
            </Typography>
            <Typography variant="h4" gutterBottom sx={{
                fontFamily,
                letterSpacing: '0.1rem',
                fontSize: '2rem',
                '@media (max-width: 480px)': {
                    display: 'none', // Hide the default text on mobile screens
                }
            }}>
                NAIOMI KING
            </Typography>
            <Typography variant="h6" sx={{
                fontFamily,
                marginTop: '1rem',
                fontSize: '1.2rem',
                '@media (max-width: 480px)': {
                    display: 'none', // Hide the default text on mobile screens
                }
            }}>
                10 - 19 - 2024
            </Typography>

            {/* Mobile-only text */}
            <Typography variant="h4" gutterBottom sx={{
                fontFamily,
                letterSpacing: '0.1rem',
                fontSize: '1.5rem',
                '@media (min-width: 481px)': {
                    display: 'none', // Hide this text on larger screens
                }
            }}>
                REGINALD and NAIOMI
            </Typography>
            <Typography variant="h6" sx={{
                fontFamily,
                marginTop: '1rem',
                fontSize: '1.2rem',
                '@media (min-width: 481px)': {
                    display: 'none', // Hide this text on larger screens
                }
            }}>
                10 - 19 - 2024
            </Typography>
        </Box>
    );
};
