import { createShallow   } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyledCard, StyledCardAction } from '../card'

configure({ adapter: new Adapter() });

describe('<StyledCard />', () => {
 let shallow;
 beforeAll(() => {
  shallow = createShallow ();
 });
 it('should work', () => {
   const wrapper = shallow(<StyledCard />);
  });
 });
 
 describe('<StyledCardAction />', () => {
  let shallow;
  beforeAll(() => {
   shallow = createShallow ();
  });
  it('should work', () => {
   const wrapper = shallow(<StyledCardAction />);
 });
});