# ionic-emoji-rating

A native Ionic emoji rating component forked from ionic-rating. Replaces star rating with this Emoji rating system: 😠 🙁 😐 😃 🤩

## How to install?

`npm i ionic-emoji-rating`

## How to use:

Import `IonicRatingModule` on module definition that declares the page where you want to add the rating component. In some cases, all pages are declared on `src/app/app.module.ts`.

```typescript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import ionic-rating module
import { IonicRatingModule } from 'ionic-emoji-rating';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicRatingModule // Put ionic-rating module here
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
```

If you are using `Lazy Loading` in your application, add the `IonicRatingModule` to the page module instead of the app module.

```typescript
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { IonicRatingModule } from "ionic-emoji-rating";

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicRatingModule // Put ionic-rating module here
    IonicPageModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
  ]
})

export class ProfilePageModule { }
```

Include the component on page template, like the example below:

```
<rating [rate]="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
        (rateChange)="onRateChange($event)">
</rating>
```

[(ngModel)]: 

```
<rating [(ngModel)]="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
        (ngModelChange)="onModelChange($event)">
</rating>
````

Reactive Forms:

```
<rating formControlName="rate"
        readonly="false" <!--default value-->
        size="default" <!--default value-->
</rating>
````


&#9400; Rodaina Mohamed 2018  
Updated by Lincon Dias 2019 to Ionic 4
Updated by Kuchar Moulod 2021 to implement Emoji rating system
