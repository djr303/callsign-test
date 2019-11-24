import React, { Suspense } from 'react'
import Loader from 'react-loader-spinner'
import './App.scss'

const App = () => (
  <Suspense fallback={<Loader type="MutatingDots" color="#008f4c" height={100} width={100} timeout={3000} />}>
    <div className="app">
      <h1>Hello!</h1>
    </div>
  </Suspense>
)

export default App
