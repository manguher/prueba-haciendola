import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ProductosService } from './productos/productos.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [ProductosModule, AuthModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'BDPruebaHaciendola',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}