import { Link } from "react-router-dom";
function RecipeItem({ item }) {
  return (
    <div className="w-80 flex-col overflow-hidden rounded-lg shadow-lg gap-5 p-5">
      <div className="h-40 flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
        <img
          src={item?.image_url}
          alt="recipe image"
          className="block w-full object-cover"
        />
      </div>
      <div>
        <span className="text-sm font-medium">{item?.publisher}</span>
        <h3 className="font-bold text-xl truncate mb-4">{item?.title}</h3>
        <Link className=" py-2 px-4 font-semibold tracking-wider inline-block shadow-md bg-blue-200 rounded-lg cursor-pointer hover:bg-blue-300 hover:scale-105 hover:translate-x-2 duration-300" to={`/recipe-item/${item?.id}`}>Learn More</Link>
      </div>
    </div>
  );
}

export default RecipeItem;
