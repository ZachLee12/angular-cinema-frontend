import { Component } from '@angular/core';
@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent {
  tiles: any[] = [
    {
      iconSrc: '../../../../../../assets/images/web-technology/angular.svg',
      descTitle: 'Angular',
      desc: 'The web development framework for building the future. Checkout its new hottest feature: Signals!'
    },
    {
      iconSrc: '../../../../../../assets/images/web-technology/nestjs.svg',
      descTitle: 'NestJS',
      desc: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.'
    },
    {
      iconSrc: '../../../../../../assets/images/web-technology/graphql.svg',
      descTitle: 'GraphQL API offered',
      desc: 'Describe your data. Ask for what you want. Get predictable results.'
    },
    {
      iconSrc: '../../../../../../assets/images/web-technology/prisma.svg',
      descTitle: 'Prisma ORM',
      desc: 'The next-generation Node.js and TypeScript ORM.'
    },
    {
      iconSrc: '../../../../../../assets/images/web-technology/postgresql.svg',
      descTitle: 'PostgreSQL',
      desc: 'The world\'s most advanced open source relational database.'
    },
    {
      iconSrc: '../../../../../../assets/images/web-technology/jwt.svg',
      descTitle: 'JWT Authentication',
      desc: 'Token-based authentication with access and refresh tokens.'
    },
  ]
}
