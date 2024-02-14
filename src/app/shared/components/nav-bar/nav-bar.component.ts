import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroSun } from '@ng-icons/heroicons/outline'
import { IconModule } from 'src/app/lib/icons/icon.module';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [CommonModule, IconModule]
})
export class NavBarComponent {

  isDark: boolean = false
  light: string = 'text-black'
  dark: string = 'text-white'

  constructor(private sharedService: SharedService) { }
  onModeClicks() {
    this.isDark = !this.isDark
    this.sharedService.onModeChange(this.isDark)
  }

}
