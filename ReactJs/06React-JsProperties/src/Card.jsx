import Details from './details'


function Card(props){
    return (
        <>
            <div className="card">
                <div className="card-box">
                    <p className='id'>{props.id}</p>
                    <h2 className="header">{props.name}</h2>
                    <img  src={props.src} alt={props.alt} />
                    <Details price={props.price} info ={props.details}/>
                    
                </div>
            </div>
        </>
    )
}
export default Card