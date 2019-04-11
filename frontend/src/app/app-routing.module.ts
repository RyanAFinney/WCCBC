import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent} from './gst-add/gst-add.component';
import { GstEditComponent} from './gst-edit/gst-edit.component';
import { GstGetComponent} from './gst-get/gst-get.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'business',
    component: GstGetComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "reload"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
