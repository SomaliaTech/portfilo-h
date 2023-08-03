import data from "../../assets/data/data";
import Product from "../product/Product";
import "./productlist.scss";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h2 className="title">We  know That Good Design is good Businnes</h2>
        <span className="pl-desc">
        When you work with me your satisfaction is 100% guaranteed, look some of my projects
        </span>
      </div>
      <div className="pl-carts">
        {data.map((item)=> (
            <Product key={item.id} item={item}/>

        ))}
      </div>
    </div>
  );
}

export default ProductList;
