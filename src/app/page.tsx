
import Greet from './greet'
import Hero01 from './hero01'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Greet />
      <Hero01/>
    </main>
  )
}