import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "rating",
  template: `
    <ion-buttons>
      <ion-button fill="clear" [size]="size" *ngFor="let current of [1, 2, 3, 4, 5]; let i = index"
        (click)="onClick($event, i + 1)">
        <div *ngIf="i === 0" class="rating_button">😠</div><div *ngIf="i === 1" class="rating_button">🙁</div><div *ngIf="i === 2" class="rating_button">😐</div><div *ngIf="i === 3" class="rating_button">😃</div><div *ngIf="i === 4" class="rating_button">🤩</div>
      </ion-button>
    </ion-buttons>
  `,
  styles: [
    `
      ion-buttons {
        display: flex;
        justify-content: center;
      }

      .rating_button { 
        font-size:30px;opacity:0.4; 
      } 

      .rating_button:hover { 
        font-size:32px;opacity:1; 
      }
    `
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements ControlValueAccessor {
  @Input()
  rate: number;
  @Input()
  readonly: boolean;
  @Input()
  size: string = 'default';
  @Output()
  rateChange: EventEmitter<number> = new EventEmitter();
  hoverRate: number;
  _onChange: Function;

  onClick(event, rate) {
    this.rate = rate;
    this.rateChange.emit(this.rate);
    this._onChange(this.rate);
    event.srcElement.style.opacity = '1';

    var elements = document.getElementsByClassName("rating_button");
    for (var i = 0; i < elements.length; i++) {
      if(elements[i] != event.srcElement)
        elements[i].style.opacity = '0.4';
    }
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.rate = value;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }
}
