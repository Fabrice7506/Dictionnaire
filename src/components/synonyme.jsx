import React from 'react'

export default function synonyme({mean}) {
  return (
    <div className='column-2 md:column-3'>
         {mean.map(val =>val.meanings.map(means => means.synonyms.map(
        def => {
           return def ? <li>{def}</li> : "";
        }
       )))}
    </div>
  )
}
