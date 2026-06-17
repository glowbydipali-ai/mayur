import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Panel */}
      <div
        className={`fixed right-0 inset-y-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-rose-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={19} className="text-rose-500" />
            <span className="font-playfair text-xl font-semibold text-rose-900">Your Bag</span>
            {totalItems > 0 && (
              <span className="bg-rose-100 text-rose-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-100 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="w-16 h-16 rounded-full bg-rose-50 flex items-center justify-center mb-4">
                <ShoppingBag size={22} className="text-rose-300" />
              </div>
              <p className="font-playfair text-lg text-rose-800 mb-2">Your bag is empty</p>
              <p className="font-sans text-xs text-rose-400">Add some beautiful products to get started.</p>
              <button
                onClick={onClose}
                className="mt-6 px-5 py-2.5 rounded-full bg-rose-100 text-rose-700 font-sans text-sm font-medium hover:bg-rose-500 hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 p-4 rounded-2xl bg-cream-100 border border-cream-200">
                  <img
                    src={item.image_url ?? ''}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-sans text-sm font-semibold text-rose-900 truncate">{item.name}</h4>
                    <p className="font-sans text-xs text-rose-400 capitalize mb-2.5">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-white border border-rose-100 rounded-lg px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-rose-400 hover:text-rose-600 transition-colors">
                          <Minus size={11} />
                        </button>
                        <span className="font-sans text-sm font-medium text-rose-800 w-5 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-rose-400 hover:text-rose-600 transition-colors">
                          <Plus size={11} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-playfair text-base font-semibold text-rose-700">${(item.price * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-rose-200 hover:text-rose-400 transition-colors">
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-rose-100">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-rose-600">Subtotal</span>
              <span className="font-playfair text-2xl font-semibold text-rose-900">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 to-blush-400 text-white font-sans font-medium tracking-wide shadow-glow hover:shadow-glow-lg hover:scale-[1.02] transition-all duration-300">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-3 py-2 font-sans text-xs text-rose-400 hover:text-rose-600 transition-colors"
            >
              Clear bag
            </button>
          </div>
        )}
      </div>
    </>
  );
}
