import './Card.css'

const Card = (props) => {
    const style = {
        backgroundColor: props.primaryColor
    }

    return (
        <div className='card'>
            <div className='header' style={style}>
                <img className='img' src={props.img} alt={props.name}/>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Card