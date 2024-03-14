import ClockHeading from './Component/ClockHeading'
import ClockSlogan from './Component/ClockSlogan'
import CurrentTime from './Component/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

// For currenttime:- time.toLocalDateString() and time.toLocalTimeString()
function App() {

  return (
    <center>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
        </center>
  )
}

export default App
