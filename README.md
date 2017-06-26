# gulp-starter
Simple gulp starter for front-end projects.

## Basic elements

- SASS compiler (please use `.scss` extension or change extension in `gulpfile.js`)
- CSS & JS minify
- JS concat
- JSHint (for ES6)
- Image optimization

## Requirements

- Node.JS &ge; 6.1
- npm &ge; 4.6

## Instruction
1. Fork this repo. Check [GitHub Help](https://help.github.com/articles/fork-a-repo/) if you need help.
2. If you don't have Node.js, install it from https://nodejs.org/en/.
3. If you don't have gulp, install it: `npm install -g gulp gulp-cli`.
4. Install npm packages: `npm install`.
5. Put your files in directories inside `src`.
6. Start using gulp: `gulp`.

## Q&A

### Why `gulp-watch` doesn't trigger on new images?

I don't know why ¯\\\_(ツ)_/¯ You need to restart gulp, then `gulp-watch` will optimize your photos. If you know how track new photos, please make pull request.

### What does `.keep` file mean?

Nothing. I created these files insides directories, because Git doesn't track empty directories (see this [thread](http://stackoverflow.com/questions/115983/how-can-i-add-an-empty-directory-to-a-git-repository) on Stack Overflow). You can delete them when you put your files inside directories.

## License

[MIT License](LICENSE)