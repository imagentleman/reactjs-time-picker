# reactjs-time-picker

## Demo

[https://imagentleman.github.io/reactjs-time-picker/](https://imagentleman.github.io/reactjs-time-picker/)

## Usage

```
import React, {useState} from 'react';
import TimePicker from "index.js";

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
