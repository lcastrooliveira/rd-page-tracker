# About

A pure Javascript library that uses `localStorage` to track the pages a visitor has been on your website. This data is persisted in a localStorate object called `rdPageTracker`. It saves the relative path the user has visited on your website and a timestamp. If a record of a page has already been saved, it is updated to the most recent visit. This data can therefore be serialized and sent to a server in order to perform page tracking analysis.

## Requirements

- None! Just Javascript

## How to Use

Simply import the `page-tracker.min.js` file into your project in order to have access to it's methods. Use `$pageTracker` to call the methods needed.

## Methods

1. `$pageTracker.findOrCreatePageTracker()` - Finds or creates a new Tracker Object.
2. `$pageTracker.createUrlEntry(url_entry)` - Use this method register a page visited. If no url is provided the current relative path will be used.
3. `$pageTracker.findUrlEntry(url_entry)` - Returns a URL registry saved based on the string `url_entry`, the registry contains the URL found it's timestamp.
4. `$pageTracker.eraseTracker()` - Use this method to completely erase the tracker Object.

## Testing

The [QUnit](https://api.qunitjs.com/) test suit was used to test this libray. Click [here](https://lcastrooliveira.github.io/rd-page-tracker/) to access the test results.

## License
 
The MIT License (MIT)

Copyright (c) 2017 Lucas Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
