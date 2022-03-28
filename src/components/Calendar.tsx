import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Flex } from "src/styled-components/Flex";
import { CurrentDate } from "../containers/calendar/CurrentDate";
import { Month } from "../containers/calendar/Month";

const CalendarContainer = styled.div`
  min-width: 400px;
`;
const Arrow = styled.div`
  user-select: none;
  cursor: pointer;
  position: absolute;
  top: 45%;
  left: ${(props: { left: string }) => props.left};
`;
const MonthWrapper = styled.div`
  position: relative;
`;
export const Calendar = () => {
  const [value, setValue] = useState(moment());
  const [range, setRange] = useState("");

  const prevMonth = () => value.clone().subtract(1, "month");
  const nextMonth = () => value.clone().add(1, "month");

  return (
    <Flex>
      <CalendarContainer>
        <CurrentDate value={value} onClick={() => setRange("start")} />
        <MonthWrapper>
          <Arrow left="-50px">
            <BiChevronLeft
              size="50"
              fill={"green"}
              onClick={() => {
                setValue(prevMonth());
              }}
            />
          </Arrow>
          <Month
            value={value}
            setValue={setValue}
            range={range}
            setRange={setRange}
          />
          <Arrow left="100%">
            <BiChevronRight
              size="50"
              fill={"green"}
              onClick={() => {
                setValue(nextMonth());
              }}
            />
          </Arrow>
        </MonthWrapper>
      </CalendarContainer>
    </Flex>
  );
};
