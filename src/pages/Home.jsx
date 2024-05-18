import { useContext } from "react";
import { GlobalContext } from "../Contexts.jsx";
import RecipeItem from "../components/RecipeItem.jsx";

function Home() {
  const { loading, recipes } = useContext(GlobalContext);
  if (loading) return <p>Loading...</p>;
  console.log(recipes);
  return (
    <section className="py-10 container mx-auto flex flex-wrap justify-center gap 10">
      {recipes && recipes.length > 0 ? (
        recipes.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-2xl text-center font-bold">
            {" "}
            Search for Recipes
          </p>
        </div>
      )}
    </section>
  );
}

export default Home;
