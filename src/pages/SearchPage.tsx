import React, { useState } from "react";
import {
    Typography,
    Box,
    Input,
    InputAdornment,
    ThemeProvider,
    createTheme,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
    TextField,
    Button,
} from "@mui/material";
import { styled } from "@mui/system";
import searchImg from '../../src/assets/searchImg.svg';
import kids from '../../src/assets/kids.svg';
import pets from '../../src/assets/pets.svg';
import student from '../../src/assets/student.svg';
import { SelectChangeEvent } from '@mui/material/Select';


const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Poppins',
        },
    },
})

interface StyledRectangleProps {
    isActive: boolean;
    backgroundColor: string;
}

const ariaLabel = { 'aria-label': 'description' };

const StyledRectangle = styled(Box)<StyledRectangleProps>(({ theme, isActive, backgroundColor }) => ({
    boxSizing: "border-box",
    height: 103,
    width: 190,
    borderRadius: "10px",
    outline: isActive ? `1.5px solid ${theme.palette.warning.main}` : "none",
    cursor: "pointer",
    background: `linear-gradient(180deg, #f9d423 0%, #fc9239 48.96%, #ff4e50 100%) ${backgroundColor}`,
    p: "16px",
    transition: "border-radius 0.3s",
    "&:hover": {
        borderRadius: "12px",
    },
}));

const StyledRectangle2 = styled(Box)<StyledRectangleProps>(({ isActive, backgroundColor }) => ({
    boxSizing: "border-box",
    height: 103,
    width: 190,
    borderRadius: "10px",

}));

