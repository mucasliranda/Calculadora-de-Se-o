import { IconButton } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link'


export default function ReturnBtt() {

  return(
    <Link href="/" passHref >
      <IconButton>
        <ArrowBackIcon />
      </IconButton>
    </Link>
  )

}