
const Button = (props) => {
    return (
    <>
    <button onClick={props.click} className='button'>{props.title}</button>
    </>
    )

}

export default Button;