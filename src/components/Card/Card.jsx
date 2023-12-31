import { useEffect, useState } from 'react'
import './Card.css'

const Card = () => {
    const [advice, setAdvice] = useState('')
    const [id, setId] = useState('')

    const fetchData = async () => {
        try {
            await fetch('https://api.adviceslip.com/advice')
                .then(response => response.json())
                .then(data => {
                    console.log(data.slip.id)
                    setId(data.slip.id)
                    setAdvice(data.slip.advice)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="area">
            {
                <>
                    <h3 className="number">Advice #{id}</h3>
                    <p className="advice">"{advice}"</p>
                </>
            }
            <button className="button" onClick={fetchData}>New Advice</button>
        </div>
    )
}

export default Card