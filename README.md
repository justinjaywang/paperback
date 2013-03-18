# Paperback

![Paperback screenshot](paperback-screenshot.png)

**Paperback is a theme for Wintersmith** inspired by the typography of printed novels and informed by blog posts about the digital reading experience written by [Information Architects](http://informationarchitects.net/blog/responsive-typography-the-basics/), among others.

## Features

### Scale and rhythm

Font sizes and spacings use the [3:5 single-stranded Fibonacci scale](http://lamb.cc/typograph/).

### Responsiveness

The site is responsive to two size ranges, with a breakpoint just below a typical tablet portrait screen width.

## Installation

### Wintersmith

Install [Wintersmith](https://github.com/jnordberg/wintersmith#quick-start) on your system using [npm](https://npmjs.org/).

### Stylus

Paperback uses [Stylus](https://github.com/learnboost/stylus) to generate CSS. Install the Wintersmith [Stylus plugin](https://github.com/jnwng/wintersmith-stylus) next.

### Replace skeleton site with Paperback

After installation of Wintersmith and its Stylus plugin are complete, run 

```
$ wintersmith new <path>
```

to generate a skeleton site in the `<path>` that you specify.

Replace these skeleton directories and files with those of Paperback.

## Configuration

### Posts

Save posts in **contents/articles/<post-directory-name>** as index.md. Be sure to include the metadata as in the example posts.

In the Markdown file, be sure to denote the "read more" break by placing

```
<span class="more"></span>
```

between the introduction text and the rest of the content.

Use `<h2>` as the largest header, as the post title will be automatically generated as `<h1>` from the  title specified in the metadata.


### Authors

Add authors by creating a .json file in **contents/authors/**. The author metadata in the post Markdown file should correspond to the .json file name.

## Preview and build

To preview, run

```
$ wintersmith preview
```

and point your browser to `http://localhost:8080`.

To build, run

```
$ wintersmith build
```
to generate a static site in the `build/` directory.

## Generating JSON file of page metadata
### Input

`scan.js` takes an optional pattern argument and searches the current working directory for all matches using [Javscript glob](https://github.com/isaacs/node-glob). For example,

```
$ node scan.js 'contents/articles/**/*.md'
```
finds any Markdown file within any folder within `contents/articles/` in the current working directory. The default pattern, if no additional pattern argument is specified, is set to `contents/articles/**/*.md`, as is standard for Wintersmith posts.

### Output

`scan.js` outputs the metadata for each pattern-matched file to `stdout` in JSON format.

```
$ node scan.js 'contents/articles/**/*.md' > pages.json
```

### Example
For a markdown file called `example.md` in the directory `example-files/` that contains

```
---
title: Example Markdown File
author: Justin
date: 2013-03-17
template: example.jade
tags: tag1, tag2, tag3
---

Body content
```

, the command 

```
$ node scan.js 'example-files/example.md' > pages.json
```

would return a file `pages.json` that contains

```
[
  {
    "title": "Example Markdown File",
    "author": "Justin",
    "date": "2012-08-12",
    "template": "example",
    "tags": "tag1, tag2, tag3",
    "path": "example-files/example.md"
  }
]
```

---

## Next steps

- Ability to sort through tag metadata to generate a dedicated page for a particular tag.
- Author page that makes use of the author's bio metadata.

