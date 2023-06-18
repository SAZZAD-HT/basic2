import { Module } from '@nestjs/common';
import { usersController } from './User/users.controller';
import { AdminController } from './Admin/Admin.controller';
import { AdminService } from './Admin/Admin.Services';


@Module({
  providers: [AdminService],

  controllers: [usersController,AdminController],

})
export class AppModule {}
