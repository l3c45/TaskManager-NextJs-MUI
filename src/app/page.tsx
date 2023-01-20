"use client"
import Image from 'next/image'
import { Roboto } from '@next/font/google'
import { Typography } from '@mui/material'
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };


const inter = Roboto({weight:"400"})

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Typography variant='h1' color={"primary"}>LUCAS</Typography>
      
    </main>
  )
}
