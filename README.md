# reactjs-time-picker

## Demo

[https://imagentleman.github.io/reactjs-time-picker/](https://imagentleman.github.io/reactjs-time-picker/)

## Example

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Page</title>
    <style>
      .timepicker {
        padding: 20px;
      }
    </style>
  </head>

  <body>
    <div id="root"></div>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>

    <script
      type="text/babel"
      data-type="module"
      data-plugins="transform-modules-umd"
      data-presets="react"
      src="index.js"
    ></script>

    <script
      type="text/babel"
      data-type="module"
      data-plugins="transform-modules-umd"
      data-presets="react"
    >
      import TimePicker from "index.js";

      const className = "timepicker";

      ReactDOM.render(
        <TimePicker
          className={className}
          inputProps={{ id: "timepicker" }}
          onChange={console.log}
          closeOnClickOutside
        />,
        document.getElementById("root")
      );
    </script>
  </body>
</html>
```
