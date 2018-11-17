import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCardModule, MatListModule, MatIconModule],
  exports: [MatButtonModule, MatCardModule, MatListModule, MatIconModule]
})
export class MaterialModule {
}
