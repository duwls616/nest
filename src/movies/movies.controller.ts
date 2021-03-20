import { 
    Body, Controller, Delete, Get, Param, Patch, Post, Put 
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll(){
        return "This will return all movies";
    }

    @Get("/:id")
    getOne(@Param("id") movieId:string){
        return `This will return one movie with id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string) {
        return `This will delete a movie ${movieId}`;
    }

    @Patch('/:id')
    path(@Param('id') movieId: string) {
        return `This will patch a movie ${movieId}`;
    }
}
