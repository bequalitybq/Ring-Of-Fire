import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-task',
  templateUrl: './game-task.component.html',
  styleUrls: ['./game-task.component.scss']
})
export class GameTaskComponent implements OnInit, OnChanges {
  cardAction =  [
    {
      "title": "Shot oder Wahrheit",
      "description": "Beantworte eine peinliche Frage ehrlich – oder trinke einen Shot!"
    },
    {
      "title": "Trinkpartner",
      "description": "Wähle eine Person aus, die bei jedem deiner Schlücke ebenfalls trinken muss, bis die Runde vorbei ist."
    },
    {
      "title": "König der Regeln",
      "description": "Erfinde eine neue Trinkregel, die bis zum Ende des Spiels gilt!"
    },
    {
      "title": "Links oder Rechts?",
      "description": "Alle Spieler links von dir trinken einen Schluck, alle rechts von dir zwei."
    },
    {
      "title": "Flachwitz Challenge",
      "description": "Erzähle einen Flachwitz. Wenn jemand lacht, muss er trinken!"
    },
    {
      "title": "Schlückchen Roulette",
      "description": "Drehe eine Flasche – die Person, auf die sie zeigt, trinkt 3 Schlücke."
    },
    {
      "title": "Kein Nein",
      "description": "Du darfst für die nächsten 5 Minuten nicht 'Nein' sagen. Falls doch – trinke einen Shot!"
    },
    {
      "title": "Doppelgänger",
      "description": "Wähle eine Person, die ab jetzt immer trinken muss, wenn du trinkst!"
    },
    {
      "title": "Reimzwang",
      "description": "Jeder muss einen Satz sagen, der sich auf den vorherigen reimt. Wer es nicht schafft, trinkt!"
    },
    {
      "title": "Prost mit Nachbarn",
      "description": "Stoße mit deinen beiden Nachbarn an und trinkt gemeinsam je einen Schluck."
    }
  ];

  title = '';
  description = '';
  @Input() card!: string;
  constructor() {}
  ngOnInit(): void {

  }
  ngOnChanges(): void {
    if (this.card) {
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
  }};
}
