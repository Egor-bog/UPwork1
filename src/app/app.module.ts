import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-var/nav-bar.component';
import {CardHolderComponent} from './calculator/card-holder.component';
import {CardComponent} from './calculator/card.component';
import {CalculatorComponent} from './calculator/calculator.component';


@NgModule({
    imports: [
        BrowserModule,
        IvyCarouselModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CalculatorComponent,
        CardHolderComponent,
        CardComponent,
        NavBarComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
