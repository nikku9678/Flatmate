import React from 'react'
import './Product.css'
const Product = ({prod}) => {
      // const prod=[
  //   {
  //     id:'1',
  //     name:'Table',
  //     price:9500,
  //     category:'Furniture',
  //     collegName:'NSec',
  //     location:'Garia, Kolkata'

  //   },
  //   {
  //     id:'2',
  //     name:'Table',
  //     price:9500,
  //     category:'Furniture',
  //     collegName:'NSec',
  //     location:'Garia, Kolkata'

  //   },
  //   {
  //     id:'3',
  //     name:'Table',
  //     price:9500,
  //     category:'Furniture',
  //     collegName:'NSec',
  //     location:'Garia, Kolkata'

  //   },
  //   {
  //     id:'4',
  //     name:'Table',
  //     price:9500,
  //     category:'Furniture',
  //     collegName:'NSec',
  //     location:'Garia, Kolkata'

  //   },
  //   {
  //     id:'5',
  //     name:'Table',
  //     price:9500,
  //     category:'Furniture',
  //     collegName:'NSec',
  //     location:'Garia, Kolkata'

  //   },
  // ]

  return (
    <div className='product_card'>
      <div>
        <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" />
      </div>

      <div className='prod_detail'>
            <h2>Rs. {prod.price} 500</h2>
            <p>{prod.productName}</p>
      </div>
    </div>
  )
}

export default Product
