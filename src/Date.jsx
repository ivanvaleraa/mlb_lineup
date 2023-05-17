import React from 'react'

function Date (props) {
  return (
  <div className="date--content">
        <input className="date--input"
        onChange={e => props.updateDate(e.target.value)}
        type="date" />
    </div>
  )
}

export default Date
