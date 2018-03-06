import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import {injectGlobal} from 'styled-components'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Link1 from './Link1'
import Link2 from './Link2'

//eslint-disable-next-line
injectGlobal`
body {
font-family: serif;
}
`



const Screen1 = () => {
	return <p>Screen 1</p>
}

const Screen2= () => {
	return <p>Screen 2</p>
}

// root component
export default class Root extends Component {

state = {
  screenIndex: 1
  }

doSwitch = () => {
  this.setState({
    screenIndex : 2
  })
}

doLink2 = () => {
  this.setState({
    screenIndex : 1
  })
}


render() {

let activeScreen

  if(this.state.screenIndex === 1) {
    activeScreen = <Screen1 /> }

  if(this.state.screenIndex === 2) {
    activeScreen = <Screen2 /> }

return(
 
<div>

<Header title="Customer is King"/>
				
<Body>
  {activeScreen}
</Body>

<div style={{marginBottom: 50}}>

<Link1 switcher={this.doSwitch} switchTxt="Screen 2" />	

<Link2 link2={this.doLink2} link2Txt="Screen 1"/>

</div>



<Footer
    title="configure props to change bg"/>
				
</div> 

  )// end return
}// end render

	
}// end component

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
