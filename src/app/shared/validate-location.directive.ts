import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateLocationDirective,
      multi: true,
    },
  ],
})
export class ValidateLocationDirective implements Validator {
  constructor() {}

  validate(formGroup: FormGroup): { [key: string]: boolean } | null {
    const address = formGroup.controls['address'];
    const city = formGroup.controls['city'];
    const country = formGroup.controls['country'];
    const onlineUrl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if (
      (address &&
        address.value &&
        city &&
        city.value &&
        country &&
        country.value) ||
      (onlineUrl && onlineUrl.value)
    ) {
      return null;
    } else {
      return { validateLocation: false };
    }
  }
}
