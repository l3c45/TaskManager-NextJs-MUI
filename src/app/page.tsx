import Image from 'next/image'
import { Roboto } from '@next/font/google'


const inter = Roboto({weight:"400"})

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <h1>LUCAS</h1>
    </main>
  )
}
