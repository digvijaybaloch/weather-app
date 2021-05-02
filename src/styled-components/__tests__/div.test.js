import { createShallow   } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyledBox, StyledContainer, Row, CardContainer, WrapperDiv, SpineDiv, BallDiv } from '../div'

configure({ adapter: new Adapter() });

describe('<StyledBox />', () => {
 let shallow;
 beforeAll(() => {
  shallow = createShallow ();
 });
 it('should work', () => {
   const wrapper = shallow(<StyledBox />);
  });
 });
 
 describe('<StyledContainer />', () => {
  let shallow;
  beforeAll(() => {
   shallow = createShallow ();
  });
  it('should work', () => {
   const wrapper = shallow(<StyledContainer />);
 });
});
 
 describe('<Row />', () => {
  let shallow;
  beforeAll(() => {
   shallow = createShallow ();
  });
  it('should work', () => {
   const wrapper = shallow(<Row />);
 });
});
 
 describe('<CardContainer />', () => {
  let shallow;
  beforeAll(() => {
   shallow = createShallow ();
  });
  it('should work', () => {
   const wrapper = shallow(<CardContainer />);
 });
});
 
 describe('<WrapperDiv />', () => {
  let shallow;
  beforeAll(() => {
   shallow = createShallow ();
  });
  it('should work', () => {
   const wrapper = shallow(<WrapperDiv />);
 });
});
 
 describe('<SpineDiv />', () => {
  let shallow;
  beforeAll(() => {
   shallow = createShallow ();
  });
  it('should work', () => {
   const wrapper = shallow(<SpineDiv />);
 });
});
 
 describe('<BallDiv />', () => {
  let shallow;
  beforeAll(() => {
   shallow = createShallow ();
  });
  it('should work', () => {
   const wrapper = shallow(<BallDiv />);
 });
});