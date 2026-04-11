import { FaqSection } from '@/components/FaqSection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { LucknowSplash } from '@/components/LucknowSplash'
import { Mission } from '@/components/Mission'
import { PillarsGrid } from '@/components/PillarsGrid'
import { StatsRow } from '@/components/StatsRow'

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsRow />
        <Mission />
        <LucknowSplash />
        <PillarsGrid />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

export default App