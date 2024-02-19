import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDark: boolean = false;
  light: string = "bg-gradient-to-b from-[#DBE6F2] via-[#DCEAF4] via-[#EEF7F8] via-75% to-[#FFE0D4]";
  dark: string = "bg-gradient-to-b from-[#150d1a] via-[#160c19] via-[#220e1c] via-75% to-[#2c1414]";

  constructor(private sharedService: SharedService) {
    this.sharedService.modeChange.subscribe((mode: boolean) => this.isDark = mode)
  }
}
