import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execom',
  templateUrl: './execom.component.html',
  styleUrls: ['./execom.component.scss']
})
export class ExecomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teamMember = [
    {
      'name': 'Alan George',
      'designation': 'Convenor',
      'image': '../assets/Alan.jpeg'
    },
    {
      'name': 'Irine Acha',
      'designation': 'Joint secretary',
      'image': '../assets/irine.jpeg'
    },
    {
      'name': 'Jerin P Raju',
      'designation': 'Editorial Head',
      'image': '../assets/Jerin Photo.JPG'
    },
    {
      'name': 'Akshay Krishnan',
      'designation': 'Publicity Head',
      'image': '../assets/akshay.jpeg'
    },
    {
      'name': 'Vinish M K',
      'designation': 'HPVC Captain',
      'image': '../assets/vinish.jpeg'
    },
    {
      'name': 'Ummu Aysha',
      'designation': 'HPVC Vice Captain',
      'image': '../assets/ummu.jpeg'
    },
    {
      'name': 'Anson Joy',
      'designation': 'Treasurer',
      'image': '../assets/anson.jpeg'
    },
    {
      'name': 'Paul Sebastian',
      'designation': 'Technical Head',
      'image': '../assets/akhil.jpeg'
    },

]

teamLead = [
  {
    'name': 'Hariprasad U',
    'designation': 'Secretary',
    'image': '../assets/hari.JPG'
  },
  {
    'name': 'Joshua Mathew Jacob',
    'designation': 'Chairman',
    'image': '../assets/joshuv.jpeg'
  },
  {
    'name': 'Akhil Balu',
    'designation': 'Vice Chair',
    'image': '../assets/akhil.jpeg'
  }
]

}
