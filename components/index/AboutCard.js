import React from 'react'

function AboutCard(props) {
    return (
        <>
            <div className="h1div">
                <h1>{props.number}</h1>
            </div>
            <div className="pdiv">
                <p>{props.para}</p>
            </div>
        </>
    )
}

export default AboutCard
