import Link from 'next/link'
import cssConfig from '../utils/cssConfig';

const LinkComponent = (props) => {
    const { link, type } = props;
    return (
        <div className={cssConfig.link}>
            <Link href={link}>{type}</Link>
        </div>
    )
}

export default LinkComponent;