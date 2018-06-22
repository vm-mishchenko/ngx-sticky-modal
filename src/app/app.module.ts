import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {StickyModalModule} from 'ngx-sticky-modal';

import {AppComponent} from './app.component';
import {ModalComponent} from './components/modal/modal.component';
import {RelativeBtnComponent} from './components/relative-btn/relative-btn.component';
import {RelativeSelectionComponent} from './components/relative-selection/relative-selection.component';

@NgModule({
    imports: [
        FormsModule,
        OverlayModule,
        BrowserModule,
        StickyModalModule
    ],
    declarations: [
        AppComponent,

        ModalComponent,
        RelativeBtnComponent,
        RelativeSelectionComponent
    ],
    entryComponents: [
        ModalComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
