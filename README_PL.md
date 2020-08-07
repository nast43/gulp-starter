# gulp-starter

Prosty starter gulpa dla projektów front-endowych.

## Podstawowe elementy

- Kompilator SASS (używaj rozszerzenia `.scss` lub zmień je w `gulpfile.js`)
- Minimalizacja CSS i JS
- Łączenie (concat) plików JS
- JSHint (dla ES6)
- Optymalizacja obrazów

## Wymagania

- Node.JS &ge; 6.1
- npm &ge; 4.6

## Instrukcja

1. Zrób fork tego repo. Sprawdź [GitHub Help](https://help.github.com/articles/fork-a-repo/) jeśli potrzebujesz pomocy.
2. Jeśli jeszcze nie masz Node.js, zainstaluj go stąd https://nodejs.org/en/.
3. Jeśli jeszcze nie masz gulpa, zainstaluj go: `npm install -g gulp gulp-cli`.
4. Zainstaluj pakiety npm: `npm install`.
5. Umieść pliki w folderach wewnątrz katalogu `src`.
6. Uruchom gulpa: `gulp`.

## Q&A

### Dlaczego `gulp-watch` nie uruchamia się przy nowych zdjęciach?

Nie mam pojęcia ¯\\\_(ツ)_/¯  Zrestartuj gulpa, wtedy `gulp-watch` zoptymalizuje Twoje zdjęcia. Jeśli wiesz jak rozwiązać ten problem, wykonaj proszę pull request.

### Co oznaczają te pliki `.keep`?

Nic. Stworzyłem je wewnątrz folderów, ponieważ Git nie śledzi pustych katalogów (zobacz ten [wątek](http://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository) na Stack Overflow). Możesz je usunąć, gdy umieścisz swoje pliki w tych folderach.

## Licencja

[MIT License](LICENSE)

[![Run on Repl.it](https://repl.it/badge/github/nast43/gulp-starter)](https://repl.it/github/nast43/gulp-starter)