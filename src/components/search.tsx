import React, { useState } from 'react';
import { Box, Autocomplete, TextField, Button, Typography } from "@mui/material";
import { guestList } from '../utils/list_of_guest';
import { primaryColor, borderRadius, fontFamily, whiteColor } from '../utils/const';

interface Person {
    id: number;
    name: string;
    table: number | string;
}

export const Search: React.FC = () => {
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
    const [inputValue, setInputValue] = useState<string>('');
    const [displayPerson, setDisplayPerson] = useState<boolean>(false);

    const handleSubmit = () => {
        if (selectedPerson) {
            setDisplayPerson(true);
        }
    };

    const handleClear = () => {
        setSelectedPerson(null);
        setInputValue('');
        setDisplayPerson(false);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ fontFamily, marginTop: '2rem', marginBottom: '10rem', '@media (max-width: 768px)': { marginTop: '2rem', marginBottom: '9rem' } }}
        >
            <Typography variant="h4" align="center" gutterBottom style={{ color: whiteColor, fontFamily }}>
                Find your table
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                width="100%"
                maxWidth="600px"
                minWidth="20%"
                mt={2}
                sx={{
                    '@media (max-width: 768px)': {
                        maxWidth: '90%',
                    },
                    '@media (max-width: 480px)': {
                        maxWidth: '95%',
                    },
                }}
            >
                <Autocomplete
                    value={selectedPerson}
                    inputValue={inputValue}
                    onInputChange={(_event, newInputValue) => setInputValue(newInputValue)}
                    options={inputValue.length >= 2 ? guestList.filter((person: Person) => person.id && person.name.toUpperCase() !== "GUEST") : []}
                    getOptionLabel={(option: Person) => option.name}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Search by name" 
                            variant="outlined" 
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderRadius: borderRadius,
                                        borderColor: whiteColor,
                                    },
                                    '&:hover fieldset': {
                                        borderColor: primaryColor,
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: whiteColor,
                                    fontFamily,
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: whiteColor,
                                    fontFamily,
                                },
                            }}
                        />
                    )}
                    onChange={(_event, newValue) => setSelectedPerson(newValue)}
                    fullWidth
                />
            </Box>
            <Box display="flex" justifyContent="center" mt={4} sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                <Button 
                    variant="contained" 
                    onClick={handleSubmit} 
                    sx={{
                        backgroundColor: primaryColor,
                        color: '#fff',
                        padding: '10px 40px',
                        borderRadius: borderRadius,
                        fontWeight: 'bold',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                        textTransform: 'none',
                        fontFamily,
                        height: '2.2rem',
                        marginRight: { xs: 0, sm: 2 },
                        marginBottom: { xs: 2, sm: 0 },
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                            backgroundColor: '#2c3b45', // Darker shade for hover effect
                            boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                    aria-label="Submit guest search button"
                >
                    Search
                </Button>
                <Button 
                    variant="outlined" 
                    onClick={handleClear}
                    sx={{
                        borderColor: whiteColor,
                        color: whiteColor,
                        padding: '10px 40px',
                        borderRadius: borderRadius,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        fontFamily,
                        height: '2.2rem',
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': {
                            borderColor: primaryColor,
                            color: primaryColor,
                            backgroundColor: 'rgba(74, 90, 100, 0.1)',
                        },
                    }}
                    aria-label="Clear search"
                >
                    Clear
                </Button>
            </Box>
            {selectedPerson?.id && displayPerson && (
                <Box display="flex" justifyContent="center" mt={4} flexDirection="column" alignItems="center">
                    <Typography style={{ fontSize: '1.5rem', color: whiteColor, fontFamily }}>Your table is:</Typography>
                    <Typography style={{ fontSize: '3rem', fontWeight: 'bold', color: whiteColor, fontFamily }}>
                        {selectedPerson.table !== 24 ? selectedPerson.table : 'The sweetheart table'}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};
