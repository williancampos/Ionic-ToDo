import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoPage } from '../pages/todo/todo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDwkilcs8w-BQyLrBGdagg_8hzDdOf5vXA",
  authDomain: "testlopes-e9419.firebaseapp.com",
  databaseURL: "https://testlopes-e9419.firebaseio.com",
  projectId: "testlopes-e9419",
  storageBucket: "testlopes-e9419.appspot.com",
  messagingSenderId: "496490777962"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
