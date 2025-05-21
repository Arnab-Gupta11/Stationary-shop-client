import DialogCloseBtn from "@/components/ui/core/DialogCloseBtn";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IOrderItem } from "@/types/order.type";
import { formatPrice } from "@/utils/formatePrice";

const OrderDetails = ({ productDetails }: { productDetails: IOrderItem[] }) => {
  return (
    <DialogContent className="bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-lg h-96 overflow-y-scroll">
      <DialogCloseBtn />
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">Order Details</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-5 mt-4">
        {productDetails.map((item) => (
          <div
            key={item.product._id}
            className="flex flex-row xsm:items-center xsm-mx:flex-col gap-3 xsm:gap-5 border-[3px] border-light-card-border dark:border-dark-border rounded-3xl p-4 shadow-box-shadow"
          >
            <img
              src={item.product.images[0]}
              alt={item.product.name}
              className="w-full h-40 xsm:w-32 xsm:h-32 object-cover rounded-3xl bg-light-muted-bg dark:bg-dark-muted-bg p-3 xsm:p-5 flex-shrink-0"
            />
            <div>
              <h2 className="text-lg font-semibold mt-2 text-light-primary-text dark:text-dark-primary-txt">{item.product.name}</h2>
              <p className="text-sm text-light-secondary-text dark:text-dark-secondary-txt font-medium">{item.product.category.name}</p>
              <p className="text-sm text-light-secondary-text dark:text-dark-secondary-txt font-medium mt-0.5">
                <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Brand:</span> {item.product.brand.name}
              </p>
              <p className="text-sm text-light-secondary-text dark:text-dark-secondary-txt font-medium mt-0.5">
                <span className=" text-light-primary-text dark:text-dark-primary-txt">Quantity: </span>
                {item.quantity}
              </p>
              <p className="text-sm font-bold text-primary mt-0.5">{formatPrice(item.product.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </DialogContent>
  );
};

export default OrderDetails;
