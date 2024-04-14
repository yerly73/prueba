import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AppRegistroComponent } from './pages/app-registro/app-registro.component';
import { DetalleRegistroComponent } from './pages/detalle-registro/detalle-registro.component';
import { ReporteRegistroComponent } from './pages/reporte-registro/reporte-registro.component';
import { FacturaRegistroComponent } from './pages/factura-registro/factura-registro.component';
import { EstadisticaRegistroComponent } from './pages/estadistica-registro/estadistica-registro.component';
import { PersonalRegistroComponent } from './pages/personal-registro/personal-registro.component';
import { BusRegistroComponent } from './pages/bus-registro/bus-registro.component';

// VENTA PASAJE
import { BoletasRegistroComponent } from './pages/boletas-registro/boletas-registro.component';
import { ReservaRegistroPasajeComponent } from './pages/reserva-registro-pasaje/reserva-registro-pasaje.component';
import { ListaPasajerosPasajeComponent } from './pages/lista-pasajeros-pasaje/lista-pasajeros-pasaje.component';

// ALQUILER
import { AlquilerRegistroComponent } from './pages/alquiler-registro/alquiler-registro.component';

// ENCOMIENDA
import { EncomiendaRegistroComponent } from './pages/encomienda-registro/encomienda-registro.component';

const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: 'page',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
      {
        path: "regitroPersonal", component: PersonalRegistroComponent
      },
      {
        path: "registroBus", component: BusRegistroComponent
      },
      {
        path: "registroBoletas", component: BoletasRegistroComponent
      },
      {
        path: "registroAlquiler", component: AlquilerRegistroComponent
      },
      {
        path: "registroEncomienda", component: EncomiendaRegistroComponent
      },
      {
        path: "reservaPasaje", component: ReservaRegistroPasajeComponent
      },
      {
        path: "listaPasajeros", component: ListaPasajerosPasajeComponent
      }
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
