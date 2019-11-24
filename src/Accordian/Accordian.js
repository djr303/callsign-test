import React from 'React'
import useFetch from 'fetch-suspense';
import './Accordian.scss'

import { API_ENDPOINT } from '../global/constants'

const Accordian = () => {
  const people = useFetch(`${API_ENDPOINT}/data.json`, { method : 'GET' })
  console.log('people', people)

  return (
    <div className="accordian">Accordian</div>
  )
}

export default Accordian