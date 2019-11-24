import React, { useState, useCallback } from 'react'
import useFetch from 'fetch-suspense'
import classNames from 'classnames'
import Item from './components/Item'
import './Accordion.scss'

import { API_ENDPOINT } from '../global/constants'

const Accordion = () => {
  const people = useFetch(`${API_ENDPOINT}/data.json`, { method: 'GET' })
  const [isCollapsed, setIsCollapsed] = useState(() => people.reduce((a, c) => { a[c.email] = true; return a }, {}))
  const setCollapsed = useCallback((emailId) => {
    const newState = { ...isCollapsed }
    for (const key in isCollapsed) {
      newState[key] = key === emailId ? !newState[key] : true
    }
    setIsCollapsed(newState)
  }, [isCollapsed])

  return (
    <div className="accordion">
      <header className="header">
        <div className="checkbox">
          <input type="checkbox" />
        </div>
        <div className="column">
          <h2>
            USER
          </h2>
        </div>
        <div className="column">
          <h2>
            GROUP
          </h2>
        </div>
        <div className="column">
          <h2>
            LAST ACTIVE
          </h2>
        </div>
      </header>
      <ul className='list'>
        {people.map((p, i) => (
          <li key={p.email} className={classNames('section', { alt: (i % 2 === 1), collapsed: isCollapsed[p.email] })}>
            <Item person={p} onClick={() => setCollapsed(p.email)} />
          </li>))}
      </ul>
    </div>
  )
}

export default Accordion
