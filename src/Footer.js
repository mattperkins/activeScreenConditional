import React from 'react'

const footerStyle = {
backgroundColor: "yellow",
color: '#f7f7f7',
padding: 40
}

export default ({title}) => <div 
    style={footerStyle}>
<h3><button>{title}</button></h3>
</div>