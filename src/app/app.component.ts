import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public arr = [1, 2, 7, 'hemu', 'sai', 'ravi', 34, 56, 78, 90];
  public arr1;
  public object = {data:'hemu',data1:'raja'};
  public object1;

  

  
  constructor() {
    console.log(this.title)
  }

  clicked(data) {
    this.title = data;
    console.log(this.title)
    console.log(this.arr.length)
    this.arr.push('dog');
    console.log(this.arr)
    this.arr.reverse();
    console.log(this.arr)
    this.arr.splice(1, 2);
    console.log(this.arr)
    console.log(this.arr.lastIndexOf('hemu'))


    for (let i = 0; i < this.arr.length; i++) { //type1
      if (this.arr[i] === 'sai') {
        this.arr[i] = 'raja'
      }
    }
    console.log(this.arr);

    this.arr.forEach((element, index) => { //type 2
      if (element === 'hemu') {
        this.arr[index] = 'hemu123'
      }
    })
    console.log(this.arr);

    for( let data1 of this.arr) { //type 3
      if(data1 === 'dog') {
        this.arr[data1] ='sai123'
      }
    }

    console.log(this.arr);
    this.arr1 = this.arr;

    console.log(Object.keys(this.object))
    Object.keys(this.object).forEach((element, index) => {
      if (this.object[element] === 'raja') {
        this.object[element] = 'raja123'
      }
    })
    console.log(this.object)

    this.object1 = Object.assign({},this.object);
    console.log(this.object1)

  }

  clicked1() {
   let item =  this.arr.findIndex(x =>x === 'hemu');
   this.arr[item] = 'hemu123';
   console.log(this.arr);

   let item1 = this.arr.filter(x => x === 'ravi' || x === 'sai');
   console.log(item1);
  //  how to cponvert array to object

 
  }

 


}
