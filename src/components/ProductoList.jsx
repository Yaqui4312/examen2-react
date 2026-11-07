import { ProductoCard } from './ProductoCard';

export function ProductoList({ productos, onAgregar, carrito }) {
  return (
    <div className="grid">
      {productos.map((producto) => {
        const estaEnCarrito = carrito.some((item) => item.id === producto.id);
        return (
          <ProductoCard
            key={producto.id}
            producto={producto}
            onAgregar={onAgregar}
            estaEnCarrito={estaEnCarrito}
          />
        );
      })}
    </div>
  );
}