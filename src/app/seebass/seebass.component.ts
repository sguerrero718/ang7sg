import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-seebass',
    templateUrl: './seebass.component.html',
    styleUrls: ['./seebass.component.css']
})
export class SeebassComponent implements OnInit {

    private people: any[];
    teamTitle = 'SA partial team';

    constructor() { }

    ngOnInit() {
        this.people = [
            { name: 'Sergio', lname: 'Guerrero' },
            { name: 'Sabina', lname: 'Nilakhe' },
            { name: 'Miguel', lname: 'Silva' },
            { name: 'Joe', lname: 'Doe' }
        ];
    }

}
