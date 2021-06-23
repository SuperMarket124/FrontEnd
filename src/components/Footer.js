import React from "react";
import styled from "styled-components";
import { color } from "../theme";

// TODO URL 변경필요
const Footer = () => {
  return (
    <FooterView>
      <InnerFooter>
        <Call>
          <h2>고객행복센터</h2>
          <div className="call__view">
            <h3>
              <span>0000-0000</span>
            </h3>
            <dl>
              <dt>365고객센터</dt>
              <dd>오전 9시 - 오후 6시</dd>
            </dl>
          </div>
        </Call>
        <Company>
          법인명(상호) : (주)clonemarket
          <Bar>I</Bar>
          사업자등록번호 : 000-00-00000
          <br />
          통신판매업: 제 0000-OOOO-00000 호<Bar>I</Bar>
          개인정보보호책임자 : 홍길동
          <br />
          주소 : <address>서울특별시 XXX XXXX 00-0, 00</address>
          <Bar>I</Bar>
          대표이사 : 홍길은
          <br />
          이메일 :
          <a href="#">
            <email>help@clonemarket.com</email>
          </a>
          <br />
          <em className="copy">@ CLONE MARKET CORP.</em>
          <Sms>
            <ul>
              <li>
                <a href="https://instagram.com/marketkurly" target="_blank">
                  <img
                    src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"
                    alt="클론마켓 인스타그램 바로가기"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/marketkurly" target="_blank">
                  <img
                    src="https://res.kurly.com/pc/ico/1810/ico_fb.png"
                    alt="클론마켓 페이스북 바로가기"
                  />
                </a>
              </li>
              <li>
                <a href="http://blog.naver.com/marketkurly" target="_blank">
                  <img
                    src="https://res.kurly.com/pc/ico/1810/ico_blog.png"
                    alt="클론마켓 네이버블로그 바로가기"
                  />
                </a>
              </li>
              <li>
                <a href="https://m.post.naver.com/marketkurly" target="_blank">
                  <img
                    src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"
                    alt="클론마켓 네이버포스트 바로가기"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
                  target="_blank"
                >
                  <img
                    src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"
                    alt="클론마켓 유튜브 바로가기"
                  />
                </a>
              </li>
            </ul>
          </Sms>
        </Company>
      </InnerFooter>
    </FooterView>
  );
};

export default Footer;

const FooterView = styled.footer`
  width: 1050px;
  margin: 0 auto;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding-bottom: 60px;
  font-weight: 400;
  letter-spacing: -0.2px;
`;

const InnerFooter = styled.div`
  overflow: hidden;
  padding-bottom: 20px;
  justify-content: space-between;
`;

const Call = styled.div`
  width: 534px;
  float: left;

  h2 {
    padding: 29px 0 2px;
    font-weight: 700;
    font-size: 20px;
    color: #333;
    line-height: 24px;
  }

  .call__view {
    padding-top: 20px;
    overflow: hidden;

    h3 > span {
      padding-top: 4px;
      font-weight: 800;
      font-size: 28px;
      color: #333;
      line-height: 36px;
      letter-spacing: -0.5px;
      white-space: nowrap;
      float: left;
      width: 140px;
      margin-right: 16px;
    }

    dl {
      font-size: 14px;
      color: #333;
      line-height: 22px;
      letter-spacing: -0.2px;

      dt {
        display: block;
      }

      dd {
        color: #999;
      }
    }
  }
`;

const Company = styled.div`
  float: left;
  padding-top: 29px;
  font-size: 12px;
  color: #999;
  line-height: 20px;

  address {
    display: inline;
  }

  .copy {
    display: block;
    padding-top: 16px;
    font-style: normal;
    font-size: 10px;
    color: #949296;
    line-height: 22px;
    letter-spacing: 0;
  }

  a {
    color: ${color.PURPLE};
  }
`;

const Bar = styled.span`
  padding: 0 4px 0 4px;
`;

const Sms = styled.div`
  ul {
    float: left;
    padding-top: 16px;

    li {
      float: left;

      a {
        display: block;
        width: 30px;
        height: 30px;
        margin-right: 10px;
        vertical-align: top;

        img {
        }
      }
    }
  }
`;
