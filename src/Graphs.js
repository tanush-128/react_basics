import './graphs.css'
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


const Bar = (props)=>{
    var fillHeight = Math.random()*100 +'%'
    return <div className="barItem">
        <div className='bar'>

        <div className="barFill" style={{height:fillHeight}}>
        </div>

        </div>
        <div>{props.month}</div>

    </div>
    
}

const Graphs = ()=>{
    return <div className='bg'>
        {months.map((month)=>(<Bar month={month}/>))}
    </div> 
}

export default Graphs