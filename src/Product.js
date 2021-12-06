import "./styles.css";

export default function Product(props) {
  const onClickProd = () => {
    props.onClickFunction(props.refer);
  };

  return (
    <div className="Product" onClick={onClickProd}>
      <img width="50" height="50" src={props.refer.img} />
      <div className="ProductInfo">
        <h2>{props.refer.name}</h2>
        <h3>{props.refer.description}</h3>
      </div>
    </div>
  );
}
