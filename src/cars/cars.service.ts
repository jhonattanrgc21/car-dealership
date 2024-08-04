import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';
@Injectable()
export class CarsService {
  private _cars: Car[] = [];

  findAll() {
    return this._cars;
  }

  findById(id: string) {
    const car: Car = this._cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: ${id} not found`);
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this._cars.push(newCar);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findById(id);

    this._cars = this._cars.map((car) => {
      if (car.id == id) {
        carDB = {
          ...car,
          ...updateCarDto,
        };
        return carDB;
      }

      return car;
    });
  }

  delete(id: string){
    const car = this.findById(id);
    this._cars= this._cars.filter(car => car.id != id);
  }

  fillCarsWithSeedData(cars: Car[]){
    this._cars = cars;
  }
}
