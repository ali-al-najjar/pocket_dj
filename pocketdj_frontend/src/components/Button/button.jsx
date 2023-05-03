import './button.css';
const Button = ({name,onSubmit,className,isDisabled}) => {
    return (
        <button className={className} onClick={onSubmit} disabled = {isDisabled}>
            {name}
        </button>
    );
}
export default Button;