import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './shared/database/database.module';

import { AuthModule } from './modules/auth/auth.module';

@Module({
    controllers: [],
    providers: [],
    imports: [UsersModule, DatabaseModule, AuthModule],
})
export class AppModule {}
