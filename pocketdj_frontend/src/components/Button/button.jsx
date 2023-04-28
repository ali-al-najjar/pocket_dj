import './button.css';
const Button = ({name,onSubmit}) => {
    return (
        <button className='button' onClick={onSubmit}>
            {name}
        </button>
    );
}
export default Button;