import React from 'react'

export default function antonyme({mean}) {
  return (
  <div>
    <div className='column-2 md:column-3'>
         {mean.map(val =>val.meanings.map(means => means.antonyms?.map(
        def => {
           return <li>{def}</li>;
        }
       )))}
    </div>
  </div>
  )
}
