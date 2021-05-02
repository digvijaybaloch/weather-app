import React from "react"
// import { shallow, configure } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ReactDOM, { render } from "react-dom"
import Pagination from '../Pagination/index'
import renderer from 'react-test-renderer'

// configure({ adapter: new Adapter() });

// describe('Pagination', () => {
//  it('Pagination renders correctly', () => {
//    const wrapper = shallow(<Pagination />);
//    expect(wrapper).toMatchSnapshot();
//    // On the first run of this test, Jest will generate a snapshot file automatically.
//  });
// });

it("renders without crashing", ()=>{
 const div = document.createElement("div");
 ReactDOM.render(<Pagination></Pagination>, div)
})

it("renders pagination component correctly", ()=>{
 const testRenderer = renderer.create(<Pagination />)
 const testInstance = testRenderer.root;
 expect(testInstance.findByProps({ "data-testid": "paginationRow"}).props.height).toEqual("50px")
 expect(testInstance.findByProps({ "data-testid": "paginationRow"}).props.width).toEqual("100%")
 expect(testInstance.findByProps({ "data-testid": "paginationRow"}).props.mWidth).toEqual("100%")
})