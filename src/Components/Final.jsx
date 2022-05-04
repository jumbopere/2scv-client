import {useState} from 'react'
import { Box, Card, Typography, Container } from '@mui/material'

const Final = () => {
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <Container maxWidth="sm" component="main">
<Box>
    
</Box>
    </Container>
  )
}

export default Final