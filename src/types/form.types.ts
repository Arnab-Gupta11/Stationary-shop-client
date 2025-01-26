/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

//Custom Select Component type
export type TCustomSelect = {
  form: any;
  fieldName: string;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
};

//Custom Input Component type
export type TCustomInput = { form: any; fieldName: string; inputType: string; label: string; placeholder: string };

//Custom Form Component type
export type TCustomForm = {
  children: ReactNode;
  form: any;
  onSubmit: any;
};
