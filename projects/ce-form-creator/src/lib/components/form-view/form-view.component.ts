import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CeLayoutModule } from '@codeffekt/ce-core';

@Component({
    selector: 'form-view',
    templateUrl: './form-view.component.html',
    standalone: true,
    styleUrls: ['./form-view.component.scss'],
    imports: [
        CeLayoutModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class FormViewComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    @HostListener('panstart', ['$event'])
    onPanStart(e: Event) {
        console.log('PAN START form')
        e.preventDefault();
    }

    @HostListener('pan', ['$event'])
    onPan(e: Event & { deltaX: number, deltaY: number }) {
        e.preventDefault();
    }
}