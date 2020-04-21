import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule, MatMenuModule, MatIconModule, MatTabsModule, MatSidenavModule, MatToolbarModule, MatListModule,MatDatepickerModule,
   MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatExpansionModule, MatGridListModule, MatDialogModule, MatSelectModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { FlexLayoutModule } from '@angular/flex-layout';*/
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatecountComponent } from './gatecount/gatecount.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ConnectComponent } from './connect/connect.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { DigitalandprintedbookusageComponent } from './digitalandprintedbookusage/digitalandprintedbookusage.component';
import { ReturnandissueComponent } from './monthlyusage/monthlyusage.component';
import { BookTotalComponent } from './book-total/book-total.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { FunnelchartComponent } from './funnelchart/funnelchart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { VisitordashletsComponent } from './visitordashlets/visitordashlets.component';
import { BooksusageComponent } from './booksusage/booksusage.component';
import { PiechartComponent } from './booksusage/piechart/piechart.component';
import { DualaxislineComponent } from './booksusage/dualaxisline/dualaxisline.component';
import { StackedcolumnComponent } from './booksusage/stackedcolumn/stackedcolumn.component';
import { DuesandfinesComponent } from './duesandfines/duesandfines.component';
import { FunnelComponent } from './duesandfines/funnel/funnel.component';
import { CounterComponent } from './counter/countercomponent';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { AreaComponent } from './general-dashboard/area/area.component';
import { CardComponent } from './general-dashboard/card/card.component';
import { PieComponent } from './general-dashboard/pie/pie.component';
import { CustomComponent } from './custom/custom.component';
import { CharttypenavbarComponent } from './custom/charttypenavbar/charttypenavbar.component';
import { FieldsComponent } from './custom/Fields/Fields.component';

@NgModule({
  declarations: [
    AppComponent,
    GatecountComponent,
    LoginComponent,
    ConnectComponent,
    CreateComponent,
    HeaderComponent,
    DigitalandprintedbookusageComponent,
    ReturnandissueComponent,
    BookTotalComponent,
    HighchartsChartComponent,
    FunnelchartComponent,
    RadarchartComponent,
    VisitordashletsComponent,
    BooksusageComponent,
    PiechartComponent,
    DualaxislineComponent,
    StackedcolumnComponent,
    DuesandfinesComponent,
    FunnelComponent,
    CounterComponent,
    GeneralDashboardComponent,
    CardComponent,
    PieComponent,
    AreaComponent,
    CustomComponent,
    CharttypenavbarComponent,
    FieldsComponent
  ],
  imports: [
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,   
    /*FlexLayoutModule,*/
    MatMenuModule,MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [CustomComponent],
  entryComponents: [
    FieldsComponent,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
