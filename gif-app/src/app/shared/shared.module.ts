import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [SidebarComponent],
    declarations: [SidebarComponent],
    providers: [],
})
export class SharedModule { }
