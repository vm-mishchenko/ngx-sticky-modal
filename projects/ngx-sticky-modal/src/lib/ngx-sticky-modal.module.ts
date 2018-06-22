import {OverlayModule} from '@angular/cdk/overlay';
import {NgModule} from '@angular/core';
import {NgxStickyModalComponent} from './ngx-sticky-modal.component';

@NgModule({
    imports: [
        OverlayModule
    ],
    declarations: [
        NgxStickyModalComponent
    ],
    exports: [
        NgxStickyModalComponent
    ],
    entryComponents: []
})
export class NgxStickyModalModule {
}
