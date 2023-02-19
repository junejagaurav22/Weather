import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // @HostListener('document:mouseover', ['$event'])
  // mouseOver(event: any) {
  //   const blob = document.getElementById('blob');
  //   if (event.target.matches('a#link')) {
  //     if (blob?.style) {
  //       blob.animate(
  //         {
  //           height: '50px',
  //         },
  //         { duration: 250 }
  //       );
  //       setTimeout(() => {
  //         const blob = document.getElementById('blob');
  //         if (blob?.style) blob.style.height = '50px';
  //       },200);
  //     }
  //   } else {
  //     if (blob?.style) blob.style.height = '30px';
  //   }
  // }
}
