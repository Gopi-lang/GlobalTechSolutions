import { Component, OnInit } from '@angular/core';
// Import the routing module directives
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  // Add RouterLink and RouterLinkActive to the imports array right here
  imports: [RouterLink, RouterLinkActive], 
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}