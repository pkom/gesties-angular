import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {LoginDialogComponent} from '@shared/dialogs/login-dialog.component';
import {FooterComponent} from '@shared/components/footer.component';
import {MaterialModule} from '@shared/material.module';
import {UppercaseWords} from '@shared/pipes/UppercaseWordsPipe';
import {ReadDetailDialogComponent} from '@shared/dialogs/read-detail.dialog.component';
import {DateComponent} from '@shared/components/date.component';
import {CancelYesDialogComponent} from '@shared/dialogs/cancel-yes-dialog.component';
import {CrudComponent} from '@shared/components/crud.component';
import {SearchComponent} from '@shared/components/search.component';
import {NumberDialogComponent} from '@shared/dialogs/number-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ],
  declarations: [
    LoginDialogComponent,
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    ReadDetailDialogComponent,
    NumberDialogComponent,
    SearchComponent,
    UppercaseWords,
    FooterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    LoginDialogComponent,
    CancelYesDialogComponent,
    CrudComponent,
    DateComponent,
    ReadDetailDialogComponent,
    NumberDialogComponent,
    SearchComponent,
    UppercaseWords,
    FooterComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    CancelYesDialogComponent,
    NumberDialogComponent,
    ReadDetailDialogComponent,
  ]
})
export class SharedModule {
}
