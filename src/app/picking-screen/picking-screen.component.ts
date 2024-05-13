import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { OptionComponent } from '../option/option.component';
import { Thing } from '../thing';
import { FetchParametersService } from '../services/fetch-parameters.service';

@Component({
  selector: 'app-picking-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picking-screen.component.html',
  styleUrl: './picking-screen.component.css'
})

export class PickingScreenComponent implements OnInit {
  
  
  /*
  OptionsList: Thing[] = [{
    id: 0,
    name: 'kitten',
    photo: '/assets/kitten.png',
    choice: 0,
  },
  {
    id: 1,
    name: 'dog',
    photo: '/assets/dog.png',
    choice: 0,
  },
  {
    id: 2,
    name: 'goldfish',
    photo: '/assets/goldfish.png',
    choice: 0,
  },
  {
    id: 3,
    name: 'slime',
    photo: '/assets/slime.png',
    choice: 0,
  }
  ];
  */

  OptionsList: Thing[] = [];

  selectedOptions: Thing[] = [];

  chosenOptions: number[] = new Array(5).fill(0);

  

  constructor(private fetchParametersService: FetchParametersService) {}

  ngOnInit(): void {
    this.fetchParametersService.getParameters().subscribe({
      next: (data: Thing[]) => {
        this.OptionsList = data;
        this.getNextOptions();
      },
      error: (error)=>{
        console.error("That was bad: ", error);
      }
    });  
  } 

  pickItemClick(id: number) {
    this.chosenOptions[id] += 1;
    console.log(this.chosenOptions);
    if (!this.areResultsIn()){
      this.getNextOptions();
    }
  }

  getNextOptions(){
    const shuffledOptions = this.shuffleArray(this.OptionsList);
    this.selectedOptions = shuffledOptions.slice(0, 2);
    //console.log(this.OptionsList);
    //console.log(this.selectedOptions);
  }

  areResultsIn(): any {
    let isAnyResultIn = false;
    this.chosenOptions.forEach((num) =>{
      if (num > 9){
        isAnyResultIn = true;
      }
    }); 
    return isAnyResultIn;
  }
    
  tryAgainClick(): void{
    this.chosenOptions = [];
    let i=0;
    this.OptionsList.forEach(element => {
      this.chosenOptions[i] = 0;  i++;
    });
    window.location.reload()
  }

  shuffleArray(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  gotAWinner(): any{
    let winnerFound = false;
    this.chosenOptions.forEach(numTimesChosen => {
      if (numTimesChosen>4){
        winnerFound = true;
      }
    }); return winnerFound;
  }

  getWinner(): any{
    return this.OptionsList[this.chosenOptions.indexOf(Math.max(...this.chosenOptions))]
  }

}
