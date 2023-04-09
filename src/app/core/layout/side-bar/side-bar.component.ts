import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxsModule, Select, Store } from '@ngxs/store';
import { CoreState } from '../../store/states';
import { Observable, Subscription } from 'rxjs';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxsModule, IconComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnDestroy {
  @Select(CoreState.GetSideBarStatus) sideBarStatus$: Observable<boolean>;

  menus: any = {
    mainMenuList: [
      {
        icon: 'assets/images/menu-icons/dashboard.svg',
        name: 'Dashboard',
        url: 'dashboard'
      },
      {
        icon: 'assets/images/menu-icons/card.svg',
        name: 'Cards Management',
        url: 'cards_management'

      },
      {
        icon: 'assets/images/menu-icons/requests.svg',
        name: 'Requests',
        url: 'requests'
      },
      {
        icon: 'assets/images/menu-icons/transactions.svg',
        name: 'Transactions',
        url: 'transactions'
      },
    ],
    seconderyMenuList: [
      {
        icon: 'assets/images/menu-icons/help.svg',
        name: 'Help & Support',
        url: 'help'
      },
      {
        icon: 'assets/images/menu-icons/privacy.svg',
        name: 'Privacy Policy',
        url: 'privacy'
      },
      {
        icon: 'assets/images/menu-icons/privacy.svg',
        name: 'Terms & Conditions',
        url: 'terms'
      },
      {
        icon: 'assets/images/menu-icons/faq.svg',
        name: 'FAQs',
        url: 'faq',
      },
      {
        icon: 'assets/images/menu-icons/setting.svg',
        name: 'Settings',
        url: 'settings',
      },
    ],
    finalMenuList: [
      {
        icon: 'assets/images/menu-icons/logout.svg',
        name: 'Log out',
        url: 'logout',
      },
    ]
  };
  toggle = false;
  subscription: Subscription;
  constructor(private store: Store) {
    this.subscription = this.sideBarStatus$.subscribe(r => {
      this.toggle = r;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  objToArray(object: any) {
    let piece1 = Object.keys(object);
    let piece2 = Object.values(object);
    let result: any[] = [];
    for (var i = 0; i < piece1.length; i++) {
      result.push(piece2[i]);
    }
    return result;
  }

}
