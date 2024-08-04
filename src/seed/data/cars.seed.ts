import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'bran 1',
    model: 'carro 1',
  },
  {
    id: uuid(),
    brand: 'bran 2',
    model: 'carro 2',
  },
  {
    id: uuid(),
    brand: 'bran 3',
    model: 'carro 3',
  },
];
