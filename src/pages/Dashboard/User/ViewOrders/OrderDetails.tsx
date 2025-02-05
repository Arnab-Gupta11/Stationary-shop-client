import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IOrderItem } from "@/types/order.type";
import { formatPrice } from "@/utils/formatePrice";

const OrderDetails = ({ productDetails }: { productDetails: IOrderItem[] }) => {
  return (
    <DialogContent className="bg-white rounded-lg h-96 overflow-y-scroll">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">Order Details</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-5 mt-4">
        {productDetails.map((item) => (
          <div
            key={item.product._id}
            className="flex flex-row xsm:items-center xsm-mx:flex-col gap-3 xsm:gap-5 border rounded-lg p-4 shadow-box-shadow"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-full h-40 xsm:w-32 xsm:h-32 object-cover rounded-md bg-gray-50 p-3 xsm:p-5"
            />
            <div>
              <h2 className="text-lg font-semibold mt-2">{item.product.name}</h2>
              <p className="text-sm text-slate-700">{item.product.category}</p>
              <p className="text-sm text-slate-700 mt-0.5">
                <span className="font-semibold text-slate-800">Brand:</span> {item.product.brand}
              </p>
              <p className="text-sm text-slate-700 mt-0.5">
                <span className="font-semibold text-slate-800">Quantity: </span>
                {item.quantity}
              </p>
              <p className="text-sm font-bold text-primary-bg mt-0.5">{formatPrice(item.product.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </DialogContent>
  );
};

export default OrderDetails;
