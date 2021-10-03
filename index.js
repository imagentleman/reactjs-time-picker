const generateList = (start, end, step) => {
  let list = [];

  for (let i = start; i <= end; i = i + step) {
    list.push(i.toString().padStart(2, "0"));
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

  React.useEffect(() => {
    if ((selectedHour, selectedMinute)) {
      setSelectedtime(`${selectedHour}:${selectedMinute}`);
    }
  }, [selectedHour, selectedMinute]);

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
                  onClick={() => setSelectedHour(hour)}
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
                  onClick={() => setSelectedMinute(minute)}
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
