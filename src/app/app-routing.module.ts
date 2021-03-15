import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: CarComponent,
  },
  {
    path: 'brand',
    component: BrandComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'rental',
    component: RentalComponent,
  },
  {
    path: 'cars/color/:colorId',
    component: CarComponent,
  },
  {
    path: 'cars/brand/:brandId',
    component: CarComponent,
  },
  {
    path: 'cars/details/:carId',
    component: CarComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
