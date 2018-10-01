# Count Chars

[![Build Status](https://travis-ci.com/wboka/Count-Chars.svg?branch=master)](https://travis-ci.com/wboka/Count-Chars)

jQuery plugin to count characters in a text field.

## Disclaimer

The `maxlength` attribute is supported in Internet Explorer 10+, Firefox, Opera 15+, Chrome, and Safari.

Note: The `maxlength` attribute of the `<textarea>` tag is not supported in Internet Explorer 9 and earlier versions, or in Opera 12 and earlier versions.

## Requirements

* jQuery >= 1.0.0

## Versioning

### Major.Minor.Patch

* Major - Breaks backwards compatibility
* Minor - Adds functionality without breaking backwards compatibility
* Patch - Bug fixes that are backwards compatible

## Settings

| Name | Type | Default | Accepts | Example |
|---|---|---|---|---|
| parentContainer | `string` | "div" | Any valid HTML element | "parentContainer": "p" |
|charsClass|`string`|"charsRemaining"|Any string|"charsClass": "chars"|
|position|`string`|"before"|"before" or "after"|"position": "after"|
|debug|`boolean`|false|true or false|"debug": true|
|debugMode|`string`|"console"|"alert" or "console"|"debugMode": "alert"|
|clearConsole|`boolean`|false|true or false|"clearConsole": true|

## Setup (2 Options)

### Option 1

Include the following code before the `</body>` tag:

```js
1. <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
2. <script type="text/javascript" src="jquery.count-chars.js"></script>
3. <script type="text/javascript" >$("textarea, input").countChars();</script>
```

**Notes:**

* Line 1 can be replaced by any link to a jQuery library version 1.0 or higher.
* Line 2 will point to the Count Chars plugin location in your file structure.
* Line 3  sets up the Count Chars plugin with the default values.

## OR

### Option 2

Include the following code before the `</head>` tag:

```js
1. <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
2. <script type="text/javascript" src="jquery.count-chars.js"></script>
3. <script type="text/javascript" >
4. 	$(document).ready(function() {
5. 		$("textarea, input").countChars();
6. 	});
7. </script>
```

**Notes:**

* Line 1 can be replaced by any link to a jQuery library version 1.0 or higher.
* Line 2 will point to the Count Chars plugin location in your file structure.
* Line 5 sets up the Count Chars plugin with the default values.
