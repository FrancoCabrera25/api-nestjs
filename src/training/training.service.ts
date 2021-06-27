import { Injectable } from '@nestjs/common';
import { WordsDict } from '../model/wordsDict';

@Injectable()
export class TrainingService {
  getTrainings(): string {
    return 'Trainings!';
  }

  getCantWordRepeatInText(text: string): WordsDict {
    const arrayText = text.split(' ');
    const wordsDict: WordsDict = {};
    arrayText.forEach((element) => {
      if (this.normalize(element) in wordsDict) {
        ++wordsDict[this.normalize(element)];
      } else {
        wordsDict[this.normalize(element)] = 1;
      }
    });

    console.log('result', wordsDict);
    return wordsDict;
  }

  private normalize(word: string): string {
    return word.toLowerCase().replace(/[.|,|¡|?|¿|]/g, '');
  }

  // return masked string
  createMasked(): string {
    const cc = '';
    const last4number = cc.slice(-4);
    const masked = last4number.padStart(cc.length, '#');
    return masked;
  }
}
