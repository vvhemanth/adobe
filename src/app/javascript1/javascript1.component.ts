import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript1',
  templateUrl: './javascript1.component.html',
  styleUrls: ['./javascript1.component.css']
})
export class Javascript1Component1 implements OnInit {

  constructor() { 
   
  }

  ngOnInit() {
    
  }
  isClicked() {
    document.getElementById('sub').innerText = '<b>Dont sumbit<b>' 
    document.getElementById('sub1').innerHTML = '<b>Dont sumbit<b>'
    document.getElementById('sub1').className = 'myClass';
    console.log(document.getElementsByTagName('p')[0].innerHTML) 
   // or 
    // document.querySelector('p').innerHTML
    // or
    // document.querySelector('p')[0].innerHTML
    console.log(document.getElementsByTagName('p')[1].innerHTML)
    // document.querySelectorAll('p')[1].innerHTML

    // for(let i= 0 ;i<document.querySelectorAll('p').length;i++) {
    //   document.querySelectorAll('p')[i].innerHTML = '<b> rajesh is good coder<b>'
    // }

    if(document.querySelectorAll('p')[0].innerHTML === 'javascript1 works!') {
      document.querySelectorAll('p')[0].innerHTML = '<b> rajesh is good coder<b>'
    } else {
      document.querySelectorAll('p')[0].innerHTML = 'javascript1 works!'
    }

    if(document.querySelectorAll('p')[1].innerHTML === 'hemanth is coding') {
      document.querySelectorAll('p')[1].innerHTML = '<b> hemanth is good coder<b>'
    } else {
      document.querySelectorAll('p')[1].innerHTML = 'hemanth is coding'
    }

  // let data =   document.getElementsByClassName<HTMLElement>('sample') as HTMLCollectionOf<HTMLElement>
  // data.style.background='green';

 // document.querySelectorAll<HTMLElement>('.sample')[0].style.color='green'
  document.querySelectorAll('.sample')[0].className = 'sample1';
  }


}
