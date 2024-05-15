import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UtilsService {
  public generateUID() {
    // I generate the UID from two parts here
    // to ensure the random number provide enough bits.
    let firstPartNumb = (Math.random() * 46656) | 0;
    let secondPartNumb = (Math.random() * 46656) | 0;
    let firstPart = ("000" + firstPartNumb.toString(36)).slice(-3);
    let secondPart = ("000" + secondPartNumb.toString(36)).slice(-3);
    return firstPart + secondPart;
  }
}
