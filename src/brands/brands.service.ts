import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto, UpdateBrandDto } from './dto/index';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private _brands: Brand[] = []

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    };
    this._brands.push(newBrand);
  }

  findAll() {
    return this._brands;
  }

  findById(id: string) {
    const brand: Brand = this._brands.find((brand) => brand.id === id);

    if (!brand) throw new NotFoundException(`Brand with id: ${id} not found`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findById(id);

    this._brands = this._brands.map((brand) => {
      if (brand.id == id) {
        brandDB.updatedAt = new Date().getTime()
        brandDB = {
          ...brandDB,
          name: updateBrandDto.name.toLocaleLowerCase(),
        };
        return brandDB;
      }

      return brand;
    });

    return brandDB;
  }

  remove(id: string) {
    const brand = this.findById(id);
    this._brands = this._brands.filter(brand => brand.id != id);
  }

  fillBrandsWithSeedData(brands: Brand[]){
    this._brands = brands;
  }
}
