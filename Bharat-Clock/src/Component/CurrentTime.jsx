let CurrentTime = ()=>{
 
 let time=new Date();
 return(
<>
    <p className="lead">This is the Current date :{time.toLocaleDateString()} and Time is:{time.toLocaleTimeString()}</p>
</>

 )
}
export default CurrentTime;