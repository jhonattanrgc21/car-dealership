import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private _cars: any[] = [
        {
            id: 1,
            name: 'carro 1'
        },
        {
            id: 2,
            name: 'carro 2'
        },
        {
            id: 3,
            name: 'carro 3'
        }
    ];

    findAll(){
        return this._cars;
    }

    findById(id: number){
        const car: any = this._cars.find(car => car.id === id);

        if(!car) throw new NotFoundException(`Car with id: ${id} not found`);
        return car;
    }

}
