import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  templateUrl: 'todo.html'
})
export class TodoPage {

  todos : FirebaseListObservable<any[]>;

  pageTitle: string;

  todo = {
    title: null,
    description: null,
    deadline: null
  };
  id;
  persistFunction;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private angularFire: AngularFire) {

    this.todos = angularFire.database.list('/todos');
    let id = this.navParams.get('id');

    if (id == null) {
      console.log('Nop');
      this.pageTitle = "Create";
      this.id = null
      this.persistFunction = this.create;
    } else {
      console.log('Yep');
      this.pageTitle = "Edit";
      this.id = id;
      this.persistFunction = this.update;
      this.todo = this.navParams.get('todo');
    }
  }

  cancel() {
    this.navCtrl.pop();
  }

  submit(form) {
    this.persistFunction({ id: this.id, todo: this.todo });
    this.navCtrl.pop();
  }

  create(input) {
    console.log('create');
    this.todos.push(input.todo);
  }

  update(input) {
    console.log('update');
    this.todos.update(input.id, input.todo);
  }
}
