import React from 'react'
import { useRouteError } from 'react-router-dom'

function RoutingErrors() {
    let error_obj = useRouteError();
    console.log(error_obj)
  return (
    <div>
        <h1 className='text-center text-danger mt-5 display-3'> {error_obj.data} </h1>
        <h2 className="text-warning display-3 text-center"> {error_obj.status}-{error_obj.statusText} </h2>
    </div>
  )
}

export default RoutingErrors