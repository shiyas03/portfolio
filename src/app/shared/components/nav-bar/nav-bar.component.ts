import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { IconModule } from 'src/app/lib/icons/icon.module';
import { SharedService } from '../../services/shared.service';
import { topToBottonState } from '../../animations/animation';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [CommonModule, IconModule],
  animations:[topToBottonState]
})
export class NavBarComponent {

  isDark: boolean = false
  light: string = 'text-black bg-[#DBE6F2]'
  dark: string = 'text-white bg-[#150d1a]'

  constructor(private sharedService: SharedService) { }
  onModeClicks() {
    this.isDark = !this.isDark
    this.sharedService.onModeChange(this.isDark)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    console.log('working');

  }

}
