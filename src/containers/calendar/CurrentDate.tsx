import styled from "styled-components";
import { BsPlus } from "react-icons/bs";

const HooksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 15px;
`;
const Hook = styled.div`
  z-index: 1;
  width: 15px;
  height: 30px;
  background: rgb(33, 37, 43);
  border: 3px solid rgb(214, 240, 211);
  margin: 0 20px;
`;
const DayContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 0 10px 0;
  border-radius: 3px;
  background: rgb(33, 37, 43);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DayOfMonth = styled.div`
  font-size: 100px;
  font-weight: lighter;
`;
const DayOfWeek = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  user-select: none;
  background: transparent;
  position: absolute;
  border-style: none;
  border-radius: 50px;
  bottom: 5px;
  right: 5px;
  &:hover {
    background: rgb(24, 28, 34);
  }
`;

export const CurrentDate = ({ value, onClick }) => {
  const dayOfMonth = () => value.clone().format("D");
  const dayOfWeek = () => value.clone().format("dddd");

  return (
    <>
      <HooksContainer>
        <Hook />
        <Hook />
      </HooksContainer>
      <DayContainer>
        <DayOfMonth>{dayOfMonth()}</DayOfMonth>
        <DayOfWeek>{dayOfWeek()}</DayOfWeek>
        <Button>
          <BsPlus fill="#FFFFFF" size="40" onClick={onClick} />
        </Button>
      </DayContainer>
    </>
  );
};
