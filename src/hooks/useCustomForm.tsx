import { useForm, UseFormReturn, DefaultValues } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type UseFormHookReturn<TFormSchema extends ZodType> = [UseFormReturn<z.infer<TFormSchema>>];

const useCustomForm = <TFormSchema extends ZodType>(
  formSchema: TFormSchema,
  defaultValues: DefaultValues<z.infer<TFormSchema>>
): UseFormHookReturn<TFormSchema> => {
  const form = useForm<z.infer<TFormSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return [form];
};

export default useCustomForm;
