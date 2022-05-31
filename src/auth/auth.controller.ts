import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signin')
  signin(@Body() x: any) {}
}
