import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ResultsTable from './component/ResultsTable';
import data from './results'; 
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()});

/*describe('adding property', () => {
  it('Shallow rendering', () => {
  const result = data.results;
  const savedResult = data.saved;
  const component = shallow(<ResultsTable/>);
  const instance = component.instance();
  var prevLength = component.state('savedData').length;
  
  instance.addProperty(1,result[0]);
  instance.addProperty(1,result[1]);
  instance.addProperty(1,result[2]);
  var newLength = component.state('savedData').length;
  expect(newLength - prevLength).toBe(3);
  
});
});*/

describe('adding property', () => {
  it('Shallow rendering', () => {
  const result = data.results;
  const savedResult = data.saved;
  const component = shallow(<ResultsTable/>);
  const instance = component.instance();
  var prevLength = component.state('savedData').length;
  console.log('prevLength :'+prevLength);
 
  instance.addProperty(1,result[0]);
  instance.addProperty(1,result[1]);
  var newLength = component.state('savedData').length;
  console.log('newLength : '+newLength);
  expect(newLength - prevLength).toBe(2);
  
});
});

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
