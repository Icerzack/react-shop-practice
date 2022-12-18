import "./categories-collection.styles.scss";

const CategoriesCollection = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <props.categoryItem
          key={category.id}
          category={category}
        ></props.categoryItem>
      ))}
    </div>
  );
};

export default CategoriesCollection;
