import Hero from '../components/home/Hero'
import { Separator } from '../components/common/Separator'
import { EnvironmentSetup } from '../components/home/EnvironmentSetup'

const Home = () => {
  return (
    <>
      <Hero />
      <Separator orientation="horizontal" variant="blueprint" size="h3" />
      <EnvironmentSetup />
    </>
  )
}

export default Home
