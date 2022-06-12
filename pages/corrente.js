import { Box, Stack, TextField, Typography, InputAdornment } from '@mui/material'
import { useEffect, useState } from 'react';
import { useSecao } from '../provider/Secao';
import DarkModeBtt from '../components/DarkModeBtt'
import ReturnBtt from '../components/ReturnBtt';

export default function Corrente() {

  const [corrente, setCorrente] = useState("")

  const { findSecao, secao } = useSecao()

  const handleChange = (event) => {
    setCorrente(event.target.value);
    findSecao(corrente, "corrente")
  };

  useEffect( () => {
    findSecao(corrente, "corrente")
  },[corrente])

  return (
    <Box sx={{width: "clamp(300px, 100%, 1600px)", height: "100vh", padding: "15px", margin: "0px auto"}} >

      <ReturnBtt />

      <Stack direction="column" alignItems="center" justifyContent="space-evenly" sx={{height: "90%"}} >

        <TextField value={corrente} onChange={handleChange} label="Qual a corrente?" InputProps={{endAdornment: <InputAdornment position="end">A</InputAdornment> }} sx={{width: "297.75px"}} />

        <Typography textAlign="center" variant="subtitle1" >{secao}</Typography>

      </Stack>

      <DarkModeBtt  />

    </Box>
  )
}