import {OverlayConfig} from '@angular/cdk/overlay';
import {ElementRef} from '@angular/core';

export interface INgxStickyModalConfig extends OverlayConfig {
    component: any;
    relativeTo: ElementRef | HTMLElement
    overlayConfig?: OverlayConfig,
}
