import { TextField } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchField = ({helpertext}) => {
  return (
    <TextField
    
    InputProps={{
      startAdornment: (
        <InputAdornment>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      )
    }}
    sx={{
        width: "285px",
        height: "50px",
        gap: "0px", 
        border: "1px solid #F0F0F0", 
      
        
      }}
          id="outlined-helperText"
        
          placeholder={helpertext}
        />
  )
}

export default SearchField