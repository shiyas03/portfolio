import { Component, HostListener, } from '@angular/core';
import { bottonToState, letfRightState, opacityState, rightLeftState, topToBottonState } from 'src/app/shared/animations/animation';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [opacityState, topToBottonState, bottonToState]
})
export class HomeComponent {

  isDark: boolean = false;
  light: string = 'text-[#220e1c]';
  dark: string = 'text-stone-400'

  envasionPreview: boolean = false;
  fitgoPreview: boolean = false;
  traderowPreview: boolean = false

  constructor(private sharedService: SharedService) {
    this.sharedService.modeChange.subscribe(mode => this.isDark = mode)
  }

  onLinkClick(link: string) {
    window.open(link)
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

}
