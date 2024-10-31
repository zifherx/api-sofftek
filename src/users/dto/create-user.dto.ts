import { IsBoolean, IsEmail, IsNumber, IsString, Max, Min } from "class-validator"

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email: string
    
    @IsString()
    role: string
    
    @IsNumber()
    @Min(0)
    @Max(100)
    age: number

    @IsString()
    country: string
    
    @IsBoolean()
    isActive: Boolean
}