const SearchPage = () => {
    const [activeRectangles, setActiveRectangles] = useState([false, false, false, false, false]);
    const [textValues] = useState(["Where", "What", "Rooms", "Price", "Area", ""]);
    const [reqValues] = useState(["", "", ""]);
    const [type, setType] = React.useState('');
    const [rooms, setRooms] = React.useState('');
    const [currency, setCurrency] = React.useState('USD');

    const handleRectangleClick = (index: number) => {
        const newActiveRectangles = activeRectangles.map((_, i) => i === index);
        setActiveRectangles(newActiveRectangles);
    };

    const room = (event: SelectChangeEvent) => {
        setRooms(event.target.value);

    }

    const handleChange2 = (event: SelectChangeEvent) => {
        setCurrency(event.target.value);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value);
    };


    return (
        <Box sx={{ bgcolor: "#F5F5F5", height: 1024 }}>
            <ThemeProvider theme={theme}>
                <Box>
                    <Box>
                        <Typography variant="h4" align="center" style={styles.title}>
                            What are you looking for?
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "16.6% 16.6% 16.6% 16.6% 16.6% 16.6%",
                            gap: "4px",
                            alignItems: "center",
                            height: "135px",
                            width: "1320px",
                            mx: "auto",
                            backgroundColor: "white",
                            boxSizing: "border-box",
                            p: "10px",
                            borderRadius: "12px"
                        }}
                    >
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <StyledRectangle
                                key={index}
                                onClick={() => handleRectangleClick(index)}
                                tabIndex={0}
                                isActive={activeRectangles[index]}
                                backgroundColor={"none"}
                                sx={{
                                    p: "15px",
                                }}
                            >
                                {index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 ? (
                                    <>
                                        <Typography variant="body1" color="text.primary" style={styles.description}>
                                            {textValues[index]}
                                        </Typography>
                                        {index === 0 && (
                                            <Input
                                                placeholder="Select City"
                                                disableUnderline
                                                inputProps={ariaLabel}
                                                style={styles.input}
                                                sx={{
                                                    width: 120,
                                                    height: 35,
                                                }}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <img src={searchImg} alt="Search Icon" />
                                                    </InputAdornment>
                                                }
                                            />
                                        )}
                                        {index === 1 && (
                                            <FormControl variant="standard" sx={{ marginTop: "-13px" }}>
                                                <InputLabel id="choose-a-type">Choose a type</InputLabel>
                                                <Select
                                                    labelId="choose-a-type"
                                                    id="choose-a-type"
                                                    value={type}
                                                    onChange={handleChange}
                                                    label="Type"
                                                    disableUnderline
                                                    sx={{
                                                        width: "142px",
                                                    }}
                                                    style={styles.input}
                                                >
                                                    <MenuItem value={"Type 1"}>Type 1</MenuItem>
                                                    <MenuItem value={"Type 2"}>Type 2</MenuItem>
                                                    <MenuItem value={"Type 3"}>Type 3</MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                        {index === 2 && (
                                            <FormControl variant="standard" sx={{ marginTop: "-13px" }}>
                                                <InputLabel id="choose-number-of-rooms">Choose</InputLabel>
                                                <Select
                                                    labelId="choose-number-of-rooms"
                                                    id="choose-number-of-rooms"
                                                    value={rooms}
                                                    onChange={room}
                                                    label="Rooms"
                                                    disableUnderline
                                                    sx={{
                                                        width: "90px",
                                                    }}
                                                    style={styles.input}
                                                >
                                                    <MenuItem value={"1 room"}>Type 1</MenuItem>
                                                    <MenuItem value={"2 rooms"}>Type 2</MenuItem>
                                                    <MenuItem value={"3 rooms"}>Type 3</MenuItem>
                                                </Select>
                                            </FormControl>
                                        )}
                                        {index === 3 && (
                                            <FormControl variant="standard" sx={{ minWidth: 120, marginLeft: "-13px" }}>
                                                <Box sx={{ display: "flex" }}>
                                                    <TextField variant="outlined" placeholder="50 - 60" style={styles.input} sx={{ width: '88px', "& fieldset": { border: 'none' }, marginTop: "-7px" }} />
                                                    <Select
                                                        labelId="demo-simple-select-standard-label"
                                                        id="demo-simple-select-standard"
                                                        value={currency}
                                                        onChange={handleChange2}
                                                        label="Currency"
                                                        disableUnderline
                                                        style={styles.input}
                                                        sx={{ width: "60px", height: "28px", bgcolor: "transparent", marginTop: "6px", paddingRight: "-35px" }}
                                                    >
                                                        <MenuItem value="USD">USD</MenuItem>
                                                        <MenuItem value="UAH">UAH</MenuItem>
                                                        <MenuItem value="PLZ">PLZ</MenuItem>
                                                    </Select>
                                                </Box>
                                            </FormControl>
                                        )}
                                        {index === 4 && (
                                            <FormControl variant="standard" sx={{ marginLeft: "-13px" }}>
                                                <Box sx={{ display: "flex" }}>
                                                    <TextField variant="outlined" placeholder="50 - 60" style={styles.input} sx={{ width: '88px', "& fieldset": { border: 'none' }, marginTop: "-7px" }} />
                                                    <Typography sx={{ fontSize: "13px", fontFamily: "Poppins, sans-serif" }}>m2</Typography>
                                                </Box>
                                            </FormControl>
                                        )}
                                        {index === 5 && (
                                            <FormControl variant="standard" sx={{ marginTop: "-27px", marginLeft: "-20px" }}>
                                                <Button variant="contained" sx={{
                                                    height: 107, width: 200, borderRadius: "12px", bgcolor: "#101828", '&:hover': {
                                                        background: '#101828',
                                                    },
                                                }}>
                                                    <button style={{ background: "none", border: "none", outline: "none" }}>
                                                        <Typography sx={{
                                                            fontFamily: "Poppins, sans-serif",
                                                            fontSize: "18px",
                                                            color: "white",
                                                        }}>Search</Typography>
                                                    </button>
                                                </Button>
                                            </FormControl>
                                        )}

                                    </>
                                )
                                    : null}
                            </StyledRectangle>
                        ))}
                    </Box>
                    <Box>
                        <Box>
                            <Typography variant="h3" align="center" style={styles.requirements}>
                                Additional requirements
                            </Typography>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: "33.33% 33.33% 33.33%",
                                    gap: "10px",
                                    alignItems: "center",
                                    width: "720px",
                                    mx: "auto",
                                    backgroundColor: "transparent",
                                    boxSizing: "border-box",
                                    borderRadius: "12px",
                                    marginTop: "24px",
                                }}>
                                {[0, 1, 2].map((index) => (
                                    <StyledRectangle2 key={index} isActive={false} backgroundColor={"transparent"}>
                                        {index === 0 || index === 1 || index === 2 ? (
                                            <>
                                                {reqValues[index]}
                                                {index === 0 && (
                                                    <button style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }}>
                                                        <Box style={styles.box} >
                                                        <img style={styles.img} src={pets} alt="Pets Icon" />
                                                        <Typography sx={{fontWeight: 400, color: "#101828"}}>With pets</Typography>
                                                        </Box>
                                                    </button>
                                                )}
                                                {index === 1 && (
                                                    <button style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }}>
                                                        <Box style={styles.box} >
                                                        <img style={styles.img} src={kids} alt="Kids Icon" />
                                                        <Typography sx={{fontWeight: 400, color: "#101828"}}>With kids</Typography>
                                                        </Box>
                                                    </button>
                                                )}
                                                {index === 2 && (
                                                    <button style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }}>
                                                        <Box style={styles.box} >
                                                        <img style={styles.img} src={student} alt="Student Icon" />
                                                        <Typography sx={{fontWeight: 400, color: "#101828"}}>Students</Typography>
                                                        </Box>
                                                    </button>
                                                )}
                                            </>
                                        ) : null}
                                    </StyledRectangle2>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </Box>
    );
};

export default SearchPage;

const styles = {
    title: {
        fontSize: 24,
        paddingTop: 100,
        fontWeight: 500,
        paddingBottom: 40,
    },

    description: {
        fontWeight: 500,
        fontSize: 18,
        marginBottom: "10px",
    },

    input: {
        fontWeight: 500,
        fontSize: "16px",
    },

    requirements: {
        fontSize: 18,
        marginTop: "48px",
    },
    
    box: {
        width: "224px",
        height: "110px",
        backgroundColor: "white",
        borderRadius: "12px",
        paddingTop: "16px",
    },

    img: {
        marginBottom: "19px",
    }
};
