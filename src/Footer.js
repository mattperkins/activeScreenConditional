import React from 'react'



const footerStyle = {
color: '#f7f7f7',
padding: 40,
background: "yellow"
}

export default ({title}) => <div style={footerStyle}>
<h3><button>{title}</button></h3>
</div>