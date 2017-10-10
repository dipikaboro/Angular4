import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean= false;

  constructor(private dataService:DataService) { 
    console.log('constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit ran..');

    this.name = 'Xyz';
    this.age = 47;
    this.email = 'xyz@test.com'
    this.address = {
      street: '1 Univ Ave',
      city: 'Lowell',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listening music'];
    
    this.dataService.getPosts().subscribe((posts) => {
      //onsole.log(posts);
      this.posts=posts;
    })
  }

  onClick(){
    this.name='Abc';
    this.email = 'abc@test.com';
    this.age=30;
    this.hobbies.push('New Hobby');
    //console.log('Hello');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i <this.hobbies.length; i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }

    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}
interface Address{
  street:string;
  city:string;
  state:string;
}

interface Post{
  id: Number,
  title:string,
  body:string,
  userid:number
}


