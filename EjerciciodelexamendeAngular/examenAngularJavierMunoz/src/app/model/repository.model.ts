import { Injectable } from "@angular/core";
import { Fotocopia } from "./fotocopia.model";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class Model {
    private fotocopia: Fotocopia[] = new Array<Fotocopia>();
    private locator = (f: Fotocopia, id: number) => f.id == id;

    constructor(private dataSource: RestDataSource) {
        //this.fotocopia = new Array<Fotocopia>();
        //this.dataSource.getData().forEach(f => this.fotocopia.push(f));
        this.dataSource.getData().subscribe(data => this.fotocopia = data);
    }

    getFotocopias(): Fotocopia[] {
        return this.fotocopia;
    }

    getFotocopia(id: number): any {
        return this.fotocopia.find(p => this.locator(p, id));
    }
    saveFotocopia(fotocopia: any) {
        if (fotocopia.id == 0 || fotocopia.id == null) {
            fotocopia.id = this.generateID();
            this.fotocopia.push(fotocopia);
        } else {
            let index = this.fotocopia
                .findIndex(p => this.locator(p, fotocopia.id));
            this.fotocopia.splice(index, 1, fotocopia);
        }
    }

    deleteFotocopia(id: number) {
        let index = this.fotocopia.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.fotocopia.splice(index, 1);
        }
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getFotocopia(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
