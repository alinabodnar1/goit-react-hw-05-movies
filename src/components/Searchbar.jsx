import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import { Form } from './Components.styled';


export default function Searchbar({handleSearch}) {
    const [search, setSearch] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    
    const query = searchParams.get("search") ?? "";
    console.log("query:", query); 

    const handleChange = (evt) => {
        const queryString = evt.target.value.toLowerCase().trim();
        setSearch(queryString);
        if (queryString === '') {
            return setSearchParams({});
        }
        setSearchParams({ search: queryString });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSearch(search); 
        setSearch('');
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Stack spacing={2} direction="row">
                <TextField 
                    onChange={handleChange}
					value={search}/> 
                <Button style={{backgroundColor: "#FF7F50"}}
                    type="submit"
                    variant="contained">
                    <SearchIcon style={{color: "black"}} />
                </Button>
            </Stack>
        </Form>
    )
  }

