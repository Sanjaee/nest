import { IsString, IsEmail, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsArray()
  posts: {
    title: string;
    content: string;
    published: boolean;
  }[];
}
