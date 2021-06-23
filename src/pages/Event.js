import React, { useEffect, useState } from "react";
import { MainArticle } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { eventDummy } from "../sample/goods_benefit";

const Event = () => {
  const [events, setEvents] = useState(eventDummy);

  console.log(events);
  return (
    <MainArticle>
      <MainEvent>
        <ul>
          {events.map((event) => {
            return (
              <li>
                <Link to={event.link}>
                  <img src={event.img} />
                </Link>
              </li>
            );
          })}
        </ul>
      </MainEvent>
    </MainArticle>
  );
};

export default Event;

const MainEvent = styled.div`
  font-family: noto sans;
  font-weight: 400;
  letter-spacing: 0;

  ul {
    li {
      padding-bottom: 10px;
    }
  }
`;
