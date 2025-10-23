export interface Product {
  Id: number;
  Name: string;
  Description?: string;
  ImageUrl?: string;
  CloudinaryPublicId?: string;
  CategoryId?: number;
  SubCategoryId?: number;
  CreatedAt: Date;
  // Join fields
  CategoryName?: string;
  SubCategoryName?: string;
}

export interface CreateProductDto {
  Name: string;
  Description?: string;
  ImageUrl?: string;
  CloudinaryPublicId?: string;
  CategoryId?: number;
  SubCategoryId?: number;
}

export interface UpdateProductDto {
  Name?: string;
  Description?: string;
  ImageUrl?: string | null;
  CloudinaryPublicId?: string | null;
  CategoryId?: number;
  SubCategoryId?: number;
}

