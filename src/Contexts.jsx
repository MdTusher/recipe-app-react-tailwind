import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipeData, setRecipeData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipes(data.data.recipes);
        setLoading(false);
        setSearch("");
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      setSearch("");
      console.log(error);
    }
  }
  function addFavorite(currentRecipe) {
    let cpyFav = [...favorites];
    const index = cpyFav.findIndex((recipe) => recipe.id === currentRecipe.id);
    if (index === -1) {
      cpyFav.push(currentRecipe);
    } else {
      cpyFav.splice(index);
    }
    setFavorites(cpyFav);
  }
  return (
    <GlobalContext.Provider
      value={{
        search,
        loading,
        recipes,
        setSearch,
        handleSubmit,
        recipeData,
        setRecipeData,
        addFavorite,
        favorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
