import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';


export default function Searchbar({handleSearch}) {
    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    
    const handleChange = (evt) => {
        const queryString = evt.target.value.toLowerCase().trim();
        setSearch(queryString);
        if (queryString === '') {
            return setSearchParams({});
        }
        setSearchParams({ search: queryString });
    }

    // const a = searchParams.get('search');
    // console.log("searchParams:", a);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSearch(search); 
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit} 
              style={{ marginLeft: "15px", marginTop: "15px" }}>
            <Stack spacing={2} direction="row">
                <TextField 
                    onChange={handleChange}
					value={search}/> 
                <Button style={{backgroundColor: "orange"}}
                    type="submit"
                    variant="contained">
                    <SearchIcon style={{color: "black"}} />
                </Button>
            </Stack>
        </form>
    )
  }

