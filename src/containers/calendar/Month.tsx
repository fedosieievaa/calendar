import moment from "moment";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "../../styled-components/Flex";
import { Week } from "./Week";

type TDProps = {
  background?: string;
  color?: string;
};

const MonthContainer = styled.div`
  border: ${(props: { border: string }) => props.border || "none"};
  width: calc(100%-20px);
  border-radius: 3px;
  background: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const MonthName = styled.div`
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;
const TABLE = styled.table`
  margin: 10px 0 0 0;
  border-collapse: collapse;
  width: 100%;
`;
const TD = styled.td<TDProps>`
  width: 50px;
  text-align: center;
  padding: 10px 0;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
`;

export const Month = ({ value, setValue, range, setRange }) => {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").endOf("week");
  const [calendar, setCalendar] = useState([]);
  const [startRange, setStartRange] = useState<any>();
  const [endRange, setEndRange] = useState<any>();

  const exceptions = [
    moment("2022-04-01"),
    moment("2022-04-07"),
    moment("2022-04-9"),
    moment("2022-04-11"),
    moment("2022-06-28"),
  ];

  useEffect(() => {
    const day = startDay.clone().subtract(1, "day");
    const calendarData = [];

    while (day.isBefore(endDay, "day")) {
      calendarData.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }

    setCalendar(calendarData);
  }, [value]);

  const currentMonth = () => value.format("MMMM");
  const currentYear = () => value.format("YYYY");

  const isSelectedMonth = (day) => value.isSame(day, "month");
  const isSelectedDay = (day) => value.isSame(day, "day");
  const isToday = (day) => day.isSame(new Date(), "day");
  const isBetweenRange = (day) =>
    day.isBetween(startRange, endRange, undefined, []);

  const setDayBackground = (day) => {
    if (isSelectedDay(day)) return "rgb(95,184,108)";
    if (isToday(day)) return "rgb(214, 214, 214)";

    for (let exceptionDate of exceptions) {
      if (day.isSame(exceptionDate)) return;
    }

    if (isBetweenRange(day)) return "rgb(168, 202, 255)";
  };

  const setDayColor = (day) => {
    if (isSelectedDay(day) || isToday(day)) return "white";
    if (!isSelectedMonth(day)) return "grey";
  };

  const clickDay = (day) => {
    if (range === "start" && day.isAfter(new Date(), "day")) {
      setEndRange("");
      setStartRange(day);
      setRange("end");
    }
    if (range === "end" && day.isAfter(startRange, "day")) {
      setEndRange(day);
      setRange("");
    }
    setValue(day);
  };

  return (
    <MonthContainer border={range !== "" && "1px solid rgb(168, 202, 255)"}>
      <Flex width="100%" align="center" direction="column">
        <MonthName>
          {currentMonth()} {currentYear()}
        </MonthName>
        <TABLE>
          <Week />
          <tbody>
            {calendar.map((week) => {
              return (
                <tr key={week}>
                  {week.map((day) => {
                    return (
                      <TD
                        key={day}
                        background={setDayBackground(day)}
                        color={setDayColor(day)}
                        onClick={() => clickDay(day)}
                      >
                        {day.format("D")}
                      </TD>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </TABLE>
      </Flex>
    </MonthContainer>
  );
};
