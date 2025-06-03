import { useState, useEffect } from "react";
import { Days } from "../mockData/WeekDays";

export const DisplayDropdown = () => {
    const [selectedDay, setSelectedDay] = useState("Sunday");
    const [onDays, setOnDays] = useState(Days);
    const [offDays, setOffDays] = useState([]);
  
    const handleUpdateOnDays = (el) => {
      setOnDays([...onDays, el]);
      const indexOfElement = offDays.findIndex(d => d === el);
      offDays.splice(indexOfElement, 1);
    };
  
    const handleUpdateOffDays = () => {
      setOffDays([...offDays, selectedDay]);
      const indexOfElement = onDays.findIndex(d => d === selectedDay);
      onDays.splice(indexOfElement, 1);
      setSelectedDay(onDays[0]);
    };

    useEffect(() => {
        setOffDays([...offDays, "Saturday", "Sunday"]);
        const indexOne = onDays.findIndex(d => d === "Saturday");
        onDays.splice(indexOne, 1);
        const indexTwo = onDays.findIndex(d => d === "Sunday");
        onDays.splice(indexTwo, 1);
        setSelectedDay(onDays[0]);
        // za da ne dava warning
        // eslint-disable-next-line 
    }, []);
  
    return (
      <div>
        <div>
          <select onChange={(e) => setSelectedDay(e.target.value)}>
            {onDays.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              )
            })}
          </select>
          <button onClick={handleUpdateOffDays}>Add Day Off</button>
  
          <div>
            <ul>
              {offDays.map((element, index) => {
                return (
                  <li key={index} onClick={() => handleUpdateOnDays(element)}>
                    {element}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
};
