import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
//Nuevo 
import { PersonalRegistroComponent } from './pages/personal-registro/personal-registro.component';
import { BusRegistroComponent } from './pages/bus-registro/bus-registro.component';
import { AlquilerRegistroComponent } from './pages/alquiler-registro/alquiler-registro.component';
import { EncomiendaRegistroComponent } from './pages/encomienda-registro/encomienda-registro.component';

//VENTA PASAJE
import { BoletasRegistroComponent } from './pages/boletas-registro/boletas-registro.component';
import { ReservaRegistroPasajeComponent } from './pages/reserva-registro-pasaje/reserva-registro-pasaje.component';
import { ListaPasajerosPasajeComponent } from './pages/lista-pasajeros-pasaje/lista-pasajeros-pasaje.component';

//VENTA PASAJE
import { AppRegistroComponent } from './pages/app-registro/app-registro.component';
import { DetalleRegistroComponent } from './pages/detalle-registro/detalle-registro.component';
import { ReporteRegistroComponent } from './pages/reporte-registro/reporte-registro.component';
import { FacturaRegistroComponent } from './pages/factura-registro/factura-registro.component';
import { EstadisticaRegistroComponent } from './pages/estadistica-registro/estadistica-registro.component';
import { LineChartComponent } from './pages/graficos/line-chart/line-chart.component';
import { BarChartComponent } from './pages/graficos/bar-chart/bar-chart.component';
import { PieChartComponent } from './pages/graficos/pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    AppRegistroComponent,
    
    //VENTA PASAJE
    BoletasRegistroComponent,
    ReservaRegistroPasajeComponent,
    ListaPasajerosPasajeComponent,
    
    //VENTA PASAJE
    PersonalRegistroComponent,
    BusRegistroComponent,
    AlquilerRegistroComponent,
    EncomiendaRegistroComponent,
    

    //VENTA PASAJE
    DetalleRegistroComponent,
    ReporteRegistroComponent,
    FacturaRegistroComponent,
    EstadisticaRegistroComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    
    
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
