import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SmartwatchOverviewPageComponent} from '../pages/smartwatch-overview-page/smartwatch-overview-page.component';


const routes: Routes = [
  {path: 'smartwatches', component: SmartwatchOverviewPageComponent, }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
