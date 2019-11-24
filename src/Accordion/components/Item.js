import React from 'react'
import './Item.scss'

const Item = ({ person, onClick }) => (
  <>
    <header className="item" onClick={() => onClick()}>
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className="column">
        <h3>
          {person.email}
        </h3>
      </div>
      <div className="column">
        <h3>
          {person.group}
        </h3>
      </div>
      <div className="column">
        <h3>
          {person.lastactive}
        </h3>
      </div>
    </header>
    <div className='content'>
      <div className="title-bar">
        <div className="picture"></div>
        <div className="name">
          {person.name.toUpperCase()}
        </div>
      </div>
      <div className="details">
        <h4>USER DETAILS</h4>
        <ul>
          <li className="detail">
            <div className="title">
               Email
            </div>
            <div className="data">
              {person.email}
            </div>
          </li>
          <li className="detail">
            <div className="title">
               Phone
            </div>
            <div className="data">
              {person.phone}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Item
