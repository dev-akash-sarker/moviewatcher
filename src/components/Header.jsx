import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" bg-slate-800 w-full">
      <nav className="container mx-0">
        <ul className="flex justify-start items-center">
          <li className="text-white font-poppins text-md py-5 px-5 hover:text-white hover:bg-orange-400 transition-all ">
            <Link to="/">MovieWatcher</Link>
          </li>
          <li className="text-white font-poppins text-md py-5 px-5 hover:text-white hover:bg-orange-400 transition-all ">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="text-white font-poppins text-md py-5 px-5 hover:text-white hover:bg-orange-400 transition-all ">
            <Link to="/tvshows">TV Shows</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
