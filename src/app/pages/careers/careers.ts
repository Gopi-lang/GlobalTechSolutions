import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './careers.html',
  styleUrls: ['./careers.css']
})
export class CareersComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}