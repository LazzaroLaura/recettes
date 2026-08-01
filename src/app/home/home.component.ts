import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  public ngOnInit() {
    const example = "503950-597501,73731-100184,79705998-79873916,2927-3723,35155-50130,52-82,1139-1671,4338572-4506716,1991-2782,1314489-1387708,8810810-8984381,762581-829383,214957-358445,9947038-10058264,4848455367-4848568745,615004-637022,5827946-5911222,840544-1026063,19-46,372804-419902,486-681,815-1117,3928-5400,28219352-28336512,6200009-6404247,174-261,151131150-151188124,19323-26217,429923-458519,5151467682-5151580012,9354640427-9354772901,262-475,100251-151187,5407-9794,8484808500-8484902312,86-129,2-18";

    const array = example.split(",");
    let firstNumber = '';
    let secondNumber = '';
    let incrementedFirstNumber = 0;
    let total = 0;

    //check first and last number
    array.forEach(element => {
      const tmpArray = element.split('-');
      firstNumber = tmpArray[0];
      secondNumber = tmpArray[1];
      incrementedFirstNumber = parseInt(firstNumber);

      if (!(firstNumber.length / 2).toString().includes(".")) {
        const firstHalfFirstNumber = firstNumber.substring(0, (firstNumber.length / 2));
        const secondHalfFirstNumber = firstNumber.substring((firstNumber.length / 2));

        if (firstHalfFirstNumber === secondHalfFirstNumber) {
          total = total + (parseInt(firstHalfFirstNumber.concat(secondHalfFirstNumber)));
        }
      }

      if (!(secondNumber.length / 2).toString().includes(".")) {
        const firstHalfSecondNumber = secondNumber.substring(0, (secondNumber.length / 2));
        const secondHalfSecondNumber = secondNumber.substring((secondNumber.length / 2));

        if (firstHalfSecondNumber === secondHalfSecondNumber) {
          total = total + (parseInt(firstHalfSecondNumber.concat(secondHalfSecondNumber)));
        }
      }

      //check in between numbers
      for (let i = parseInt(firstNumber); i < (parseInt(secondNumber) - 1); i++) {
        incrementedFirstNumber = incrementedFirstNumber + 1;

        const firstHalfBetweenNumber = incrementedFirstNumber.toString().substring(0, (incrementedFirstNumber.toString().length / 2));
        const secondHalfBetweenNumber = incrementedFirstNumber.toString().substring((incrementedFirstNumber.toString().length / 2));

        if (firstHalfBetweenNumber === secondHalfBetweenNumber) {
          total = total + (parseInt(firstHalfBetweenNumber.concat(secondHalfBetweenNumber)));
        }
      }
    })

    console.log(total);
  }
}
