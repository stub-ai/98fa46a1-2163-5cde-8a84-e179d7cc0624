import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Header />
      <Login />
    </main>
  )
}