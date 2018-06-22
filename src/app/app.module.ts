import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxStickyModalModule} from 'ngx-sticky-modal';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {RelativeBtnComponent} from './components/relative-btn/relative-btn.component';

@NgModule({
    imports: [
        OverlayModule,
        BrowserModule,
        NgxStickyModalModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        RelativeBtnComponent
    ],
    entryComponents: [
        MenuComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
