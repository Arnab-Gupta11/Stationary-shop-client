import { TCustomInput } from "@/types/form.types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const CustomInput = ({ form, fieldName, inputType, label, placeholder }: TCustomInput) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-slate-800 dark:text-slate-200 text-start">{label}</FormLabel>
          <FormControl>
            <Input type={inputType} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomInput;
