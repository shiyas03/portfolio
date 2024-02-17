import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgIconsModule } from '@ng-icons/core';
import { heroSun, heroChevronDown, heroMoon, heroMapPin, heroComputerDesktop, heroArrowRight, heroArrowUpRight } from '@ng-icons/heroicons/outline'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ heroSun, heroChevronDown, heroMoon, heroMapPin, heroComputerDesktop, heroArrowRight, heroArrowUpRight })
  ],
  exports: [NgIconsModule]
})
export class IconModule { }
