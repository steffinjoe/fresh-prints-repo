import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private gituser = new Subject<any>();
  gituser$ = this.gituser.asObservable();

  constructor() { }

  updateData(data: any) {
    this.gituser.next(data);
  }
}