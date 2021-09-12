import LinkComponent from './Link'
import cssConfig from '../utils/cssConfig'

const Links = (props) => {
    return (
        <div className={cssConfig.links}>
            <LinkComponent link="/" type="Home" />
            {!props.type && <LinkComponent link="/genre?genre=Horror" type="Horror" />}
            {!props.type && <LinkComponent link="/genre?genre=Romance" type="Romance" />}
            {!props.type && <LinkComponent link="/genre?genre=Comedy" type="Comedy" />}
        </div> 
    )
}
export default Links
