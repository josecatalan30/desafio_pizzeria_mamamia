import { clp } from '../utils/format'
export default function Navbar({total='0', token = false}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <a className="navbar-brand d-flex align-items-center gap-2" href="#">
        <span role="img" aria-label="pizza">🍕</span>
        <strong>Pizzería Mamma Mía</strong>
      </a>

      <div className="ms-auto d-flex gap-2">
        {}
        <button className="btn btn-outline-light">🍕 Home</button>

        {}
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}

        {}
        <button className="btn btn-success">
          🛒 Total: ${clp(total)}
        </button>
      </div>
    </nav>
    </>
  )
}
