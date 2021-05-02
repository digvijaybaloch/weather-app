import React from "react"
import ReactDOM from "react-dom"
import GraphContainer from '../GraphContainer/index'
import renderer from 'react-test-renderer'

Object.defineProperty(window, 'matchMedia', {
 writable: true,
 value: jest.fn().mockImplementation(query => ({
   matches: false,
   media: query,
   onchange: null,
   addListener: jest.fn(), // Deprecated
   removeListener: jest.fn(), // Deprecated
   addEventListener: jest.fn(),
   removeEventListener: jest.fn(),
   dispatchEvent: jest.fn(),
 })),
});

it("renders without crashing", ()=>{
 const div = document.createElement("div");
 ReactDOM.render(<GraphContainer></GraphContainer>, div)
})

it("renders graph container component correctly", ()=>{
  const testRenderer = renderer.create(<GraphContainer />)
  const testInstance = testRenderer.root;
  expect(testInstance.findByProps({ "data-testid": "responsiveContainer"}).props.width).toEqual("70%")
  expect(testInstance.findByProps({ "data-testid": "responsiveContainer"}).props.height).toEqual("40%")
 })