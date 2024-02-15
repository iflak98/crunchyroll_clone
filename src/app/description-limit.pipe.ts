// description-limit.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionLimit'
})
export class DescriptionLimitPipe implements PipeTransform {
  transform(description: string): string {
    if (!description) return ''; // Handle null or undefined description
    
    const words = description.split(' ');
    if (words.length <= 80) {
      return description; // If the description is already less than or equal to 80 words, return it as is
    } else {
      return words.slice(0, 50).join(' ') + '...'; // Otherwise, truncate the description to 80 words and append ellipsis
    }
  }
}
