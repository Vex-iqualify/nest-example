import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

// See https://docs.nestjs.com/pipes

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(array: any, metadata: ArgumentMetadata) {
    // Manipulate input data in some way 
    array.sort()

    // Send to next pipe or nest controller for this route
    return array;
  }
}
