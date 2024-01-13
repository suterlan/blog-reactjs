import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative shadow-md bg-white">
      <div className="absolute inset-0 bg-white/50 bg-center bg-fixed">
      </div>

      <div className="w-full backdrop-blur-sm">
        <div className="relative z-1 h-20 px-3 mx-auto max-w-7xl flex items-center justify-between text-slate-500">
          <a className="text-2xl hover:text-slate-700 transition-colors" href="">Keboon <span className="font-bold"> Blog</span></a>

          <ul className="flex items-center gap-5">
            <li><span className="hover:text-slate-700 transition-colors cursor-pointer"><Link to="/">Home</Link></span></li>
            <li><span className="hover:text-slate-700 transition-colors cursor-pointer"><Link to="/about">About</Link></span></li>
            <li><span className="text-white bg-blue-400 hover:bg-blue-500 py-1 px-3 rounded transition-colors cursor-pointer"><Link to="/create">New Post</Link></span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;