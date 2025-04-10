export type TCategory = {
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
