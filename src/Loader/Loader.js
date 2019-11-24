import React from 'react'
import Loader from 'react-loader-spinner'
import './Loader.scss'

const CallsignLoader = () => (
  <div className="loader">
    <Loader type="MutatingDots" color="#008f4c" height={100} width={100} timeout={999999} />
  </div>
)

export default CallsignLoader
