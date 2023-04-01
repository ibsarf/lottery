import './Ball.css'

function Ball({num}) {
    // console.log(num);
    
  return (
    <div  >
         {num && <div className='Ball' >{num}</div>}
    </div>
   
  )
}

export default Ball