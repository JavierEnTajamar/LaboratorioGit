import { Injectable } from "@angular/core";
import { Fotocopia } from "./fotocopia.model";

@Injectable()
export class StaticDataSource {
    private data: Fotocopia[];

    constructor() {
        this.data = new Array<Fotocopia>(
            new Fotocopia(1, "SEAT PANDA", "7676-ABC", "Cambio de Aceite", "Proceder"),
            new Fotocopia(2, "CITROEN C4", "9191-DFA", "Arreglo Pinchazo", "Proceder"),
            new Fotocopia(3, "SEAT LEON", "0402-AAA", "Filtros y Aceite", "Proceder"),
            new Fotocopia(4, "PEUGEOT 406", "8134-AHJ", "Otros", "Proceder"),
            new Fotocopia(5, "TOYOTA COROLLA", "9764-ZPT", "Otros", "Proceder"));
    }

    getData(): Fotocopia[] {
        return this.data;
    }
}
