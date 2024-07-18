import { NgModule } from "@angular/core";
import { Counter } from "./Components/counter.component";

@NgModule({
    declarations: [
        Counter
    ],
    exports: [
        Counter
    ]


})

export class CounterModule { }