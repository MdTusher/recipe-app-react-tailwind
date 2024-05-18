import { useContext } from "react";
import RecipeItem from "../components/RecipeItem.jsx";
import { GlobalContext } from "../Contexts.jsx";
function Favorites() {
  const { favorites } = useContext(GlobalContext);
  return (
    <section className="py-10 container mx-auto flex flex-wrap justify-center gap 10">
      {favorites && favorites.length > 0 ? (
        favorites.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-2xl text-center font-bold">
            Nothing is added to your Favorites
          </p>
        </div>
      )}
    </section>
  );
}

export default Favorites;
