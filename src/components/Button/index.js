import './Button.css'

const Button = (props) => {
    return (
        <button className='mybutton'>{props.children}</button>
    )
}

export default Button