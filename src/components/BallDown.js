import './Ball.css'

function BallDown({num3}) {
    // console.log(num);
    
  return (
    <div  >
         {num3 && <div className='Ball' >{num3}</div>}
    </div>
   
  )
}

export default BallDown