
import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";


@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
  animations: [""]
})
export class QuoteComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  quotes: Quote[] = [
    
    new Quote(
      1,
      "Author: Mother Teresa",
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      2,
      "Author: Franklin Rosevel",
      "When you reach the end of your rope, tie a knot in it and hang on.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      3,
      "Author:  Margaret Mead",
      "Always remember that you are absolutely unique. Just like everyone else.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      4,
      "Author: Robert Stevenson",
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      5,
      "Author: Eleano Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams..",
      new Date(2020, 4, 5)
    ),
    new Quote(
      6,
      "Author:  Joshua J Marine",
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      7,
      "Author: Abraham Lincoln",
      "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down",
      new Date(2020, 4, 5)
    ),
    new Quote(
      8,
      "Author: Benjamin Franklin",
      ".Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      new Date(2020, 4, 5)
    )
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit() {
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 500
        },
        color: {
          value: "#ff0000"
        },
        shape: {
          type: "circle",
          polygon: {
            nb_sides: 5
          }
        }
      }
    };
  }
}

// import { Component, OnInit } from '@angular/core';
// import { Quote } from '../quote';

// @Component({
//   selector: 'app-quote',
//   templateUrl: './quote.component.html',
//   styleUrls: ['./quote.component.css']
// })
// export class QuoteComponent implements OnInit {
//   quotes:Quote[] = [
//   new Quote (1,'You gotta dance like there is no one watching', 'Author:Rodgers',new Date(2020,1,10),0,0),
//   new Quote (2,'Don’t Let Yesterday Take Up Too Much Of Today', 'Author:Whitney White',new Date(2020,1,10),0,0),
//   ];
//   toggleDetails(index) {
//     this.quotes[index].showDescription = !this.quotes[index].showDescription;
//   }

//   addNewQuote(quote) {
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength + 1;
//     quote.completeDate = new Date(quote.completeDate);
//     this.quotes.push(quote);
//   }


//   clickCounter = 0;
//   dislikeCounter = 0;

//   highestCounter = 0;
//   bestQuote:string;

//   findHighestVotes(){
//     this.highestCounter = 0;
//     for(let i=0; i < this.quotes.length; i++){
//       if(this.quotes[i].clickCounter>this.highestCounter){
//         this.highestCounter = this.quotes[i].clickCounter;
//         this.dislikeCounter = this.quotes[i].dislikeCounter;
//         this.bestQuote = this.quotes[i].name;
//       }
//     }
//   }
 
//   deleteQuote(isComplete, index) {
//     if (isComplete) {
//       let toDelete = confirm(
//         `Are you really sure you want to delete ${this.quotes[index].name}?`
//       );

//       if (toDelete) {
//         this.quotes.splice(index, 1);
//       }
//     }
//   }

//   countClick(quote) {
//     quote.clickCounter = quote.clickCounter + 1;
//   }
//   countDislike(quote) {
//     quote.dislikeCounter = quote.dislikeCounter + 1;
//   }


//   constructor() {}

//   ngOnInit() {
//   }

// }