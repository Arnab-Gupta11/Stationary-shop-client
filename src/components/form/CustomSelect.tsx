import { TCustomSelect } from "@/types/form.types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select";

const CustomSelect = ({ form, fieldName, label, placeholder, children }: TCustomSelect) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-start ml-1 text-light-primary-text dark:text-dark-primary-txt">{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-primary-bg-light dark:bg-primary-bg-dark">{children}</SelectContent>
          </Select>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
