import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, ElementRef, HostListener } from '@angular/core';
import { CeFormCreatorCanvasComponent } from '../form-creator-canvas.component';
import 'hammerjs';

function clamp(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n));
}

@Component({
    selector: 'zoom-pan-container',
    templateUrl: './zoom-pan-container.component.html',
    styleUrls: ['./zoom-pan-container.component.scss'],
    standalone: true,
    animations: [
        trigger('transformAnimation', [state(
            '*',
            style({ transform: '{{transform}}' }),
            { params: { transform: 'scale(1)', duration: '0s' } }),
        transition('* => *', animate('{{duration}} ease'))])]
})
export class ZoomPanContainerComponent {
    private scale = 1;
    private translate: [number, number] = [0, 0];
    private translateOnPanStart: [number, number] = [0, 0];

    transformAnimationState = {
        value: this.scale + this.translate[0] + this.translate[1],
        params: {
            transform: 'scale(1)',
            duration: '0s'
        }
    };

    @ContentChild(CeFormCreatorCanvasComponent, { read: ElementRef }) canvas!: ElementRef;

    constructor(private elementRef: ElementRef) { }

    @HostListener('panstart', ['$event'])
    onPanStart(e: Event) {

        const element = e.target as Element;
        const shouldPan = !(element.matches('form') || element.matches('ce-form-creator-canvas-form') || element.matches('ce-column'));
        if (shouldPan) {
            this.translateOnPanStart = [...this.translate] as [number, number];
            e.preventDefault();
        }
    }

    @HostListener('pan', ['$event'])
    onPan(e: Event & { deltaX: number, deltaY: number }) {
        const element = e.target as Element;
        const shouldPan = !(element.matches('form') || element.matches('ce-form-creator-canvas-form') || element.matches('ce-column'));
        if (shouldPan) {
            this.translate = [this.translateOnPanStart[0] + e.deltaX, this.translateOnPanStart[1] + e.deltaY];
            this.updateTransformAnimationState('0s');
            e.preventDefault();
        }
    }

    @HostListener('mousewheel', ['$event'])
    onMouseWheel(e: any) {
        const currentScale = this.scale;
        const newScale = clamp(this.scale + Math.sign(e.wheelDelta) / 10.0, 1, 3.0);
        if (currentScale !== newScale) {


            this.translate = this.calculateTranslationToZoomPoint(currentScale, newScale, this.translate, e);
            this.scale = newScale;

            this.updateTransformAnimationState();
        }

        e.preventDefault();
    }

    private calculateTranslationToZoomPoint(currentScale: number, newScale: number, currentTranslation: [number, number], e: { clientX: number, clientY: number },): [number, number] {
        // kudos to this awesome answer on stackoverflow:
        // https://stackoverflow.com/a/27611642/1814576
        const [eventLayerX, eventLayerY] = this.projectToLayer(e);

        const xAtCurrentScale = (eventLayerX - currentTranslation[0]) / currentScale;
        const yAtCurrentScale = (eventLayerY - currentTranslation[1]) / currentScale;

        const xAtNewScale = xAtCurrentScale * newScale;
        const yAtNewScale = yAtCurrentScale * newScale;

        return [eventLayerX - xAtNewScale, eventLayerY - yAtNewScale];
    }

    private projectToLayer(eventClientXY: { clientX: number, clientY: number }): [number, number] {
        const layerX = Math.round(eventClientXY.clientX - this.clientX);
        const layerY = Math.round(eventClientXY.clientY - this.clientY);
        return [layerX, layerY];
    }

    private get clientX() {
        return (this.elementRef.nativeElement as HTMLElement).getBoundingClientRect().left;
    }

    private get clientY() {
        return (this.elementRef.nativeElement as HTMLElement).getBoundingClientRect().top;
    }

    private updateTransformAnimationState(duration = '.5s') {
        this.transformAnimationState = {
            value: this.scale + this.translate[0] + this.translate[1],
            params: {
                transform: `translate3d(${this.translate[0]}px, ${this.translate[1]}px, 0px) scale(${this.scale})`,
                duration
            }
        }
    }

    reset() {
        this.scale = 1;
        this.translate = [0, 0];
        this.updateTransformAnimationState();
    }
}