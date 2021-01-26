import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events =[
     {
    'no': 1,
    'name': 'HPVC 2020',
    'content': 'Led by Arjun, Team Redstone designed and fabricated Trailblazer 1.0, the second recumbent vehicle from RSET. A team of 25 members worked together to overcome challenges and delivered a good performance at the competition. '
    },
    {
      'no': 2,
      'name': 'ASME E-Fest Marwadi 2020',
      'content': 'ASMEs E-Fest Asia Pacific 2019 was held from 28th Feb –1st March 2020 at Marwadi University in Rajkot, Gujarat. Students from Rajagiri participated once again in the HPVC competition.'
    },
    {
      'no': 3,
      'name': 'EFx Rajagiri 2019',
      'content': 'ASME RSET Chapter conducted its first ever EFx on October 19th, 2019. EFx is a one day event designed to bring the excitement, community, innovation and vibrant experience of an ASME E-Fests engineering festival, to engineering students at local colleges and universities around the world. It consists of Impromptu engineering competitions, interactive workshops and networking events that help students to take their engineering skills to the next level'
    },
    {
      'no': 4,
      'name': 'HPVC 2019',
      'content': 'Team Redstone under the leadership of Fahad and , comprising __ students made Rajagiri’s first ever Recumbent cycle. The competition challenges students to network and apply engineering principles to design a recumbent vehicle that is fabricated and then tested on the racetrack. The team performed with flying colors and secured an overall 23rd position in its maiden attempt'
    },
    {
      'no': 5,
      'name': 'ASME E-Fest VIT 2019',
      'content': 'ASMEs E-Fest Asia Pacific 2019 was held from 1st –3rd February 2019 at Vellore Institute of Technology, Vellore. Students from Rajagiri competed in the HPV(Human Powered Vehicles) Competition for the first time in 2019. This was the second visit to E-Fest from Rajagir. In 2018, RSET had participated in SDC Competition in the E-Fest at DTU.'
    }

  
  ]
  
  

  

}
