import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        var color = {
            
            backgroundColor: this.props.item.agency.brandingColors.primary
        }
        var styleWidth = this.props.width;
        return(
            <div>
                <header style={{backgroundColor:this.props.item.agency.brandingColors.primary, textAlign:"left"}}>
                <img src ={this.props.item.agency.logo} alt="logo" className="logoImg"/>
            </header>
            <div  id={this.props.key}>
                <img src ={this.props.item.mainImage} alt="image" id={this.props.key} style={{width:"100%"}}/>
                
             </div>           
                
            <footer>Price: {this.props.item.price}</footer>
            </div>
            
        )
    }
}
export default Card;