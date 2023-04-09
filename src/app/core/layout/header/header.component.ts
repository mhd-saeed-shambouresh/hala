import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule, Select, Store } from '@ngxs/store';
import { ToggleSideBar } from '../../store/actions';
import { IconComponent } from '../../ui/icon/icon.component';
import { CoreState } from '../../store/states';
import { Observable, Subscription } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgxsModule, IconComponent, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  @Select(CoreState.GetSideBarStatus) sideBarStatus$: Observable<boolean>;
  toggle = false;
  selectedLanguage = "English";
  subscription: Subscription;
  constructor(private store: Store) {
    this.subscription = this.sideBarStatus$.subscribe(r => {
      this.toggle = r;
    })
  }
  toggleClick() {
    this.store.dispatch(new ToggleSideBar());
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
