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
| hourStart | Optional attribute for the starting hour (default = 0) |
| hourEnd | Optional attribute for the ending hour (default = 23) |
| hourStep | Optional attribute for the hour increment (default = 1) |
| minuteStart | Optional attribute for the starting minute (default = 0) |
| minuteEnd | Optional attribute for the ending minute (default = 59) |
| minuteStep | Optional attribute for the minute increment (default = 1) |
| inputProps | Optional object that will be spread in the input with the value |

## Installation

`npm i @imagentleman/reactjs-time-picker`

## Styles

Besides using the className prop, you can override the CSS classes directly. The component uses BEM and each individual element in the component (dropdown panel, each hour or minute option, etc) has a specific CSS class to override manually (e.g., reactjs-time-picker__button).

## Size

[1kB](https://bundlephobia.com/package/@imagentleman/reactjs-time-picker) minified + gzipped
