import React from 'react'

function Counter({title,...obj}) {  // title,count = props
    //const {title,count} = props;
    return (
        <div>
            <h1> {title} : {obj.count}</h1>
        </div>
    )
}

export default Counter
