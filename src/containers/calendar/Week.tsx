import moment from "moment";
import styled from "styled-components";

const THEAD = styled.thead`
  color: rgb(95, 184, 108);
`;
const TD = styled.td`
  width: 50px;
  text-align: center;
  padding: 5px 0;
  border-top: 1px solid rgb(230, 242, 232);
  border-bottom: 1px solid rgb(230, 242, 232);
`;

export const Week = () => {
  return (
    <THEAD>
      <tr>
        {moment.weekdaysShort().map((weekDay) => {
          return <TD key={weekDay}>{weekDay}</TD>;
        })}
      </tr>
    </THEAD>
  );
};
