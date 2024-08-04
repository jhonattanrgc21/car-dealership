import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly _carsService: CarsService,
    private readonly _brandsServices: BrandsService,
  ) {}
  populateDB() {
    this._carsService.fillCarsWithSeedData(CARS_SEED);
    this._brandsServices.fillBrandsWithSeedData(BRAND_SEED);
    return `Seed executed`;
  }
}
