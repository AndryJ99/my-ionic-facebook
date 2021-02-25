import { Component, OnInit } from '@angular/core';
import {Product} from '../class/post';

@Component({
  selector: 'app-my-products-mpls',
  templateUrl: './my-products-mpls.component.html',
  styleUrls: ['./my-products-mpls.component.scss'],
})
export class MyProductsMPLSComponent implements OnInit {
  datas: Product[] = [
    {
      title: 'Esempio 1',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 2',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 3',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 4',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 5',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 6',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 7',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 8',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 9',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 10',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 11',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 12',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 13',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 14',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 15',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 16',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 17',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    },
    {
      title: 'Esempio 18',
      image: '../../assets/GroupPage/placeholder.png',
      price: '12345'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
