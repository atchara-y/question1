import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'],
})
export class Question1Component implements OnInit {
  enteredNumber = null;
  form = new FormGroup({
    number: new FormControl(null),
    calculate: new FormControl(null),
  });

  result;
  selectedOption;
  currentInputNumber;
  options = [
    { name: 'isPrime', value: 'isPrime' },
    { name: 'isFibonacci', value: 'isFibonacci' },
  ];

  constructor() {
    this.selectedOption = 'isPrime';
  }

  ngOnInit(): void {}

  inputChange(event) {
    const valueInput = event.target.value;
    this.currentInputNumber = Math.round(valueInput);
    if (valueInput < 0) {
      this.currentInputNumber = 1;
    }
    if (this.selectedOption) this.checkOptionSelected();
  }

  dropdownChange(event) {
    const optionSelected = event.target.value;
    this.selectedOption = optionSelected;
    if (this.currentInputNumber) this.checkOptionSelected();
  }

  checkOptionSelected() {
    if (this.selectedOption === 'isPrime') {
      this.primeValidate();
    } else if (this.selectedOption === 'isFibonacci') {
      this.fibonacciValidate();
    }
  }

  primeValidate() {
    const n = this.currentInputNumber;
    if (n === 1) {
      return (this.result = false);
    } else if (n === 2) {
      return (this.result = true);
    } else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          return (this.result = false);
        }
      }
      return (this.result = true);
    }
  }

  fibonacciValidate() {
    const n = this.currentInputNumber;
    if (
      this.isPerfectSquare(5 * (n * n) - 4) ||
      this.isPerfectSquare(5 * (n * n) + 4)
    ) {
      return (this.result = true);
    } else {
      return (this.result = false);
    }
  }

  isPerfectSquare(x) {
    let square = Math.sqrt(x);
    return square * square === x;
  }
}
