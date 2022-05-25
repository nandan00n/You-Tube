import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Cards from '../card/Cards';
import { useState } from 'react';
import { useEffect } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {

    
    const [records, setRecords] = useState([]);
    // console.log(records);
    const [filteredData, setFilteredData] = useState();
    const [searchInput, setSearchInput] = useState('');

    const getData = () => {
      fetch('db.json')
          .then(res => res.json())
          .then(actualData => {
            setRecords(actualData.items)
              // console.log(actualData.items);
          }).catch(error =>
              console.log(error)
          )
  }

  useEffect(() => {
      getData()
  }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== "") {
            // eslint-disable-next-line
            const filteredRecords = records.filter(data => {
                    return data.snippet.title.toLowerCase().includes(searchValue.toLowerCase()) 
            })
            console.log(filteredRecords)
            setFilteredData(filteredRecords)
        } else {
            setFilteredData(records)
        }
    }

  return (
<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'red' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            YouTube
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'white'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => searchItems(e.target.value)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

<div className='cards'>

{searchInput.length > 1 ? (
    filteredData.map((data, index) => {
        return (
            <Cards
                key={index}
                data={data}
                input={searchInput}
            />
        )
    })
) : (
    records.map((data, index) => {
        return (
            <Cards
            key={index}
            data={data}
            input={searchInput}
        />
        )
    })
)
}
</div>
</>
  );
}
