import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private readonly _carsService: CarsService){}

    @Get()
    getAllCars(){
        return this._carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number){
        return this._carsService.findById(id);
    }

    @Post()
    createCar(@Body() payload: any){
        return payload;
    }

    
    @Put()
    updateCar(@Body() payload: any){
        return payload;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number){
        return id;
    }
}
