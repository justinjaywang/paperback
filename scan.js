#!/usr/bin/env node

// modules
var fs = require('fs'),
  glob = require('glob');

// read optional pattern argument
numArgs = process.argv.length;
if (numArgs>3) {
  throw new Error('too many arguments');
} else if (numArgs==3) {
  var pattern = process.argv[2];
} else {
  var pattern = 'contents/articles/**/*.md' // default pattern if none specified
}

// parameters
var startLine = endLine = '---',
  reading = false,
  pages = [];

// glob the cwd
glob(pattern, function(err,files) {
  files.forEach(function(file) {
    page = {};
    fs.readFileSync(file,'utf-8').split('\n').forEach(function(line) {
      if (line==endLine && reading) { // end reading metadata
        page['path'] = file;
        reading = false;
      } else if (reading) { // add key-value metadata to page object
        arr = line.split(/:(.+)/);
        page[arr[0]] = arr[1].trim();
      } else if (line==startLine && !reading) { // start reading metadata
        reading = true;
      }
    });
    pages.push(page);
  });
  // write to stdout
  process.stdout.write(JSON.stringify(pages,undefined,2));
  process.stdout.write('\n');
});
