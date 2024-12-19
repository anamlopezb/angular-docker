import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']  // Corrected to styleUrls
})
export class ContentComponent {
  constructor(public router: Router) {
    // Add router functionality if needed
  }
}
