import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgxStickyModalService} from 'ngx-sticky-modal';
import {MenuComponent} from './components/menu/menu.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild('btn1') btn1: ElementRef;
    @ViewChild('btn2') btn2: ElementRef;

    constructor(private ngxStickyModalService: NgxStickyModalService) {
    }

    open(number) {
        const dialogRef = this.ngxStickyModalService.open({
            component: MenuComponent,
            relativeTo: this[`btn${number}`]
        });
    }
}
