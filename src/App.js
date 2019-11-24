import React, { Suspense } from 'react'
import { Loader } from './Loader'
import { Accordion } from './Accordion'

const App = () => (
  <Suspense fallback={<Loader />}>
    <Accordion />
  </Suspense>
)

export default App
