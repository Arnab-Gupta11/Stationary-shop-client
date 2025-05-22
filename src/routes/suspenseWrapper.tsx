import Loader from "@/components/shared/Loader";
import { Suspense } from "react";

export const suspenseWrapper = (element: JSX.Element) => {
  return <Suspense fallback={<Loader />}>{element}</Suspense>;
};
