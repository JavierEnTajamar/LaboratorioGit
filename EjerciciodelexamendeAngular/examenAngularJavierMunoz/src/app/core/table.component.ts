import { Component } from "@angular/core";
import { Fotocopia } from "../model/fotocopia.model";
import { Model } from "../model/repository.model";

@Component({
    selector: "foTable",
    templateUrl: "table.component.html"
})
export class TableComponent {

    constructor(private model: Model) { }
    getFotocopia(key: number): Fotocopia {
        return this.model.getFotocopia(key);
    }

    getFotocopias(): Fotocopia[] {
        return this.model.getFotocopias();
    }

    deleteFotocopia(key: any) {
        this.model.deleteFotocopia(key);
    }

    cambiaBoton(key: any) {
        this.model.getFotocopia(key).estado = "Finalizado";
    }

}
