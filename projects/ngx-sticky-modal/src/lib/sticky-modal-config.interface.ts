import {OverlayConfig} from '@angular/cdk/overlay';
import {ConnectedPosition} from '@angular/cdk/overlay/typings/position/flexible-connected-position-strategy';
import {ElementRef} from '@angular/core';

export enum StickyPositionStrategy {
    flexibleConnected = 'flexibleConnected',
    coordinate = 'coordinate'
}

export interface StickyFlexiblePositionStrategy {
    name: StickyPositionStrategy.flexibleConnected;

    options: {
        relativeTo: ElementRef | HTMLElement;
    };
}

export interface StickyCoordinatePositionStrategy {
    name: StickyPositionStrategy.coordinate;

    options: {
        clientX: number;
        clientY: number;
    };
}

export interface IStickyModalConfig {
    component: any;
    positionStrategy: StickyFlexiblePositionStrategy | StickyCoordinatePositionStrategy;
    closeOnEscape?: boolean;
    data?: object;
    position?: ConnectedPosition;
    overlayConfig?: OverlayConfig;
}
