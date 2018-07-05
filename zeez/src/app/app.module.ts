import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
MatFormFieldModule,
MatIcon,
MatDatepicker
} from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent, DialogOverviewExampleDialog } from './contact/contact.component';
import { AboutService } from './services/about.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactService } from './services/contact.service';
import { GalleryService } from './services/gallery.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
{path: 'gallery', component: GalleryComponent},
{path: '', redirectTo: 'about', pathMatch: 'full'} ];


@NgModule({
    exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatIcon,
    MatDatepickerModule,
    
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ,HttpModule,BrowserAnimationsModule,
    MatNativeDateModule,MatButtonModule,MatDialogModule,
    MatCardModule,MatFormFieldModule,MatInputModule,MatRippleModule,MatIconModule,
    ReactiveFormsModule,MatDatepickerModule,MatTabsModule
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [AboutService,GalleryService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
