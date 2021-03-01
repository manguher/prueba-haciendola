import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './productos.entity'
import { UpdateResult, DeleteResult } from 'typeorm';


@Injectable()
export class ProductosService {

    constructor(
        @InjectRepository(Productos)
        private productoRepository: Repository<Productos>,
    ) { }

    async findAll(): Promise<Productos[]> {
        return await this.productoRepository.find();
    }

    async create(producto: Productos): Promise<Productos> {
        return await this.productoRepository.save(producto);
    }

    async update(producto: Productos): Promise<UpdateResult> {
        return await this.productoRepository.update(producto.prodcutoId, producto);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.productoRepository.delete(id);
    }
}
