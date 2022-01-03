import { Component, keyframes, OnInit } from '@angular/core';
import { first } from '@angular/router/src/utils/collection';
import { elementAt } from 'rxjs/operator/elementAt';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {

  title = 'app works!';
  public arr = [1, 2, 7, 'hemu', 'sai', 'ravi', 34, 56, 78, 90];
  public arr1;
  public object = {data:'hemu',data1:'raja'};
  public object1;
  public array3 =[{name1:'test1'},{name2:'test2'}] //array of objects
  public object2 ={data:[1,'hemu',2],data1:[2,'raja,34']} //object of arrays
  private simple = [1,2]

  public simpleArray =['sai1','sai2','sai3','sai4']

  public data;
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
   console.log(item1)

   let obj = Object.assign({},this.simpleArray); // type 1
   console.log(obj);

   let obj1 = {...this.simpleArray}; //type 2
   console.log(obj1);

   let obj3 = {};
   for(let i=0;i<this.simpleArray.length;i++){ //type 3
     obj3[i]= this.simpleArray[i];
   }
   console.log(obj3);


  //  how to convert object into array
  const dataItem = {
    data1:34,
    data2:48
  }
  const array = Object.values(dataItem); //[34.48]
  const array1 = Object.keys(dataItem);//[data1,data2]
  const array3 = Object.entries(dataItem);
  console.log(array3);

  let arry1 =[34,48];
  let arry2 =[46,64];
  let arry3 = arry1.concat(arry2);
  console.log(arry3);
 const data ='hemu+raja sai';
 data.split('/');
 console.log(data.split('+').join(''))
  }

  clicked2() {
    // what is let,var,const
    // var :
    // var is used as global and local/functional - redclare
    // let is used as functional - redclare
    // const is used as fucntional and -no redeclare;
    console.log(i)
    for(var i=0;i<10;i++) {
      console.log(i);
    }
    console.log(i)

    var item ='hemu'
    item ='raja'

    //let 
  // console.log(j)
    for(let j=0;j<10;j++) {
      console.log(j);
    }
    // console.log(j)
    let item1 ='hemu'
    item1 ='raja'
    
    //const 
    for(let j=0;j<10;j++) {
      const item3 ='simple';
      console.log(item3);
    }


    let ietm4 =[34,56,78];
    ietm4.shift();
    
// arr1= [34,45,56,'raja',9,8,-1,0]
  // arr2 = [56,'hemu','raja',9,8,0,34]

  // let,var,const

   let arr1 = [34,45,56,'raja',9,8,-1,0];

   arr1.splice(0,2);
  //  56,'raja',9,8,-1,0
 let arr2 = [];
 arr2.push(arr1[0])
//  56
//  56,'raja',9,8,-1,0
arr2.push('hemu','john')
//56,hemu,john
//56,'raja',9,8,-1,0 ..arr1
arr1.splice(0,1)
//'raja',9,8,-1,0..arr1

arr2.concat(arr1)
// 56,hemu,john,'raja',9,8,-1,0

  





  }

  isClicked() {
    let data  =[{name1:'test1'},{'name2':'test2'},{name3:'test4'},{name4:'test5'},
    {name5:'test6'},{name6:34},
    {name7:98}]

    // [] to {} convert array to object
    let obj = Object.assign({},data)

    console.log(obj)

    // let count =0;
    var item;
    let arr = [],arr1 =[];
    data.forEach((element,index) =>{ //  it will iterate the array in loop
      if(element.name5 === 'test6') {
        item= index;
      }
      if(typeof(Object.values(element)[0]) === 'string') {
        arr.push(element)
      }

      if(typeof(Object.values(element)[0]) === 'number') {
        arr1.push(element)
      }
      if(element.name2 === 'test2' || Object.keys(element)[0] === 'name2') {
        element.name2 = '36'
        Object.keys(element)[0] = 'name96'
      }
      
    })
    console.log(data)
    console.log(arr)
    console.log(arr1)

    let obj1 ={
      name7:78
    }

    let space = obj1.name7 === 78 ? data.push(obj1) : data.splice(0,1)

    let filter = data.filter(x => typeof(Object.values(x)[0]) === 'string')

    console.log(filter)
    console.log(data)
    console.log(item)





  }

  isItem() {
      //  1. convert array to object
  //  2.  find index of test6
  //  3. filter the Strings
  //  4. filter the Number
  //  5. change test2 to 36
  //  6. change name2 to name96


  let dat12  =[{name1:'test1'},{'name2':'test2'},{name3:'test4'},{name4:'test5'},
  {name5:'test6'},{name6:34},
  {name7:98}]

 let obj = Object.assign({},dat12);
 console.log(obj)

var index1; let arr = []
 dat12.forEach((element,index) => {

  if(Object.values(element)[0] === 'test6') {
   index1 = index;
  }

  if(typeof(Object.values(element)[0]) === 'string') {
    arr.push(element)
  }
  if(Object.values(element)[0] === 'test2') {
    element.name2 = '36'
  }
  if(Object.keys(element)[0] === 'name2') {
    delete dat12[index].name2; //{}
   dat12[index]['name96'] = 'test2'

  }
   
 });
 console.log(index1);
 console.log(arr)

 console.log(dat12)


 let filter = dat12.filter(x => typeof(Object.values(x)[0]) === 'string')

 console.log(filter)




 var simeple = {data:[1,'hemu',2],data1:[2,'raja,34']} //object of arrays

//  object :keys,values
var simple  = Object.assign({},simeple)
Object.keys(simeple).forEach((element,index) => {
simple[element].forEach((element1,index1) => {
  if(element1 === 'hemu') {
    simple[element][index1] = 'sai';
  }
});
})

console.log(simeple)
simeple =  Object.assign({},simeple)













//  let item  = [34,{data:'45'},{data1:'hemu'},{item:26},{item1: 45},{item4:56},{item7:56},67,56,78]

//  1. convert array to object
//  2. [34,{data:'45'},{data1:'hemu'},{item4:56},{item7:56},67,56,78]
//  3.count the number which is greater that 46
//  4.count the number which is less than 46
//  5. count the number of strings ,numbers
//  6. filter the items which are repeated
//  7. remove the  {item4:56} from array


// .splice(x,y)
// x represents index of the array
// y represents how many items to delete

let item  = [34,{data:'45'},{data1:'hemu'},{item:26},{item1: 45},{item4:56},{item7:56},45,67,56,78]
let count =0,count1=0,count2=0; let arr1 =[];
item.forEach((element,index) => {
  // if(element > 46 || Object.values(element)[0] > 46) {
  //   count++;

  // }
   if(element > 46 || Object.values(item[index])[0] > 46) {
    count++;

  }


  if(typeof element === 'string' || typeof Object.values(element)[0] === 'string' ) {
    count1++;
  }
  if(typeof element === 'number' || typeof Object.values(element)[0] === 'number' ) {
    count2++;
  }
 

})

let index = item.findIndex(x => x['item4'] === 56)
console.log(index)
item.splice(5,1)


// let count3=0;
// for(let i=0;i<item.length;i++){
//  for(let j=i+1;j<item.length;j++) {
//    if(item[i] === item[j] || item[i] === Object.values(item[j])[0]) {
//      count3++;
//    }
    
//  }
// }
// console.log(count3++)

}




// let item  = [34,{data:'45'},{data1:'hemu'},{item:26},{item1: 45},{item4:56},{item7:56},67,56,78]

// 1. convert {data1:'hemu'} to {data1:'raja'}
// 2. convert {item:26} to {data:26}
// 3. count the number of Objects
// 4count  the number of strings
// 5. remove {item4:56}
// 6.add{item5:56} add at last of array
// 7.{item7:156} add at first of array
// 8. 




  
  
   


   

}


