import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GenresFilter({handleChange,value}) {
    return (
        <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small">Genres</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Below 7"}>Below 7</MenuItem>
                <MenuItem value={"Above 7"}>Above 7</MenuItem>
                <MenuItem value={"Above 8"}>Above 8</MenuItem>
            </Select>
        </FormControl>
    );
}
