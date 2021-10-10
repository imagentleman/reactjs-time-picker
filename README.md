# reactjs-time-picker

## Demo

[https://imagentleman.github.io/reactjs-time-picker/](https://imagentleman.github.io/reactjs-time-picker/)

## Package

[https://www.npmjs.com/package/@imagentleman/reactjs-time-picker](https://www.npmjs.com/package/@imagentleman/reactjs-time-picker)

## Usage

```
import React, {useState} from 'react';
import TimePicker from "@imagentleman/reactjs-time-picker";

ReactDOM.render(
  <TimePicker
    className={"my-time-picker-css"}
    inputProps={{ id: "timepicker" }}
    onChange={(value) => console.log(value)}
    closeOnClickOutside
  />,
  document.getElementById("root")
);
```

| Prop | Description |
| --- | --- |
| className | CSS class that overrides the main container styles |
| inputProps | Object with properties to be added to the input |
| onChange | Callback for the change event |
| closeOnClickOutside | Optional attribute to close the picker when clicking outside of it |

## Installation

`npm i @imagentleman/reactjs-time-picker`

## Size

[1kB](https://bundlephobia.com/package/@imagentleman/reactjs-time-picker) minified + gzipped