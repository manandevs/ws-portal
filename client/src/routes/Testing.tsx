import { Separator } from '../components/common/Separator'
import Hero from '../components/testing/Hero'
import { TestingSetup } from '../components/testing/TestingSetup'

const Testing = () => {
  return (
    <>
      <Hero />
      <Separator orientation="horizontal" variant="blueprint" size="h3" />
      <TestingSetup />
    </>
  )
}

export default Testing
