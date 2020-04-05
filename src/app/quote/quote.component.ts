
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
      "Posted by Mother Teresa",
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      2,
      "Posted by Franklin D. Roosevelt",
      "When you reach the end of your rope, tie a knot in it and hang on.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      3,
      "Posted by Margaret Mead",
      "Always remember that you are absolutely unique. Just like everyone else.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      4,
      "Posted By Robert Louis Stevenson",
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
      new Date(2020, 4, 5)
    ),
    new Quote(
      5,
      "Posted By Eleanor Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams..",
      new Date(2020, 4, 5)
    ),
    new Quote(
      6,
      "Posted by Benjamin Franklin",
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

