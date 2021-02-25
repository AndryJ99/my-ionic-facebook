import { Component, OnInit } from '@angular/core';
import {Post} from '../class/post';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.scss'],
})
export class MyPostComponent implements OnInit {
  expand = false;
  datas: Post[] = [
    {
      title: 'Esempio 1',
      subtitle: 'Sottotitolo 1',
      image: '../../assets/GroupPage/placeholder1.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
    },
    {
      title: 'Esempio 2',
      subtitle: 'Sottotitolo 2',
      image: '../../assets/GroupPage/placeholder1.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'Esempio 3',
      subtitle: 'Sottotitolo 3',
      image: '../../assets/GroupPage/placeholder1.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title: 'Esempio 4',
      subtitle: 'Sottotitolo 4',
      image: '../../assets/GroupPage/placeholder1.png',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    }
  ];
  constructor() { }

  ngOnInit() {}
  clicked(){
    this.expand = !this.expand;
  }
}
