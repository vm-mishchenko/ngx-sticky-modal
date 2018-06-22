import {OverlayRef} from '@angular/cdk/overlay';

export class NgxStickyModalRef {
    constructor(private overlayRef: OverlayRef) {
    }

    close(): void {
        this.overlayRef.dispose();
    }
}
