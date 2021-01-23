import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Componet } from "../error-404/error-404.component";
import { NavBarComponent } from "./nav-bar.component";




@NgModule ({
  declarations: [
    NavBarComponent,
    Error404Componet
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Componet
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {

}
