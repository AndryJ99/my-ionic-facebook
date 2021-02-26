import { Component, OnInit } from '@angular/core';
import { Notification } from '../class/post';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  datas: Notification[] = [
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/user-shape.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/flag.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/usergroup.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/cake.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/flag.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/user-shape.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/cake.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/usergroup.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/usergroup.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/flag.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/user-shape.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/cake.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/user-shape.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/user-shape.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/usergroup.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/cake.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/flag.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/usergroup.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/cake.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/usergroup.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/cake.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/usergroup.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/flag.png',
      date: '12/02/2021'
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      image: '../../assets/avatar-placeholder-small.png',
      type: '../../assets/Notifications/user-shape.png',
      date: '12/02/2021'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
