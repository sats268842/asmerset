import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  toogle: boolean =false;
  constructor() { }
  navbar(): void{
    this.toogle = !this.toogle
  }
  ngOnInit(): void {
  }

}
