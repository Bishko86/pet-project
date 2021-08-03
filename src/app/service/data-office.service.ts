import { Injectable } from '@angular/core';
export interface DataService {
  link:string 
  text:string
  title?:string
}
@Injectable({
  providedIn: 'root'
})
export class DataOfficeService {

  constructor() { }
  dataServices = [
    {
      link: './../../assets/images/click.png',
      text: 'Increase clickability'
    },
    {
      link: './../../assets/images/magnifying-glass.png',
      text: 'Save your time and optimize daily processes'
    },
    {
      link: './../../assets/images/share.png',
      text: 'Syncs you UTMs with your team'
    }
  ]
  dataFeatures = [
    {
      link: './../../assets/images/domain-registration1.png',
      text: 'Create UTM links with a custom domain to build trust and inrease clickability'
    },
    {
      link: './../../assets/images/magnifying-glass.png',
      text: 'Simplify youe process by saving templates for generating UTM URL links'
    },
    {
      link: './../../assets/images/domain-registration2.png',
      text: 'Add UTM paremeters for HTML emails'
    },
    {
      link: './../../assets/images/dashboard.png',
      text: 'Get your personal dashboard where you can analyse UTM params perfomance'
    }
  ]
  dataWhyUS = [
    {
      link: './../../assets/images/chat.png',
      text: 'If you have any question regarding our service, and we will respond in the next 72 hours ',
      title: 'Support'
    },
    {
      link: './../../assets/images/save-money.png',
      text: 'We take away manual work and optimise the process so you can focun on more strategy goals',
      title: 'Affordable price'
    },
    {
      link: './../../assets/images/puzzle.png',
      text: 'We continue growing functionality in order to take away the most boring part of work from you',
      title: 'New features'
    }
  ]

}
