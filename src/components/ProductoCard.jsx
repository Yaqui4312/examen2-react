export function ProductoCard({ producto, onAgregar, estaEnCarrito }) {
  return (
    <div className={`card ${estaEnCarrito ? 'en-carrito' : ''}`}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p className="categoria">{producto.category}</p>
      <p className="precio">$ {producto.price.toFixed(2)}</p>
      <button 
        onClick={() => onAgregar(producto)} 
        disabled={estaEnCarrito}
      >
        {estaEnCarrito ? 'Agregado' : 'Agregar'}
      </button>
    </div>
  );
}