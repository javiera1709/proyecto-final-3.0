import React from 'react';

const Carrito = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart mt-5 p-5">
      <h1 className="text-center mb-4 p-2 bg-warning rounded">Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <h4 className='text-center'>El carrito está vacío.</h4>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <ul className="list-unstyled">
            {cartItems.map((item, index) => (
              <li key={index} className="d-flex align-items-center mb-3">
                <img src={item.sprites.front_default} alt={item.name} style={{ width: '120px', marginRight: '20px' }} />
                <div className="d-flex align-items-center">
                  <h5 className='text-uppercase fw-bold mx-3'>{item.name} - ${item.price}</h5>
                  <button className="btn btn-danger" onClick={() => removeFromCart(index)}>X</button>
                </div>
              </li>
            ))}
          </ul>
          <h5 className='my-4'>Total: ${totalPrice}</h5>
          <button className='btn btn-primary'>Ir a pagar</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
