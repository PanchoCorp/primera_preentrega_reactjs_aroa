import './CartWidget.css'

const CartWidget = () => {
    const imagenCarrito = "https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
    return (
        <div>
            <img className='imagenCarrito' src={imagenCarrito} alt="Carrito de compras" />
            <strong>22</strong>
        </div>
    )
}

export default CartWidget