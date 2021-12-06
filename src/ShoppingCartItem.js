import "./styles.css";

export default function ShoppingCartItem(props) {
  const onClickProd = () => {
    props.onClickFunction(props.refer);
  };

  return (
    <div className="ShoppingCartItem" onClick={onClickProd}>
      <div className="ShoppingCartItemAmount">{props.refer.amount}</div>
      <img width="60" height="60" src={props.refer.img} />
    </div>
  );
}
