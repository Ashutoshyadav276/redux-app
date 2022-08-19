import React from 'react'

const Home = () => {
  return (
    <div  className='add-to-cart'>
      <img src="https://img.freepik.com/premium-vector/vector-shopping-cart-icon-paper-sticker-with-shadow-colored-shopping-symbol-isolated_118339-1774.jpg?w=2000" className='image2' alt='' />
    <div>

    </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="https://m.media-amazon.com/images/I/61-r9zOKBCL._SL1500_.jpg" className='image1' alt='' />
        </div>
        <div className='text-wrapper item'>
        <span>
            I-phone
        </span>
        <span>
            Price: $1000.00
        </span>
        </div>
        <div className='btn-wrapper item'>
        <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
