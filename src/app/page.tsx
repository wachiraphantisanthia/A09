import TopMenu from '@/components/TopMenu'
import Banner from '@/components/Banner'
import CardPanel from '@/components/CardPanel'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <TopMenu />
      <Banner />
      <CardPanel />
    </div>
  )
}