export interface Category {
  Id: number;
  Name: string;
  ParentId?: number;
  CreatedAt: Date;
  // Relations
  SubCategories?: Category[];
}

export interface CreateCategoryDto {
  Name: string;
  ParentId?: number;
}

export interface UpdateCategoryDto {
  Name?: string;
  ParentId?: number;
}

