import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatDividerModule,MatButtonModule],
  template: `
      <mat-toolbar color="primary">
    <span>Bit-Coin Desu</span>
    <div class="spacer"></div>
      <a mat-button>Home</a>
      <a mat-button>About</a>
      <a mat-button>Contact</a>
    </mat-toolbar>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
