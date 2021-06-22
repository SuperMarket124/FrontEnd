import { GolfCourseRounded } from "@material-ui/icons";
import React from "react";
import styled, { css } from "styled-components";
import { color } from "../../theme";

const ServiceCenterNav = () => {
  return (
    <Snb>
      <h2>고객센터</h2>
      <InnerSnb>
        <ul>
          <li>
            <Item>공지사항</Item>
          </li>
          <li>
            <Item active>자주하는 질문</Item>
          </li>
          <li>
            <Item>1:1 문의</Item>
          </li>
          <li>
            <Item>상품 제안</Item>
          </li>
          <li>
            <Item>에코포장 피드백</Item>
          </li>
        </ul>
      </InnerSnb>
      <InquireLink className="">
        <a>
          <span>도움이 필요하신가요?</span>
          1:1문의하기
        </a>
      </InquireLink>
    </Snb>
  );
};

export default ServiceCenterNav;

const menuHighlight = css`
  background: ${color.T_SIDEBAR_HOVER}
    url("https://res.kurly.com/pc/ico/2008/ico_arrow_6x11_on.svg") no-repeat
    174px 52%;
  background-size: 6px 11px;
  font-weight: 700;
  color: ${color.PURPLE};
`;

const Snb = styled.div`
  float: left;
  width: 200px;

  h2 {
    padding: 8px 0 33px 1px;
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: ${color.BLACK};
    letter-spacing: -0.5px;
  }
`;

const InnerSnb = styled.aside`
  border: 1px solid ${color.T_SIDEBAR_BORDER};
  border-bottom: 0;

  ul {
    list-style-type: none;

    li {
      border-bottom: 1px solid ${color.T_SIDEBAR_BORDER};
    }
  }
`;

const Item = styled.a`
  display: block;
  overflow: hidden;
  padding: 15px 0 15px 20px;
  background: ${color.WHITE}
    url("https://res.kurly.com/pc/ico/2008/ico_arrow_6x11.svg") no-repeat 174px
    52%;
  background-size: 6px 11px;
  font-size: 14px;
  color: ${color.T_TEXT_GRAY};
  line-height: 20px;
  letter-spacing: -0.3px;

  ${(props) => props.active && menuHighlight}

  &:hover {
    ${menuHighlight}
  }
`;

const InquireLink = styled.aside`
  display: block;
  overflow: hidden;
  width: 200px;
  height: 60px;
  margin-top: 20px;
  padding: 9px 0 0 21px;
  border-radius: 0 100px 100px 0;
  background: ${color.T_SIDEBAR_HOVER}
    url("https://res.kurly.com/pc/ico/2008/ico_arrow_6x11_on.svg") no-repeat
    174px 25px;
  background-size: 6px 11px;
  font-size: 12px;
  color: ${color.BLACK};
  line-height: 20px;

  span {
    display: block;
    padding-bottom: 1px;
    font-weight: 700;
    font-size: 14px;
  }
`;
