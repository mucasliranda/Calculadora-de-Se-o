import { Box, Button, Stack } from '@mui/material'
import Link from 'next/link'
import DarkModeBtt from '../components/DarkModeBtt'


export default function Home() {
  return (
    <Box sx={{width: "clamp(300px, 100%, 1600px)", height: "100vh", padding: "15px", margin: "0px auto"}} >

      <Stack direction="row" alignItems="center" justifyContent="space-evenly" sx={{height: "100%"}} >

        <Link href="/corrente" passHref ><Button variant="contained" sx={{width: "120px"}} >Corrente</Button></Link>

        <Link href="/potencia" passHref ><Button variant="contained" sx={{width: "120px"}} >Potência</Button></Link>

      </Stack>

      <DarkModeBtt  />

    </Box>
  )
}