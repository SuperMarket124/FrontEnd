import React from "react";
import styled from "styled-components";
import delivery from "../img/delivery.gif";
import logo from "../img/logo.png";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import RoomOutlinedIcon from "@material-ui/icons/Room";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { color } from "../theme";

import { Route, Link } from "react-router-dom";
import { Register, Login, ServiceCenter } from "../pages";

function Header() {
  return (
    <HeaderStyle>
      <HeaderTop>
        <HeaderLogo>
          <img src={delivery} />
        </HeaderLogo>
        <HeaderTopNav>
          <Link to="/join">
            <span>회원가입</span>
          </Link>
          <Link to="/login">
            <span>로그인</span>
          </Link>
          <Link to="/board">
            <span>
              고객센터
              <SpanIcon>
                <ArrowDropDownOutlinedIcon />
              </SpanIcon>
            </span>
          </Link>
          {/* <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/service-center" component={ServiceCenter} /> */}
        </HeaderTopNav>
      </HeaderTop>
      <HeaderBottom>
        <img src={logo} />
      </HeaderBottom>
      <HeaderGnb>
        <GnbCategory>
          <MenuOutlinedIcon />
          <a>전체 카테고리</a>
        </GnbCategory>
        <GnbNav>
          <a>신상품</a>
          <a>베스트</a>
          <a>알뜰쇼핑</a>
          <Link to="/goods/event">특가/혜택</Link>
        </GnbNav>
        <GnbSearch>
          <GnbInput type="text" />
          <GnbSearchBox>
            <SearchOutlinedIcon />
          </GnbSearchBox>
        </GnbSearch>
        <GnbCart>
          <RoomOutlinedIcon className="room" />
          <LocationSet>
            <button type="button" class="btn_location on">
              배송지 설정하기
            </button>
            <div className="layer_location">
              <div class="no_address">
                <span class="emph">배송지를 등록</span>하고
                <br />
                <div class="group_button double">
                  <button type="button" class="btn default login">
                    로그인
                  </button>
                  <button type="button" class="btn active searchAddress">
                    <span class="ico"></span>주소검색
                  </button>
                </div>
              </div>
            </div>
          </LocationSet>
          <ShoppingCartOutlinedIcon className="cart" />
        </GnbCart>
      </HeaderGnb>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  padding: 0rem 12rem;
`;
const HeaderTop = styled.div`
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderLogo = styled.div`
  img {
    width: 135px;
  }
`;
const HeaderTopNav = styled.div`
  span {
    padding: 0rem 0.8rem;
    font-size: 12px;
    &:first-child {
      color: #5f0080;
    }
    position: relative;
    &:after {
      display: block;
      content: "";
      background: #d8d8d8;
      width: 1px;
      height: 13px;
      position: absolute;
      top: 20%;
      right: 0;
    }

    &:last-child:after {
      display: none;
    }
  }
`;
const SpanIcon = styled.div`
  display: inline;
  position: absolute;
  right: -10px;
  top: -3px;
`;
const HeaderBottom = styled.div`
  height: 63px;
  text-align: center;
  img {
    margin-top: -20px;
    width: 103px;
  }
`;
const HeaderGnb = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
`;
const GnbCategory = styled.a`
  display: flex;
  margin-right: 55px;
  align-items: center;
  a {
    margin-left: 0.7rem;
  }
`;
const GnbNav = styled.div`
  a {
    padding: 0rem 2rem;
  }
`;
const GnbSearch = styled.div`
  display: flex;
  margin-left: 2rem;
  width: 22%;
`;
const GnbInput = styled.input`
  width: 100%;
  font-size: 110%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid #f7f7f6;
  padding: 5px 15px;
  background: #f7f7f7;
`;
const GnbSearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #f7f7f6;
  padding: 0px 5px;
`;
const GnbCart = styled.div`
  padding-left: 45px;
  display: flex;
  width: 100px;

  .room {
    font-size: 35px;
    background: #fff;
  }

  .cart {
    margin-left: 2rem;
    font-size: 35px;
  }
`;

const LocationSet = styled.div`
  display: none;
  position: absolute;
  z-index: 300;
  right: 41px;
  top: 56px;
  width: 308px;
  padding: 20px 18px 19px 20px;
  border: 1px solid #ddd;
  background-color: #fff;
`;
