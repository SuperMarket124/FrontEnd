import React from "react";
import styled from "styled-components";

const ServiceCenterBoard = () => {
  return (
    <ServiceCenterPageSection>
      <header>
        <h2>
          공지사항
          <span>
            컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.
          </span>
        </h2>
      </header>
      <form name="">
        <table>
          <tr>
            <td></td>
          </tr>
        </table>
      </form>
    </ServiceCenterPageSection>
  );
};

export default ServiceCenterBoard;

const ServiceCenterPageSection = styled.section`
  float: right;
  width: 820px;

  header {
    padding: 5px 0 34px;

    h2 {
      height: 36px;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
      color: #333;
      letter-spacing: -0.5px;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;

      span {
        padding-left: 11px;
        font-size: 14px;
        color: #999;
        line-height: 20px;
        letter-spacing: -0.3px;
        vertical-align: 3px;
      }
    }
  }
`;
