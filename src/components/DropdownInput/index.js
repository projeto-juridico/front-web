import './DropdownInput.css'

const DropdownInput = (props) => {
    return (
        <div className='dropdown-input'>
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                <option value='' />
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownInput