import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Contexts.jsx";

function Navbar() {
  const { search, setSearch, handleSubmit } = useContext(GlobalContext);
  return (
    <nav className="flex justify-around items-center py-6 container mx-auto">
      <h2 className="text-2xl font-semibold ">Food Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/70 border-2 lg:w-96 border-gray-200 rounded-lg px-4 py-2 shadow-lg shadow-blue-100 focus:shadow-blue-500 outline-none focus:outline-none focus:border-blue-200"
          placeholder="Enter Recipe Items.."
        />
      </form>
      <ul className="flex items-center justify-center gap-8">
        <li className="text-xl font-semibold hover:text-gray-700">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="text-xl font-semibold hover:text-gray-700">
          <NavLink to={"/favorites"}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
