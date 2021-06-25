import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Movies from '../components/Movies'

configure({adapter: new Adapter()});
const renderer = new ShallowRenderer()
renderer.render(shallow(<Provider store={store}><Movies /></Provider>))

const output = renderer.getRenderOutput()

console.log(output.type)
console.log(output.props)

expect(output.type).toBe('div')