const leftPad = (number) => {
  return number.toString().padStart(2, "0");
};

const generateList = (start, end, step) => {
  let list = [];

  for (let i = start; i <= end; i = i + step) {
    list.push(leftPad(i));
  }

  return list;
};

const TimePicker = (props) => {
  const {
    className,
    hourStart = 0,
    hourEnd = 23,
    hourStep = 1,
    minuteStart = 0,
    minuteEnd = 59,
    minuteStep = 1,
    inputProps,
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedHour, setSelectedHour] = React.useState();
  const [selectedMinute, setSelectedMinute] = React.useState();
  const [selectedTime, setSelectedtime] = React.useState("");

  const hours = generateList(hourStart, hourEnd, hourStep);
  const minutes = generateList(minuteStart, minuteEnd, minuteStep);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (hour, minute) => {
    setSelectedHour(hour);
    setSelectedMinute(minute);
  };

  React.useEffect(() => {
    const formattedHour = selectedHour
      ? leftPad(selectedHour)
      : leftPad(hourStart);
    const formattedMinute = selectedMinute
      ? leftPad(selectedMinute)
      : leftPad(minuteStart);

    if (selectedHour !== undefined || selectedMinute !== undefined) {
      setSelectedtime(`${formattedHour}:${formattedMinute}`);
    }
  }, [selectedHour, selectedMinute]);

  React.useEffect(() => {
    const pickerStyle = document.querySelector("#reactjs-time-picker");

    if (!pickerStyle) {
      var style = document.createElement("style");
      style.id = "reactjs-time-picker";
      style.innerHTML = `
        .reactjs-time-picker {
          position: relative;
        }
        
        .reactjs-time-picker__list {
          display: flex;
          flex-direction: column;
          height: 240px;
          overflow: auto;
        }
        
        .reactjs-time-picker__dropdown {
          display: flex;
        }
        
        .reactjs-time-picker__button {
          appearance: none;
          border: 0;
          padding: 8px 16px;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={`reactjs-time-picker ${className}`}>
      <input
        {...inputProps}
        onClick={toggleDropdown}
        value={selectedTime}
        readOnly
      />

      {isOpen && (
        <div className="reactjs-time-picker__dropdown">
          <div className="reactjs-time-picker__list">
            {hours.map((hour) => {
              return (
                <button
                  key={hour}
                  className="reactjs-time-picker__button"
                  onClick={() => handleSelection(hour, selectedMinute)}
                >
                  {hour}
                </button>
              );
            })}
          </div>

          <div className="reactjs-time-picker__list">
            {minutes.map((minute) => {
              return (
                <button
                  key={minute}
                  className="reactjs-time-picker__button"
                  onClick={() => handleSelection(selectedHour, minute)}
                >
                  {minute}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
