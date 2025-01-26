import { TCustomSelect } from "@/types/form.types";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const CustomSelect = ({ form, fieldName, label, placeholder, options }: TCustomSelect) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel className="text-slate-800 dark:text-slate-200">{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-primary-bg-light dark:bg-primary-bg-dark">
              {options?.map((option: Record<string, string>) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomSelect;
