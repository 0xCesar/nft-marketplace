import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'btn',
  templateUrl: './btn-basic.component.html',
  styleUrls: ['./btn-basic.component.scss']
})

export class BtnBasicComponent implements OnInit {

  @Input() titre = '';
  @Input() color: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
