export type TCategory = {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  parent?: string | null;
  isActive: boolean;
  createdBy: string;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type TCategoryOptions = {
  _id: string;
  name: string;
  icon: string;
  subcategory: {
    _id: string;
    name: string;
    icon: string;
  }[];
};
