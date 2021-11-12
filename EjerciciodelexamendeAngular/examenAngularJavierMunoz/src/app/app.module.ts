import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FormComponent } from './core/form.component';
import { TableComponent } from './core/table.component';
import { ModelModule } from './model/model.module';

//import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ModelModule, CoreModule],
    bootstrap: [TableComponent, FormComponent]
})
export class AppModule { }
