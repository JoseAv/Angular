import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home/gifs-page-home.component';
import { SearchComponent } from './components/search/gifs-components-search.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [HomePagesComponent, SearchComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [HomePagesComponent]
})
export class GifsModule { }
