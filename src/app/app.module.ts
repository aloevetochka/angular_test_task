import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestBlockComponent } from './test-block/test-block.component';
import { CopyFormComponent } from './copy-form/copy-form.component';
import { StaticBlockComponent } from './static-block/static-block.component';
import { LiComponentComponent } from './li-component/li-component.component';
import { NumListComponentComponent } from './num-list-component/num-list-component.component';
import { IncutTextComponentComponent } from './incut-text-component/incut-text-component.component';
import { FooterComponent } from './footer/footer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GalleryBlockComponent } from './gallery-block/gallery-block.component';
import { FormBlockComponent } from './form-block/form-block.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { TextMaskModule } from 'angular2-text-mask';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';

// TODO Разделить модули ui и компонент.
// TODO Сделать структуру папок по вложенности компонент. Общие компоненты ui вынести в отдельный модуль.
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestBlockComponent,
    CopyFormComponent,
    StaticBlockComponent,
    LiComponentComponent,
    NumListComponentComponent,
    IncutTextComponentComponent,
    FooterComponent,
    NavLinkComponent,
    GalleryBlockComponent,
    FormBlockComponent,
    GalleryComponent,
    GalleryItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ClipboardModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    TextMaskModule,
    CheckboxModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
