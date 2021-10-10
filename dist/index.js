(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TimePicker = factory(global.React));
})(this, (function (React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var leftPad = number => {
    return number.toString().padStart(2, "0");
  };

  var generateList = (start, end, step) => {
    var list = [];

    for (var i = start; i <= end; i = i + step) {
      list.push(leftPad(i));
    }

    return list;
  };

  var TimePicker = props => {
    var {
      className,
      hourStart = 0,
      hourEnd = 23,
      hourStep = 1,
      minuteStart = 0,
      minuteEnd = 59,
      minuteStep = 1,
      inputProps,
      onChange,
      closeOnClickOutside
    } = props;
    var [isOpen, setIsOpen] = React__default["default"].useState(false);
    var [selectedHour, setSelectedHour] = React__default["default"].useState();
    var [selectedMinute, setSelectedMinute] = React__default["default"].useState();
    var [selectedTime, setSelectedtime] = React__default["default"].useState("");
    var containerRef = React__default["default"].useRef();
    var hours = generateList(hourStart, hourEnd, hourStep);
    var minutes = generateList(minuteStart, minuteEnd, minuteStep);

    var toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    var handleSelection = (hour, minute) => {
      setSelectedHour(hour);
      setSelectedMinute(minute);
    };

    var handleClickOutside = e => {
      if (containerRef.current.contains(e.target)) return;
      setIsOpen(false);
    };

    React__default["default"].useEffect(() => {
      var formattedHour = selectedHour ? leftPad(selectedHour) : leftPad(hourStart);
      var formattedMinute = selectedMinute ? leftPad(selectedMinute) : leftPad(minuteStart);

      if (selectedHour !== undefined || selectedMinute !== undefined) {
        setSelectedtime("".concat(formattedHour, ":").concat(formattedMinute));

        if (onChange) {
          onChange("".concat(formattedHour, ":").concat(formattedMinute));
        }
      }
    }, [selectedHour, selectedMinute]);
    React__default["default"].useEffect(() => {
      var pickerStyle = document.querySelector("#reactjs-time-picker");

      if (!pickerStyle) {
        var style = document.createElement("style");
        style.id = "reactjs-time-picker";
        style.innerHTML = "\n        .reactjs-time-picker {\n          position: relative;\n        }\n        \n        .reactjs-time-picker__list {\n          display: flex;\n          flex-direction: column;\n          height: 240px;\n          overflow: auto;\n        }\n        \n        .reactjs-time-picker__dropdown {\n          display: flex;\n        }\n        \n        .reactjs-time-picker__button {\n          appearance: none;\n          border: 0;\n          padding: 8px 16px;\n        }\n      ";
        document.head.appendChild(style);
      }

      if (closeOnClickOutside) {
        document.addEventListener("click", handleClickOutside);
      }

      return () => {
        if (closeOnClickOutside) {
          document.removeEventListener("click", handleClickOutside);
        }
      };
    }, []);
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: "reactjs-time-picker ".concat(className),
      ref: containerRef
    }, /*#__PURE__*/React__default["default"].createElement("input", _extends({}, inputProps, {
      onClick: toggleDropdown,
      value: selectedTime,
      readOnly: true
    })), isOpen && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "reactjs-time-picker__dropdown"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "reactjs-time-picker__list"
    }, hours.map(hour => {
      return /*#__PURE__*/React__default["default"].createElement("button", {
        key: hour,
        className: "reactjs-time-picker__button",
        onClick: () => handleSelection(hour, selectedMinute)
      }, hour);
    })), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "reactjs-time-picker__list"
    }, minutes.map(minute => {
      return /*#__PURE__*/React__default["default"].createElement("button", {
        key: minute,
        className: "reactjs-time-picker__button",
        onClick: () => handleSelection(selectedHour, minute)
      }, minute);
    }))));
  };

  return TimePicker;

}));
