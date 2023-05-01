import './button.css';
const Button = ({name,onSubmit,className}) => {
    return (
        <button className={className} onClick={onSubmit}>
            {name}
        </button>
    );
}
export default Button;