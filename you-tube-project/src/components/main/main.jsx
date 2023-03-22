import { useState, useEffect} from 'react'
import { colors } from '../constants/colores';
import { Link } from 'react-router-dom';
import { Button, Box,Container, Typography, Stack } from '@mui/material';
import { Category, Videos } from '../'
import { ApiService } from '../service/api.service';

const Main = () => {
  const [ selectedCategory, setSelectedCategory ] = useState('new')
  const [ videos, setvideos] = useState([])
  const selectedCategoryhandler = category => setSelectedCategory(category);
 
  console.log(process.env.REACT_APP_PUBLIC_API_KEY);

useEffect(() => {
  const getData = async () => {
    try {
      const data = await  ApiService.fetching('search')
      setvideos(data.items)
    } catch (error) {
      console.log(error);
    }
  }
 
getData()
}, [])

  return (
    <Stack>
      <Category selectedCategoryhandler={selectedCategoryhandler} selectedCategory={selectedCategory} />
      <Box sx={{height: '95vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={'bold'} mb={2}>
             {selectedCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos} /> 
        </Container>
      </Box>
    </Stack> 
  )
}

export default Main;