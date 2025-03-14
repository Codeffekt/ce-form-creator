import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
    selector: '[clickStopPropagation]',
    standalone: false
})
export class OnClickStopPropagation {

    @Output('clickStopPropagation') clickStopPropagation: EventEmitter<boolean> = new EventEmitter<boolean>();

    @HostListener('click', ['$event']) onClick(event: MouseEvent) {
        event.stopPropagation();
        this.clickStopPropagation.next(true);
    }
}