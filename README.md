[![Build Status](https://travis-ci.org/stefuhnee/wasted.svg?branch=master)](https://travis-ci.org/stefuhnee/wasted) [![Coverage Status](https://coveralls.io/repos/github/stefuhnee/wasted/badge.svg?branch=master)](https://coveralls.io/github/stefuhnee/wasted?branch=master)

# **Wasted**
Wasted is a command line utility to find the largest files in a given directory, wasting space on your hard drive!

## Usage
To use Wasted, simply clone this repository locally and run it with Node:

```
node index.js
```

## Options
By default, Wasted will run on the current working directory, but you can specify an absolute or relative path to analyze:

```
node index.js ~/Downloads
```

#### **Flags**
By default, Wasted searches non-recursively and ignores directories in the output.  You may pass optional flags to modify this behavior.
* **-d**: show directories in the output
* **-t**: truncate the output to the 5 largest files and/or directories
* **-h**: show hidden files
* **-r**: recursive search, up to 5 levels deep. Limits output to the 50 largest files and/or directories.

```
node index.js ~/Downloads -r -t
```

### TODOs
* Create an executable script
* Allow for more recursive flag options, such as specifying levels
* Extend functionality of -h flag to work on all operating systems
