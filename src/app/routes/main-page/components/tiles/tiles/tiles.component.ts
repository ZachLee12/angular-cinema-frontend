import { Component } from '@angular/core';
@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent {
  tiles: any[] = [
    {
      iconSrc: '../../../../../../assets/images/angular.svg',
      descTitle: 'Angular Frontend',
      desc: 'The web development framework for building the future. Checkout its new hottest feature: Signals!'
    },
    {
      iconSrc: '../../../../../../assets/images/nestjs.svg',
      descTitle: 'NestJS Backend',
      desc: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications. Something tells me that the author of NestJS likes cats.'
    },
    {
      iconSrc: '../../../../../../assets/images/graphql.svg',
      descTitle: 'GraphQL API offered',
      desc: 'Describe your data. Ask for what you want. Get predictable results.'
    },
    {
      iconSrc: '../../../../../../assets/images/prisma.svg',
      descTitle: 'Prisma ORM',
      desc: 'The next-generation Node.js and TypeScript ORM.'
    },
  ]
}
