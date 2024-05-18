import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Contexts.jsx";
import { useEffect } from "react";
function Details() {
  const params = useParams();

  const { recipeData, setRecipeData, addFavorite, favorites } =
    useContext(GlobalContext);
  console.log(recipeData);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`
      );
      const data = await res.json();
      if (data?.data) {
        setRecipeData(data?.data);
      }
    }
    fetchData();
  }, []);
  return (
    <div className=" m-20 grid lg:grid-cols-2 lg:grid-rows-2 gap-10 justify-center align-center">
      <div className="lg:row-span-2 m-auto p-2 shadow-sm border-2 object-cover duration-300 hover:scale-105">
        <img src={recipeData?.recipe?.image_url} alt="recipe image" />
      </div>
      <div className="self-center space-y-2">
        <span className="text-xl font-meedium">
          {recipeData?.recipe?.publisher}
        </span>
        <h3 className="text-2xl font-bold">{recipeData?.recipe?.title}</h3>
        <div>
          <button
            className="py-2 px-4 font-semibold tracking-wider inline-block shadow-md bg-blue-200 rounded-lg cursor-pointer hover:bg-blue-300 hover:scale-105 hover:translate-x-2 duration-300"
            onClick={() => addFavorite(recipeData?.recipe)}
          >
            {favorites.findIndex(
              (item) => item.id === recipeData?.recipe?.id
            ) === -1
              ? "Add to Favorites"
              : "Remove from Favorites"}
          </button>
        </div>
      </div>
      <div className="self-center">
        <p className="text-lg font-semibold">Ingredients:</p>
        <ul className="list-disc list-inside space-y-2 tracking-wide text:md">
          {recipeData?.recipe?.ingredients.map((ingredient, index) => (
            <li key={index}>
              <span>
                {ingredient.quantity} {ingredient.unit}
              </span>
              <span>{ingredient.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
