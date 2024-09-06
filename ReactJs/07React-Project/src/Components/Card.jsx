function Card(props) {
    return (
        <>
            <div className="term">
                <dt>
                    <span className="emoji" role="img">{props.symbol}</span>
                    <span>{props.name}</span>
                </dt>
                <dd>
                    {props.desc}
                </dd>
            </div>
        </>
    )
}
export default Card