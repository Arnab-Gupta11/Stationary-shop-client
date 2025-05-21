import DialogCloseBtn from "@/components/ui/core/DialogCloseBtn";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TContact } from "@/types/contact.types";

const ViewMessage = ({ message }: { message: TContact }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
          View Message
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogCloseBtn />
        <DialogHeader>
          <DialogTitle>Contact Message</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-2 ml-1">
          <h1 className="text-light-secondary-text dark:text-dark-secondary-txt text-sm font-medium">
            <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Name:</span> {message?.name}
          </h1>
          <h1 className="text-light-secondary-text dark:text-dark-secondary-txt text-sm font-medium">
            <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Email:</span> {message?.email}
          </h1>
          <h1 className="text-light-secondary-text dark:text-dark-secondary-txt text-sm font-medium">
            <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Phone:</span> {message?.phone}
          </h1>
          <h1 className="text-light-secondary-text dark:text-dark-secondary-txt text-sm font-medium">
            <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Subject:</span> {message?.subject}
          </h1>
          <h1 className="text-light-secondary-text dark:text-dark-secondary-txt text-sm font-medium border-t-2 pt-3 border-light-border dark:border-dark-border">
            <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Message:</span> {message?.message}
          </h1>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMessage;
