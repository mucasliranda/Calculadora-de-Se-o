import { Box, Stack, TextField, Typography, InputAdornment } from '@mui/material'
import { useEffect, useState } from 'react';
import { useSecao } from '../provider/Secao';
import DarkModeBtt from '../components/DarkModeBtt'
import ReturnBtt from '../components/ReturnBtt';


export default function Potencia() {

  const [potencia, setPotencia] = useState("")

  const { findSecao, secao } = useSecao()

  const handleChange = (event) => {
    setPotencia(event.target.value);
  };

  useEffect( () => {
    findSecao(potencia, "potencia")
  },[potencia])

  return (
    <Box sx={{width: "clamp(300px, 100%, 1600px)", height: "100vh", padding: "15px", margin: "0px auto"}} >

      <ReturnBtt />

      <Stack direction="column" alignItems="center" justifyContent="space-evenly" sx={{height: "90%"}} >

        <TextField value={potencia} onChange={handleChange} label="Qual a potência?" InputProps={{endAdornment: <InputAdornment position="end">W</InputAdornment> }} sx={{width: "297.75px"}} />

        <Typography textAlign="center" variant="subtitle1" >{secao}</Typography>

      </Stack>

      <DarkModeBtt  />

    </Box>
  )
}