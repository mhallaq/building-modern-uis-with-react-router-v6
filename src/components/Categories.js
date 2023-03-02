import { getCategories } from "../api";

export default function Categories() {
  const categories = getCategories();
  return (
    <div className="container">
      <h1>Session Categories</h1>

      <ul className="categories">
        {categories.map((item) => (
          <li key={item.id}> {item.name} </li>
        ))}
      </ul>
    </div>
  );
}
