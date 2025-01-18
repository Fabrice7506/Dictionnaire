import React from 'react'

export default function exemple({mean}) {
  return (
    
        <div>
       {mean.map(val =>val.meanings.map(means => means.definitions.map(
        def => (
            <div key={def.example}>
              {def.example ?  <li className='text-black'>{def.example}</li> : "" } 
            </div>
        )
       )))}
    </div>
    
  )
}
