/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useForm, UseFormProps, FieldValues } from "react-hook-form";

type UseAsyncFormOptions<T extends FieldValues> = UseFormProps<T> & {
  asyncData: Partial<T> | undefined;
};

export function useAsyncForm<T extends FieldValues>({ asyncData, ...formOptions }: UseAsyncFormOptions<T>) {
  const form = useForm<T>(formOptions);

  useEffect(() => {
    if (asyncData) {
      form.reset({
        ...form.getValues(),
        ...asyncData,
      });
    }
  }, [asyncData]);

  return form;
}
