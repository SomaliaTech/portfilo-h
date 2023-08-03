import './product.scss'

function Product({item}) {
  return (
    <div className='p'>
<div className="p-browser">
    <div className="p-circle"></div>
    <div className="p-circle"></div>
    <div className="p-circle"></div>
</div>
<a href={item?.link} target='_blank'>
<img src={item.img} alt="" className="pl-img" />
</a>
    </div>
  )
}

export default Product