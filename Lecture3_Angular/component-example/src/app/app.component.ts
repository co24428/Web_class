import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './components/person/person.component';
import { InputOutputComponent } from './components/input-output/input-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, 
    PersonComponent, InputOutputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = 'Ian';
  items = ['Ball', 'Laptop', 'Notebook']
  people: string[] = ['John', 'Tom', 'Jade'];
  selectedName: string | undefined;

  addPerson(newPerson: any){
    this.name = newPerson;
    this.people.push(newPerson);
  }
  crossOffPerson(person: string) {
    console.warn('Parent says: crossing off', person);
  }
  selectPerson(person: string) {
    this.selectedName = person;
    alert('you selected ' + person);
  }
}
