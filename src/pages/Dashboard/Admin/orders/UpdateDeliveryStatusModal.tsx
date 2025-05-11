/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateOrderStatusMutation } from "@/redux/features/order/order.api";
import CustomForm from "@/components/form/CustomForm";
import CustomSelect from "@/components/form/CustomSelect";
import { SelectItem } from "@/components/ui/select";

interface IupdateDeleveryStatuModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  orderId: string | null;
}
const updateDeleveryStatusDefaultValue = {
  status: "",
};

const updateDeleveryStatusSchema = z.object({
  status: z.string().min(1, "Status is required"),
});

type TFormValues = z.infer<typeof updateDeleveryStatusSchema>;

const deleveryStatusOption = ["Pending", "Confirmed", "Shipping", "Delivered"];

const UpdateDeleveryStatuModal: React.FC<IupdateDeleveryStatuModalProps> = ({ isOpen, onOpenChange, orderId }) => {
  const [updateStatus] = useUpdateOrderStatusMutation(undefined);
  const form = useForm<TFormValues>({
    resolver: zodResolver(updateDeleveryStatusSchema),
    defaultValues: updateDeleveryStatusDefaultValue,
    mode: "onChange",
  });
  const [updating, setUpdating] = useState(false);

  const onSubmit = async (data: TFormValues) => {
    try {
      setUpdating(true);
      const statusInfo = {
        status: data.status,
      };
      const res = await updateStatus({ id: orderId, data: statusInfo }).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
        onOpenChange(false);
      }
    } catch (err: any) {
      console.log(err?.data?.message);
    } finally {
      setUpdating(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Delevery Status</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <CustomForm form={form} onSubmit={onSubmit}>
          <CustomSelect form={form} fieldName="status" label="Select Status" placeholder="Choose Status">
            {deleveryStatusOption?.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </CustomSelect>
          <Button variant="default" type="submit" className="w-full mt-8" disabled={updating}>
            {updating ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Updating Status...
              </div>
            ) : (
              "Update Delivery Status"
            )}
          </Button>
        </CustomForm>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDeleveryStatuModal;
