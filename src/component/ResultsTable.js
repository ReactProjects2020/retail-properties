import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import data from '../results';
import App from '../App.css';
import { Container, Row, Col } from 'reactstrap';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });




class ResultsTable extends React.Component{
    
    constructor(){
        super();
        var resultButtonData = [];
        var savedButtonData = [];
        this.state = {
            resultsData : [],
            savedData : [],
            isMouseInside : false,
            isMouseInsideForRemove : false,
           
        }
        this.showResultData = this.showResultData.bind(this);
        this.showSavedData = this.showSavedData.bind(this);
        this.addProperty = this.addProperty.bind(this);
        this.removeProperty = this.removeProperty.bind(this);
       // this.mouseEnter = this.mouseEnter.bind(this);
       // this.mouseLeave = this.mouseLeave.bind(this);
      //  this.mouseEnterForRemove = this.mouseEnterForRemove.bind(this);
        //this.mouseLeaveForRemove= this.mouseLeaveForRemove.bind(this);
    }
componentDidMount(){
    const result = data.results;
    var newObj = {"show":false};
    const resultButtonDataArray = result.map(result =>  Object.assign({},result,newObj));
    const savedResult = data.saved;
    const savedButtonDataArray = savedResult.map(result =>  Object.assign({},result,newObj));
    this.setState({
        resultsData : resultButtonDataArray,
        savedData: savedButtonDataArray,
        
    })
}
addProperty(resultToBeAdded){
    var results = this.state.resultsData;
    resultToBeAdded.show = false;
    var newObj = Object.assign({},resultToBeAdded);
    
    var newCard = this.state.savedData.filter(result => result.id !== resultToBeAdded.id).concat(newObj);
    this.setState(prevState => {
        return {
            ...prevState,
            savedData : newCard
        }
        
    })
}
removeProperty(id){
    var newSavedData = this.state.savedData.filter(result => result.id !== id);
    
    this.setState(prevState => {
        return {
            ...prevState,
            savedData : newSavedData
        }
        
    })
}
showResultData(){
    
    return (
        <div>
                    <h4>Results</h4>
                    {this.state.resultsData.map(result => {
            return (
                
                <div className="container" key={result.id}>
                <Row  onMouseEnter={this.mouseEnter.bind(this, result.id)} onMouseLeave={this.mouseLeave.bind(this,result.id)} >
                    
                    <Card item={result} showLabel="add"  width="100%" />
                
                {result.show ? <button className="btn" onClick={() => this.addProperty(result)}>add</button> : null}
                    
                    
                </Row>
                </div>
                
                
            )
            
        })

                    }
        
        </div>
    )
    
        
}
showSavedData(){
    
    return (
        <div>
                    <h4>Saved Properties</h4>
        {
            this.state.savedData.map(result => {
                return (
                    
                    <div className="container" key={result.id}>
                    <Row onMouseEnter={this.mouseEnterForRemove.bind(this,result.id)} onMouseLeave={this.mouseLeaveForRemove.bind(this,result.id)}>
                        
                        <Card item={result} showLabel="remove" width="100%" id={result.id}/>
                        {result.show ? <button className="btn" onClick={() => this.removeProperty(result.id)}>remove</button> : null}
                       
                        
                    
                    </Row>
                    </div>
                    
                    
                ) 
                
            })
        }            
        
        </div>
    )
    
        
}
mouseEnter = (id) => {
    //console.log('in result data');
    
    var existingResultData =  this.state.resultsData;
    var arr = [];
    
    for(var i =0;i<existingResultData.length;i++){
        
        if(existingResultData[i].id === id){
            
            existingResultData[i].show = true;
            arr.push(existingResultData[i]);
            
        }else{
            existingResultData[i].show = false;
            arr.push(existingResultData[i]);
        }
    }
    this.setState(prevState => {
        return{
             ...prevState,
             resultsData : arr
        }
     })
    //this.setState({ resultsData: this.state.resultsData });
   // this.setState({ isMouseInside: true });
  }
  mouseLeave = (id) => {
      var existingResultData =  this.state.resultsData;
        var arr = [];
    for(var i =0;i<existingResultData.length;i++){
        
        if(existingResultData[i].id === id){
            
            existingResultData[i].show = false;
            
        }
        arr.push(existingResultData[i]);
    }
    
    this.setState(prevState =>{
        return{
             ...prevState,
             resultsData : arr
        }
     })
   // this.setState({ resultsData: this.state.resultsData });
   // this.setState({ isMouseInside: false });
  }
  mouseEnterForRemove = (id) => {
      console.log('in saved data');
      var existingSavedData =  this.state.savedData;
        var arr = [];
    for(var i =0;i<existingSavedData.length;i++){
        //console.log("id is: "+e+"  id: "+this.state.resultsData[i].id);
        if(existingSavedData[i].id === id){
            
            existingSavedData[i].show = true;
            arr.push(existingSavedData[i]);
            
        }else{
            existingSavedData[i].show = false;
            arr.push(existingSavedData[i]);
        }
    }
    this.setState(prevState =>{
        return{
             ...prevState,
             savedData : arr
        }
     })
  //  this.setState({ savedData: this.state.savedData });
   // this.setState({ isMouseInsideForRemove: true });
  }
  mouseLeaveForRemove = (id) => {
      var existingSavedData =  this.state.savedData;
        var arr = [];
    for(var i =0;i<existingSavedData.length;i++){
        
        if(existingSavedData[i].id === id){
            
            existingSavedData[i].show = false;
            
        }
        arr.push(existingSavedData[i]);
    }
    this.setState(prevState => {
        return{
             ...prevState,
             savedData : arr
        }
     })
   // this.setState({ savedData: this.state.savedData });
   // this.setState({ isMouseInsideForRemove: false });
  }
    render(){

       
            
        return(
            <Container>
                <Row>
                    <Col xs="6">
                    {this.showResultData()}
                    </Col>
                    <Col xs="6">
                    {this.showSavedData()}
                    </Col>
                </Row>
                
                
            </Container>
            
        )
    }
}
export default ResultsTable;