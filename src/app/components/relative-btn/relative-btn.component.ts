import {ConnectedPosition} from '@angular/cdk/overlay/typings/position/flexible-connected-position-strategy';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {StickyModalService, StickyPositionStrategy} from 'ngx-sticky-modal';
import {ModalComponent} from '../modal/modal.component';

@Component({
    selector: 'app-relative-btn',
    templateUrl: 'relative-btn.component.html',
    styleUrls: ['relative-btn.component.scss']
})
export class RelativeBtnComponent implements OnInit {
    @ViewChild('btn') btn: ElementRef;

    model: ConnectedPosition = {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top'
    };

    constructor(private ngxStickyModalService: StickyModalService) {
    }

    ngOnInit() {
    }

    showModal() {
        const modalRef = this.ngxStickyModalService.open({
            component: ModalComponent,
            positionStrategy: {
                name: StickyPositionStrategy.flexibleConnected,
                options: {
                    relativeTo: this.btn
                }
            },
            position: this.model,
            overlayConfig: {
                hasBackdrop: false
            }
        });

        modalRef.result.then(() => {
            console.log('success close');
        }, () => {
            console.log('dismiss close');
        });
    }
}
