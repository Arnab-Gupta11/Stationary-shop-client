import { X } from "lucide-react";
import { DialogClose } from "../dialog";

const DialogCloseBtn = () => {
  return (
    <DialogClose asChild>
      <button className="absolute right-3  top-3 p-2 rounded-full transition">
        <X className="w-6 h-6 text-light-secondary-text dark:text-dark-secondary-txt hover:text-primary hover:dark:text-primary duration-700 scale-105" />
        <span className="sr-only">Close</span>
      </button>
    </DialogClose>
  );
};

export default DialogCloseBtn;
