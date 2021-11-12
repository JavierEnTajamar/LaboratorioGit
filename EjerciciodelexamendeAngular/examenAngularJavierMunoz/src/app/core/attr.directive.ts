import {
    Directive, ElementRef, Attribute,
    Input, SimpleChange, Output, EventEmitter, HostListener, HostBinding
} from "@angular/core";
import { Fotocopia } from "../model/fotocopia.model";

@Directive({
    selector: "[pa-attr]"
})
export class PaAttrDirective {

    @Input("pa-attr")
    @HostBinding("class")
    bgClass: any;
    @Input("pa-product")
    fotocopia: Fotocopia | undefined;

    @Output("pa-category")
    click = new EventEmitter<string>();

    @HostListener("click")
    triggerCustomEvent() {
        if (this.fotocopia != null) {
            this.click.emit(this.fotocopia.vehiculo);
        }
    }
}
