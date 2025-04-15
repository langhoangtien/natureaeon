import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, MinusIcon, Plus, PlusIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { CartContext } from "../cart/cart-context";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/lib/utils";

export default function CartHeader() {
  const cartContext = useContext(CartContext);

  const handleCheckout = async () => {
    const cartItems = cartContext.products.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });

    const data = await res.json();

    if (data.checkoutUrl) {
      setSheet(false); // Đóng giỏ hàng
      window.location.href = data.checkoutUrl; // Redirect sang Shopify Checkout
    }
  };
  const {
    products,
    updateQuantity,
    removeProduct,
    sheet,
    setSheet,
    getCartCount,
    getCartTotal,
  } = cartContext;
  return (
    <Sheet open={sheet} onOpenChange={setSheet}>
      <SheetTrigger asChild>
        <Button className="relative" size="icon" variant="outline">
          {!!getCartCount() && (
            <Badge className="absolute -top-2.5 -right-2 min-w-[1.25rem] min-h-[1.25rem] flex items-center justify-center rounded-full text-xs shadow">
              {getCartCount()}
            </Badge>
          )}
          <ShoppingCart strokeWidth={1} className="text-accent-foreground" />
        </Button>
      </SheetTrigger>
      <SheetContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        <SheetHeader>
          <SheetTitle>Your Bag</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex-grow overflow-auto py-4 border-t px-6">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart
                strokeWidth={1}
                className="h-12 w-12 mx-auto text-gray-300 mb-4"
              />
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button onClick={() => setSheet(false)}>Continue Shopping</Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {products.map((item) => (
                <li key={item.id} className="flex border-b pb-4">
                  <div className="size-20 md:size-24 xl:size-28 relative flex-shrink-0 gap-4 md:gap-8 rounded overflow-hidden">
                    <Image
                      width={100}
                      height={100}
                      src={item.image}
                      alt={item.name}
                      className="object-cover size-20 md:size-24 xl:size-28"
                    />
                  </div>
                  <div className="ml-4 flex gap-4 justify-between flex-grow md:gap-8">
                    <div className="flex flex-col flex-grow justify-center gap-1">
                      <h3 className="font-medium line-clamp-2">{item.name}</h3>
                      {!!item.title && (
                        <p className="text-gray-500 text-sm line-clamp-1">
                          {item.title}
                        </p>
                      )}
                      <div className="flex items-center mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-7 border-r-0 rounded-r-none"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus strokeWidth={1} />
                        </Button>
                        <input
                          onChange={(e) => {
                            let value = parseInt(e.target.value, 10);
                            if (isNaN(value) || value < 1) {
                              value = 1; // Đặt giá trị mặc định nếu nhập sai
                            }
                            updateQuantity(item.id, value);
                          }}
                          className="h-7 w-6 border-border border-t border-b flex items-center justify-center text-center "
                          value={item.quantity}
                        ></input>
                        <Button
                          variant="outline"
                          className="size-7 border-l-0 rounded-l-none"
                          size="icon"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus strokeWidth={1} />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col shrink-0 justify-between">
                      <p className="primary font-medium mt-1">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                      <button
                        onClick={() => removeProduct(item.id)}
                        className="text-[var(--primary-lighter)] underline font-semibold cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <SheetFooter>
          {products.length > 0 ? (
            <div className="w-full">
              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between mb-4 text-primary">
                  <span>Shipping</span>
                  <span className="font-semibold">Free Standard Shipping</span>
                </div>
                <div className="flex justify-between mb-4 text-primary">
                  <span className="font-semibold">Subtotal</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>

                <Button onClick={handleCheckout} size="lg" className="w-full">
                  Checkout
                </Button>
              </div>
            </div>
          ) : (
            <SheetClose asChild>
              <Button size="lg" className="w-full" variant="outline">
                Continue Shopping
              </Button>
            </SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

interface QuantityCartProps {
  quantity: number;
  updateQuantity: (newQuantity: number) => void;
}
export const QuantityCart: React.FC<QuantityCartProps> = ({
  quantity,
  updateQuantity,
}) => {
  return (
    <div className="relative flex items-center max-w-[6rem]">
      <button
        type="button"
        disabled={quantity === 1}
        onClick={() => updateQuantity(Math.max(1, quantity - 1))}
        className="border border-gray-300 text-gray-200 rounded-s-lg p-2 h-8 hover:bg-gray-200"
      >
        <MinusIcon
          className={`w-3 h-3 ${
            quantity === 1 ? "text-gray-500" : "text-gray-900"
          }`}
        />
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="border-y-[1px] border-gray-300 h-8 text-center text-gray-900 text-sm font-normal w-full py-2.5"
      />
      <button
        type="button"
        onClick={() => updateQuantity(quantity + 1)}
        className="border border-gray-300 rounded-e-lg p-2 h-8 hover:bg-gray-200"
      >
        <PlusIcon className="w-3 h-3 text-gray-900" />
      </button>
    </div>
  );
};
