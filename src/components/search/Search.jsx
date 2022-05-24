import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Cards from '../card/Cards';

const Searchbar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        margin: '5vh auto',
        border: '1px solid black',
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
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const Search = ({Data}) => {

    const [records, setRecords] = useState([]);
    // console.log(records);
    const [filteredData, setFilteredData] = useState();
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const FetchedData = () => {
            setRecords(Data.items)
            // console.log(Data.items);
          }
          FetchedData()
      }, [Data])

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
        <Searchbar sx={{ width: "15vw", display:'flex' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e) => searchItems(e.target.value)}
                        />
                    </Searchbar>
                    
            <div className='cards'>

                {searchInput.length > 1 ? (
                    filteredData.map((data, index) => {
                        return (
                            <Cards
                                key={index}
                                data={data}
                            />
                        )
                    })
                ) : (
                    records.map((data, index) => {
                        return (
                            <Cards
                            key={index}
                            data={data}
                        />
                        )
                    })
                )
                }
            </div>
        </>
    )
}

export default Search


