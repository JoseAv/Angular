import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dbzComponent } from './Pages/main-pages.component';
import { ListDbzComponent } from './components/list/list.component'
import { CharComponent } from './components/add/char/char.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    dbzComponent,
    ListDbzComponent,
    CharComponent
  ],
  exports: [
    dbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],

})
export class DbzModule {

}
