import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from "react";
import axios from "axios"

export default function GenresFilter({handleChange}) {
    const [age, setAge] = useState('');


    return (
        <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small">Genres</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Action"}>Action</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
        </FormControl>
    );
}
