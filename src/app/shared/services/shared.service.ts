import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private mode = new BehaviorSubject<boolean>(false)
  modeChange = this.mode.asObservable()
  constructor() { }

  onModeChange(change: boolean) {
    this.mode.next(change)
  }
}
