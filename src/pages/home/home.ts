import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { TodoPage } from '../todo/todo';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos : FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private angularFire: AngularFire) {
    this.todos = angularFire.database.list('/todos');
  }
  
  add() {
    this.navCtrl.push(TodoPage, {id: null});
  }

  detail(todo) {
    this.navCtrl.push(TodoPage, {id: todo.$key, todo: {title: todo.title, description: todo.description, deadline: todo.deadline}});
  }

  remove(id: string) {
    let prompt = this.alertCtrl.create(
      {
        title: "Delete ToDo",
        message: "Do you really want do delete this ToDo?",
        buttons: [
          {
            text: "Cancel",
            handler: data => {}
          },
          {
            text: "Delete",
            handler: data => {
              this.todos.remove(id);
            }
          }
        ]
      });
    prompt.present();
  }

  showDate(dateInMillis) {
    return new Date(dateInMillis);
  }

}
