import { Component, EventEmitter, Output, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isDark: boolean = false;
  light: string = 'text-[#220e1c]';
  dark: string = 'text-stone-400'

  constructor(private sharedService: SharedService, private router: Router) {
    this.sharedService.modeChange.subscribe(mode => this.isDark = mode)
  }

  onLinkClick(link: string) {
    window.open(link)
  }

  onMoreClicks(){
    window.open('https://github.com/shiyas03')
  }

}
