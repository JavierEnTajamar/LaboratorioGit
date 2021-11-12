import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Fotocopia } from "../model/fotocopia.model";
import { Model } from "../model/repository.model"

@Component({
    selector: "foForm",
    templateUrl: "form.component.html",
})
export class FormComponent {
    fotocopia: Fotocopia = new Fotocopia();

    constructor(private model: Model) { }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveFotocopia(this.fotocopia);
            this.fotocopia = new Fotocopia();
            form.reset();
        }
    }

    resetForm() {
        this.fotocopia = new Fotocopia();
    }
}
