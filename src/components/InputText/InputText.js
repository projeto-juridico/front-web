import './InputText.css';

const InputText = (props) => {
    return (
        <div>
            <h3>{props.label}</h3>
            <input placeholder={props.placeholder}/>
        </div>
    );
};

export default InputText;