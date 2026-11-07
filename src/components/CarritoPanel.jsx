export function CarritoPanel({ carrito, onQuitar, onVaciar }) {
  const totalCalculado = carrito.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="carrito">
      <h3>Carrito de Compras</h3>
      
      {carrito.length === 0 ? (
        <p>El carrito esta vacio</p>
      ) : (
        <>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <span>{item.title}</span>
                <span>$ {item.price.toFixed(2)}</span>
                <button onClick={() => onQuitar(item.id)}>Quitar</button>
              </li>
            ))}
          </ul>
          <div className="total">
            Total: $ {totalCalculado.toFixed(2)}
          </div>
          <button onClick={onVaciar} style={{ marginTop: '15px', width: '100%' }}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
}