import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MenuCategory } from '../models/menu-category';
import { MenuItem } from '../models/menu-item';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuList: {
    category: MenuCategory,
    itemList: MenuItem[]
  }[];
  displayedMenuList: {
    category: MenuCategory,
    itemList: MenuItem[]
  }[];

  constructor(private navControlor: NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuList = undefined;
    this.displayedMenuList = this.menuList;
    this.fetchMenuList();
  }

  async fetchMenuList() {
    this.menuList = [];
    let response = await fetch(
      localStorage.getItem('serverApiBaseUrl') + '/menu/category',
      {
        method: 'GET',
        credentials: 'include'
      }
    );
    const categoryList = await response.json() as MenuCategory[];
    response = await fetch(
      localStorage.getItem('serverApiBaseUrl') + '/menu/item',
      {
        method: 'GET',
        credentials: 'include'
      }
    );
    const itemList = await response.json() as MenuItem[];

    categoryList.forEach(category =>
      this.menuList.push({
        category,
        itemList: itemList.filter(item => item.categoryId === category.id)
      })
    );
    const uncategorizedItemList = itemList.filter(item => !categoryList.find(category => category.id === item.categoryId));
    if (uncategorizedItemList.length > 0) {
      this.menuList.push({
        category: { name: 'Not Categorized' } as any,
        itemList: uncategorizedItemList
      });
    }
    this.displayedMenuList = this.menuList;
  }

  searchContentChangedHandler(value: string) {
    if (value) {
      this.displayedMenuList = this.menuList.map(menu => (
        {
          category: menu.category,
          itemList: menu.category.name.match(new RegExp(value, 'i')) ?
            menu.itemList :
            menu.itemList.filter(item => item.name.match(new RegExp(value, 'i')))
        }
      )).filter(menu => menu.category.name.match(new RegExp(value, 'i')) || menu.itemList.length > 0);
    } else {
      this.displayedMenuList = this.menuList;
    }
  }

  goToCategoryView() {
    this.navControlor.navigateForward('/menu/category');
  }

  goToMenuItemDetailView(itemId: string) {
    this.navControlor.navigateForward('/menu/item/' + itemId);
  }

}


@Pipe({ name: 'menuItemStatusColor' })
export class MenuItemStatusColorPipe implements PipeTransform {

  transform(status: string): string {
    switch (status) {
      case 'Available':
        return 'primary';
      case 'Unavailable':
        return 'danger';
    }
  }

}