import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordLength = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    console.log(value);

    if (!isNaN(parsedValue)) {
      this.passwordLength = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(`
      About to generate a passsword with the following:
      Includes letter: ${this.includeLetters}
      Includes number: ${this.includeNumbers}
      Includes symbol: ${this.includeSymbols}
    `);
    this.password = 'My Password!';
  }
}
