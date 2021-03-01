import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './productos.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Productos]),
  ],
  providers: [ProductosService],
  controllers: [ProductosController]
})
export class ProductosModule {}
