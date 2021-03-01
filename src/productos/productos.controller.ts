import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards
} from '@nestjs/common';

import { ProductosService } from './productos.service';
import { Productos } from './productos.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('productos')
export class ProductosController {
    constructor(private readonly productoServices: ProductosService) { }

    @Get()
    index(): Promise<Productos[]> {
      return this.productoServices.findAll();
    }    

    @Post('create')
    async create(@Body() productoData: Productos): Promise<any> {
      return this.productoServices.create(productoData);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() productoData: Productos): Promise<any> {
        productoData.prodcutoId = Number(id);
        console.log('Update #' + productoData.prodcutoId)
        return this.productoServices.update(productoData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.productoServices.delete(id);
    }  
}
