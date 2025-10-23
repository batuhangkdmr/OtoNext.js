export interface SliderImage {
  Id: number;
  ImageUrl: string;
  CloudinaryPublicId: string;
  CreatedAt: Date;
}

export interface CreateSliderImageDto {
  ImageUrl: string;
  CloudinaryPublicId: string;
}

