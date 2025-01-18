import React from 'react'

export default function meaningList({mean}) {
    console.log(mean);
    
  return (
    <div>
       {mean.map(val =>val.meanings.map(means => means.definitions.map(
        def => (
            <div key={def.definition}>
                <li className='text-black'>{def.definition}</li>
            </div>
        )
       )))}
    </div>
  )
}
