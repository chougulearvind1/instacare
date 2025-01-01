import React from "react";

import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";

export function MyDatePicker() {
  const [selected, setSelected] = React.useState<Date>();
  
  return (
    <DayPicker
      mode="single"
      onSelect={setSelected}
      selected={selected}
      disabled={{before:new Date()}}
      classNames={classNames}
      components={{
        DayButton: (props) => {
          const { day,  ...buttonProps } = props;
          return (
            <button
              {...buttonProps}
              // Prevent the default click event
              onClick={() => setSelected(day.date)}
              // Handle the double click event and reset the selection
              onDoubleClick={() => setSelected(undefined)}
            />
          );
        }
      }}
      footer={selected?.toDateString() || "Double click to select a date"}
    />
  );
}