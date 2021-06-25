import Link from 'next/link'

function Links() {
    return <ul>
            <li>
                <Link href="/Genre?genre=Romance">Romance Genre</Link>
            </li>
            <li>
                <Link href="/Genre?genre=Horror">Horror Genre</Link>
            </li>
            <li>
                <Link href="/Genre?genre=Comedy">Comedy Genre</Link>
            </li>
        </ul>
}
export default Links
