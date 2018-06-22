import {Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {Injectable} from '@angular/core';
import {INgxStickyModalConfig} from './ngx-sticky-modal-config.interface';
import {NgxStickyModalRef} from './ngx-sticky-modal-ref';
import {DEFAULT_MODAL_OVERLAY_CONFIG} from './ngx-sticky-modal.config';

@Injectable({
    providedIn: 'root'
})
export class NgxStickyModalService {
    constructor(private overlay: Overlay) {
    }

    open(config: INgxStickyModalConfig) {
        // Override default configuration
        config.overlayConfig = {
            ...DEFAULT_MODAL_OVERLAY_CONFIG,
            ...config.overlayConfig
        };

        // Returns an OverlayRef (which is a PortalHost)
        const overlayRef = this.createOverlay(config);

        // Create ComponentPortal that can be attached to a PortalHost
        const filePreviewPortal = new ComponentPortal(config.component);

        // Attach ComponentPortal to PortalHost
        overlayRef.attach(filePreviewPortal);

        const dialogRef = new NgxStickyModalRef(overlayRef);

        overlayRef.backdropClick().subscribe(_ => dialogRef.close());

        return dialogRef;
    }

    private createOverlay(config: INgxStickyModalConfig) {
        // Returns an OverlayConfig
        const overlayConfig = this.getOverlayConfig(config);

        // Returns an OverlayRef
        return this.overlay.create(overlayConfig);
    }

    private getOverlayConfig(config: INgxStickyModalConfig): OverlayConfig {
        /*const positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();*/

        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(config.relativeTo)
            .withPositions([
                /*{
                    originX: 'start', // end
                    originY: 'bottom', // top
                    overlayX: 'start',
                    overlayY: 'top'
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                },*/
                {
                    originX: 'center',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom'
                }
            ]);

        console.log(`positionStrategy`);

        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.overlayConfig.hasBackdrop,
            backdropClass: config.overlayConfig.backdropClass,
            panelClass: config.overlayConfig.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy
        });

        return overlayConfig;
    }
}
