import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProject = () => {

    const params = useParams();

    return (
        <div>Project : {params.id}</div>
    )
}

export default SingleProject