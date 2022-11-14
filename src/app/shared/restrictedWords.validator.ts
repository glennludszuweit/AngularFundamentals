import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]): { [key: string]: any } {
  return (control: FormControl) => {
    if (!words) return null;

    const invalidWords = words.map((w: string) =>
      control.value.includes(w) ? w : null
    );

    return invalidWords && invalidWords.length > 0
      ? { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
