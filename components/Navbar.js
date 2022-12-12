import Link from "next/link.js";

export default function Navbar({ }) {
  const user = null
  const username = null
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button>Feed</button>
          </Link>
        </li>
        {username && (
          <>
            <li>
              <Link href="/admin"><button>Write Posts</button></Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}
        {!username && (
          <li>
            <Link href="/enter">
              <button>Log In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}