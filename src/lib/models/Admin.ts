export interface Admin {
  Id: number;
  Username: string;
  PasswordHash: string;
  CreatedAt: Date;
}

export interface CreateAdminDto {
  Username: string;
  Password: string;
}

export interface UpdateAdminDto {
  Username?: string;
  Password?: string;
}

