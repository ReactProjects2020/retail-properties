import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        console.log('lbel: '+this.props.id);
        this.state = {
            show : false,
            label : this.props.showLabel
        }
        
    }
    onMouseOverOnImge(e){
        this.setState({
            show : true
        })
    }
    onMouseOutOnImge(){
        this.setState({
            show : false
        })
    }
    render(){
        
        var color = {
            
            backgroundColor: this.props.item.agency.brandingColors.primary
        }
        var styleWidth = this.props.width;
        return(
            <div className="container">
                <header style={{"backgroundColor":this.props.item.agency.brandingColors.primary}}>
                <img src ={this.props.item.agency.logo} alt="logo" style={{width:"absolute",align:"left"}}/>
            </header>
            <div  id={this.props.key}>
                <img src ={this.props.item.mainImage} alt="image" id={this.props.key} style={{width:"100%"}}/>
                
             </div>           
                
            <footer style={{"textAlign":"left",paddingBottom:"20px", fontSize: "16px"}}>Price: {this.props.item.price}</footer>
            </div>
            
        )
    }
}
export default Card;