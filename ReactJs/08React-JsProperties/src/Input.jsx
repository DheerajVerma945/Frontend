function Input(props){
    return(
        <input name={props.name} onChange = {props.onChange} type={props.type} placeholder={props.placeholder} />
    )
}
export default Input