import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'
import Link1 from './Link1'
import Link2 from './Link2'

//eslint-disable-next-line
injectGlobal`
body {
font-family: serif;
}
`

const headerStyle = {
backgroundColor: '#fb1330',
padding: 40
}

const Header = ({title}) => {
return (
<div style={headerStyle}>
<h1>{title}</h1>
 
</div>
)
}

const Wrapper = styled.div`
padding: 40px;
`
 
const Body = ({children}) => {
return (
<Wrapper>
  {children}
</Wrapper>
)
}

const footerStyle = {
backgroundColor: '#333',
color: '#f7f7f7',
padding: 40
}

const Footer = ({title}) => {
	return (
<div style={footerStyle}>
<h3>{title}</h3>
</div>
)
}

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
// end constructor


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
<button onClick={this.doSwitch}>Switch</button>
</Body>

<div style={{marginBottom: 50}}>
<Link1 switcher={this.doSwitch} switchTxt="Screen 2" />	
<Link2 link2={this.doLink2} link2Txt="Screen 1"/>
</div>

<Footer title="Make contact"/>
				
     </div> 
  )// end return
}// end render

	
}// end component

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
