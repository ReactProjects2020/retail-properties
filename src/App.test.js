import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ResultsTable from './component/ResultsTable';
import data from './results'; 
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()});



describe('adding property', () => {
  it('Shallow rendering', () => {
  const result = data.results;
  const savedResult = data.saved;
  const component = shallow(<ResultsTable/>);
  const instance = component.instance();
  var prevLength = component.state('savedData').length;
  
 
  instance.addProperty(result[0]);
  instance.addProperty(result[1]);
  var newLength = component.state('savedData').length;
  
  expect(newLength - prevLength).toBe(2);
  
});
});

describe('adding property', () => {
  it('Shallow rendering', () => {
  const result = data.results;
  const savedResult = data.saved;
  const component = shallow(<ResultsTable/>);
  const instance = component.instance();
  var prevLength = component.state('savedData').length;
  
 
  instance.addProperty(result[0]);
  instance.addProperty(result[1]);
  instance.removeProperty(1);
  var newLength = component.state('savedData').length;
  
  expect(newLength - prevLength).toBe(2);
  
});
});

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/
