import { Link } from "react-router-dom";
import { styles } from "../styles";

export default function Navbar() {
  return (
    <nav className={`${
      styles.paddingX
    } w-full flex-wrap flex items-center py-4 lg:py-5 sm:py-4 xs:py-3  fixed top-0 z-30 bg-accent
    }`}>
      <div className="w-full flex-wrap flex justify-between items-center max-w-7xl mx-auto select-none">
        <div className="list-none flex flex-row gap-10">
        <Link to='/'>Home</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
        </div>
      </div>
    </nav>
  )
}
