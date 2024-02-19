import { animate, style, transition, trigger } from "@angular/animations";

export const opacityState = trigger('opacityTrigger', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('1500ms',
            style({
                opacity: 1
            })
        )])
])

export const topToBottonState = trigger('topBottomTrigger', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)',
        }),
        animate('800ms ease-in-out',
            style({
                transform: 'translateY(0)'
            }))])
])

export const bottonToState = trigger('bottomTopTrigger', [
    transition(':enter', [
        style({
            transform: 'translateY(100%)',
        }),
        animate('800ms ease-in-out',
            style({
                transform: 'translateY(0)'
            }))])
])

export const letfRightState = trigger('leftRightTrigger', [
    transition(':enter', [
        style({
            transform: 'translateX(-100%)',
        }),
        animate('800ms ease-in-out',
            style({
                transform: 'translateX(0)'
            }))])
])
export const rightLeftState = trigger('rightLeftTrigger', [
    transition(':enter', [
        style({
            transform: 'translateX(-100%)',
        }),
        animate('800ms ease-in-out',
            style({
                transform: 'translateX(0)'
            }))])
])