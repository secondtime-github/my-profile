import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  techInfo = [
    {
      id: 0,
      category: "Front-End",
      item:[
        {id: 0, name: "Bootstrap",
        imgURL: "https://getbootstrap.jp/docs/4.5/assets/img/bootstrap-stack.png",
        link: "https://pendygg.github.io/sample/sample.html",
        content: "The most popular HTML, CSS and JS library. With Bootstrap design and create a responsive web page.",
        },
        {id: 1, name: "WeChat Mini Program",
        imgURL: "https://www.ecommercestrategychina.com/storage/uploads/images/2018-18%202.jpg",
        link: "",
        content: "Created a Movie Review app which used Tecent Dev Platform."},
        {id: 2, name: "React",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        link: "https://secondtime-github.github.io/connect4/",
        content: "Angular, developed by Google. React, developed by Facebook. Completed a Getting Started guide. Implement a board game by Angular.",}
      ]
    },
    {
      id: 1,
      category: "Back-End",
      item:[
        {id: 0, name: "Java",
        imgURL: "https://upload.wikimedia.org/wikipedia/zh/8/88/Java_logo.png",
        link: "",
        content: "サーバー側一番人気の開発言語. 代表的なオブジェクト指向プログラミング言語. 毎日使っているので得意. ",},
        {id: 1, name: "PostgreSQL",
        imgURL: "https://techracho.bpsinc.jp/wp-content/uploads/2017/06/postgresql_icon_eyecatch-922x1024.png",
        link: "",
        content: "無償のRDBMS. それ以外、MySQLの経験もある",}
      ]
    },
    {
      id: 2,
      category: "Mobile",
      item:[
        {id: 0, name: "Swift",
        imgURL: "https://www.lanches.co.jp/wp-content/uploads/2017/03/6748.jpg",
        link: null,
        content: "安全、高速、モダンのプログラミング言語. Extension、関数型のプログラミングパターン、Optional型など、先進的なコンセプトがたくさんある. スマホアプリ開発が楽しくて一番好き",},
        {id: 1, name: "SwiftUI",
        imgURL: "https://developer.apple.com/news/images/og/swiftui-og.png",
        link: null,
        content: "WWDC 2019で発表され. 少ないコードでUIを作成できる. データドライブなので重いコントローラーを捨てられる. 今の段階でUIKitと混合開発可能（せざるを得ない）. 最近ハマっている. ",}
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
