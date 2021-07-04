import React, { useState } from "react";
import styled, { css } from "styled-components";
import { color } from "../../theme";

import FormInputText from "../common/FormInputText";
import FormButton from "../common/FormButton";
import FormRadioButton from "../common/FormRadioButton";
import Modal from "../common/Modal";

import DaumPostCode from "react-daum-postcode";

import { Link } from "react-router-dom";

// TODO image url change
// TODO 알림메시지 모달
// TODO 이용 양관 동의 버튼
// TODO input마다 폼 체크
// TODO 폼 체크 후 전송

const RegisterForm = () => {
  // validate
  const [idValidate, setIdValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [passwordChkValidate, setPasswordChkValidate] = useState(true);

  // address
  const [addressFlag, setAddressFlag] = useState(false);
  const [isAddressModal, setAddressModal] = useState(false);

  // agree
  const [allCheckFlag, setAllCheckFlag] = useState(false);
  const [allBenefitCheckFlag, setAllBenefitCheckFlag] = useState(false);

  // NOTE: birth - MM / DD
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    passwordChk: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    detailedAddress: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    agreeYn: "n",
    consentReqYn: "n",
    consentOptYn: "n",
    smsYn: "n",
    mailYn: "n",
    fourteenYn: "n",
  });

  const {
    id,
    password,
    passwordChk,
    username,
    email,
    phone,
    address,
    detailedAddress,
    birthYear,
    birthMonth,
    birthDay,
    agreeYn,
    consentReqYn,
    consentOptYn,
    smsYn,
    mailYn,
    fourteenYn,
  } = inputs;

  const checkId = () => {
    //
  };

  const checkPassword = () => {
    //
  };

  const checkPasswordChk = () => {
    //
  };

  const checkBirthday = () => {
    //
  };

  const hasAddress = () => {
    //
  };

  const onInputChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const showGuideText = () => {};

  const checkValidate = ({ value, name }) => {
    let result = false;
    switch (name) {
      case "id":
        result = checkId(value);
        break;
      case "password":
        result = checkPassword(value);
        break;
      case "passwordChk":
        result = checkPasswordChk(value);
        break;
      case "birthday":
        result = checkBirthday(value);
        break;
      default:
        break;
    }

    return result;
  };

  const onBlur = (e) => {
    const { value, name } = e.target;

    if (!checkValidate(value, name)) {
      showGuideText();
      return;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const openAddressModal = () => {
    setAddressFlag(false);
    setAddressModal(true);
  };

  const closeAddressModal = () => {
    setAddressModal(false);
  };

  const registerAddress = (data) => {
    let _fullAddress = data.address;
    let _extraAddress = "";

    if (_fullAddress === null) {
      return;
    }

    if (data.addressType === "R") {
      if (data.bname !== "") {
        _extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        _extraAddress +=
          _extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      _fullAddress += _extraAddress !== "" ? ` (${_extraAddress})` : "";
    }

    setInputs({
      address: _fullAddress,
      detailedAddress: "",
    });

    setAddressFlag(true);

    closeAddressModal();
  };

  const allAgreeCheck = () => {
    const _allCheckFlag = !allCheckFlag;
    setAllCheckFlag(_allCheckFlag);
    setAllBenefitCheckFlag(_allCheckFlag);
    setInputs({
      smsYn: _allCheckFlag ? "y" : "n",
      mailYn: _allCheckFlag ? "y" : "n",
      agreeYn: _allCheckFlag ? "y" : "n",
      consentReqYn: _allCheckFlag ? "y" : "n",
      consentOptYn: _allCheckFlag ? "y" : "n",
      smsYn: _allCheckFlag ? "y" : "n",
      mailYn: _allCheckFlag ? "y" : "n",
      fourteenYn: _allCheckFlag ? "y" : "n",
    });
  };

  const allBenefitCheck = () => {
    const _allBenefitCheckFlag = !allBenefitCheckFlag;
    setAllBenefitCheckFlag(_allBenefitCheckFlag);
    setInputs({
      ...inputs,
      smsYn: _allBenefitCheckFlag ? "y" : "n",
      mailYn: _allBenefitCheckFlag ? "y" : "n",
    });
  };

  const agreeCheck = (e) => {
    const _agree = e.target;
    const { value, name } = _agree.parentElement.querySelector("input");
    const _value = value === "y" ? "n" : "y";
    setInputs({
      ...inputs,
      [name]: _value,
    });

    if (_value === "n") {
      setAllCheckFlag(false);
      if (name === "smsYn" || name === "mailYn") {
        setAllBenefitCheckFlag(false);
      }
    }
  };

  return (
    <MemberJoinForm>
      <form>
        <header>
          <h3>회원가입</h3>
          <p>
            <Ico type="star">*</Ico>
            필수입력사항
          </p>
        </header>
        <InputTable>
          <tbody>
            <tr>
              <th>
                아이디
                <Ico type="star">*</Ico>
              </th>
              <td>
                <RegisterFormInputText
                  type="text"
                  label="아이디"
                  name="id"
                  placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                  onChange={onInputChange}
                  onBlur={onBlur}
                />
                <FeedbackButton color="white">중복확인</FeedbackButton>
                {idValidate ? null : (
                  <GuideText>
                    <span className="bad">
                      6자 이상의 영문 혹은 영문과 숫자를 조합
                    </span>
                    <span className="info">아이디 중복확인</span>
                  </GuideText>
                )}
              </td>
            </tr>
            <tr>
              <th>
                비밀번호
                <Ico type="star">*</Ico>
              </th>
              <td>
                <RegisterFormInputText
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={onInputChange}
                  onBlur={onBlur}
                />
                {passwordValidate ? null : (
                  <GuideText>
                    <span className="info">10자 이상 입력</span>
                    <span className="info">
                      영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
                    </span>
                    <span className="info">
                      동일한 숫자3개 이상 연속 사용 불가
                    </span>
                  </GuideText>
                )}
              </td>
            </tr>
            <tr>
              <th>
                비밀번호확인
                <Ico type="star">*</Ico>
              </th>
              <td>
                <RegisterFormInputText
                  type="password"
                  name="passwordChk"
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  onChange={onInputChange}
                  onBlur={onBlur}
                />
                {passwordChkValidate ? null : (
                  <GuideText>
                    <span className="info">
                      동일한 비밀번호를 입력해주세요.
                    </span>
                  </GuideText>
                )}
              </td>
            </tr>
            <tr>
              <th>
                이름
                <Ico type="star">*</Ico>
              </th>
              <td>
                <RegisterFormInputText
                  type="text"
                  name="username"
                  placeholder="이름을 입력해주세요"
                  value={username}
                  onChange={onInputChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                이메일
                <Ico type="star">*</Ico>
              </th>
              <td>
                <RegisterFormInputText
                  type="text"
                  name="email"
                  placeholder="예: supermarket@kurly.com"
                  onChange={onInputChange}
                />
                <FeedbackButton color="white">중복확인</FeedbackButton>
              </td>
            </tr>
            <tr>
              <th>
                휴대폰
                <Ico type="star">*</Ico>
              </th>
              <td>
                <RegisterFormInputText
                  type="text"
                  name="phone"
                  placeholder="숫자만 입력해주세요"
                  onChange={onInputChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                주소
                <Ico type="star">*</Ico>
              </th>
              <td>
                {!addressFlag ? (
                  <>
                    <SearchAddressButton
                      color="white"
                      onClick={openAddressModal}
                    >
                      주소찾기
                    </SearchAddressButton>
                    <Modal open={isAddressModal} close={closeAddressModal}>
                      <PostCode
                        onComplete={registerAddress}
                        width={430}
                        height={650}
                      />
                    </Modal>
                  </>
                ) : (
                  <AddressView>
                    <RegisterFormInputText
                      type="text"
                      name="address"
                      placeholder="주소를 입력해주세요"
                      value={address}
                      onChange={onInputChange}
                    />
                    <ReSearchAddressButton
                      color="white"
                      onClick={openAddressModal}
                    >
                      재검색
                    </ReSearchAddressButton>
                    <Modal open={isAddressModal} close={closeAddressModal}>
                      <PostCode
                        onComplete={registerAddress}
                        width={430}
                        height={650}
                      />
                    </Modal>
                    <RegisterFormInputText
                      type="text"
                      name="detailedAddress"
                      placeholder="나머지 주소를 입력해주세요"
                      value={detailedAddress}
                      onChange={onInputChange}
                    />
                    <GuideText>
                      <span className="info">
                        배송지에 따라 상품 정보가 달라질 수 있습니다.
                      </span>
                    </GuideText>
                  </AddressView>
                )}
              </td>
            </tr>
            <tr>
              <th>성별</th>
              <td>
                <SexSelect>
                  <FormRadioButton name="sex" text="남자" />
                  <FormRadioButton name="sex" text="여자" />
                  <FormRadioButton name="sex" text="선택안함" />
                </SexSelect>
              </td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td>
                <BirthdayText>
                  <input
                    id="birth_year"
                    type="text"
                    name="birthYear"
                    pattern="[0-9]*"
                    value={birthYear}
                    label="생년월일"
                    size="4"
                    maxLength="4"
                    placeholder="YYYY"
                    onChange={onInputChange}
                  />
                  <span className="bar"></span>
                  <input
                    id="birth_month"
                    className="birth__input"
                    type="text"
                    name="birthMonth"
                    pattern="[0-9]*"
                    value={birthMonth}
                    label="생년월일"
                    size="2"
                    maxLength="2"
                    placeholder="MM"
                    onChange={onInputChange}
                  />
                  <span className="bar"></span>
                  <input
                    className="birth__input"
                    type="text"
                    name="birthDay"
                    pattern="[0-9]*"
                    value={birthDay}
                    label="생년월일"
                    size="2"
                    maxLength="2"
                    placeholder="DD"
                    onChange={onInputChange}
                  />
                </BirthdayText>
              </td>
            </tr>
            <tr className="reg-agree">
              <th>
                이용약관 동의
                <Ico type="star">*</Ico>
              </th>
              <td>
                <AllCheckView>
                  <label>
                    <input type="checkbox" />
                    <Ico
                      type="check"
                      check={allCheckFlag}
                      onClick={allAgreeCheck}
                    ></Ico>
                    전체 동의합니다.
                  </label>
                  <p>
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인
                    서비스를 이용할 수 있습니다.
                  </p>
                </AllCheckView>
                <CheckView>
                  <label>
                    <input
                      type="checkbox"
                      name="agreeYn"
                      value={agreeYn}
                    ></input>
                    <Ico
                      type="check"
                      check={agreeYn}
                      onClick={agreeCheck}
                    ></Ico>
                    이용약관 동의
                    <span className="sub">(필수)</span>
                  </label>
                  <Link to="#none" className="btn__link">
                    약관보기
                  </Link>
                </CheckView>
                <CheckView>
                  <label>
                    <input
                      type="checkbox"
                      name="consentReqYn"
                      value={consentReqYn}
                    ></input>
                    <Ico
                      type="check"
                      check={consentReqYn}
                      onClick={agreeCheck}
                    ></Ico>
                    개인정보 수집·이용 동의
                    <span className="sub">(필수)</span>
                  </label>
                  <Link to="#none" className="btn__link">
                    약관보기
                  </Link>
                </CheckView>
                <CheckView>
                  <label>
                    <input
                      type="checkbox"
                      name="consentOptYn"
                      value={consentOptYn}
                    ></input>
                    <Ico
                      type="check"
                      check={consentOptYn}
                      onClick={agreeCheck}
                    ></Ico>
                    개인정보 수집·이용 동의
                    <span className="sub">(선택)</span>
                  </label>
                  <Link to="#none" className="btn__link">
                    약관보기
                  </Link>
                </CheckView>
                <CheckView>
                  <label>
                    <input type="checkbox" name="consentOptYn" />
                    <Ico
                      type="check"
                      check={allBenefitCheckFlag}
                      onClick={allBenefitCheck}
                    ></Ico>
                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의
                    <span className="sub">(선택)</span>
                  </label>
                  <CheckEvent>
                    <label className="check-agree">
                      <input type="checkbox" name="smsYn" value={smsYn} />
                      <Ico
                        type="check"
                        check={smsYn}
                        onClick={agreeCheck}
                      ></Ico>
                      SMS
                    </label>
                    <label className="check-agree">
                      <input type="checkbox" name="mailYn" value={mailYn} />
                      <Ico
                        type="check"
                        check={mailYn}
                        onClick={agreeCheck}
                      ></Ico>
                      이메일
                    </label>
                  </CheckEvent>
                  <p className="sms-info">
                    동의 시 한 달간 [5% 적립] + [무제한 무료배송]
                    <span>(첫 주문 후 적용)</span>
                  </p>
                </CheckView>
                <CheckView>
                  <label>
                    <input
                      type="checkbox"
                      name="fourteenYn"
                      value={fourteenYn}
                    ></input>
                    <Ico
                      type="check"
                      check={fourteenYn}
                      onClick={agreeCheck}
                    ></Ico>
                    본인은 만 14세 이상입니다.
                    <span className="sub">(필수)</span>
                  </label>
                </CheckView>
              </td>
            </tr>
          </tbody>
        </InputTable>
      </form>
      <footer>
        <SubmitButton color="purple">가입하기</SubmitButton>
      </footer>
    </MemberJoinForm>
  );
};

const MemberJoinForm = styled.section`
  width: 640px;
  margin: 0 auto;
  font-weight: 400;

  header {
    border-bottom: 2px solid ${color.T_BORDER_BOTTOM};

    p {
      text-align: right;
    }
  }

  h3 {
    padding-top: 64px;
    font-weight: 900;
    font-size: 30px;
    color: ${color.T_TEXT_HEADER};
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.5px;
  }

  p {
    padding: 5px 0 10px;
    font-size: 12px;
    color: ${color.SLT_DARK_GRAY};
    line-height: 17px;
  }

  label {
    font-size: 14px;
    line-height: 22px;
  }

  footer {
    padding-top: 40px;
    text-align: center;
  }

  .sub {
    color: ${color.DARK_GRAY};
  }
`;

const InputTable = styled.table`
  width: 100%;

  th {
    padding-top: 29px;
    width: 159px;
    padding: 20px 0 0 20px;
    font-weight: 500;
    font-size: 14px;
    color: ${color.BLACK};
    line-height: 20px;
    vertical-align: top;
    text-align: left;
  }

  td {
    padding: 10px 0;
    border-top: 0;
    font-size: 14px;
    vertical-align: top;
    text-align: left;

    &:first-child {
      padding-top: 19px;
    }

    input[type="checkbox"] {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
  }

  .reg-agree th,
  .reg-agree td {
    border-top: 1px solid ${color.T_BORDER_TOP};
    border-bottom: 1px solid ${color.T_BORDER_BOTTOM};
  }

  .reg-agree td {
    padding-bottom: 19px;
  }
`;

const GuideText = styled.p`
  .bad {
    color: ${color.T_ALERT_TEXT};
    display: block;

    &::before {
      content: "\\2715";
      display: inline-block;
      padding-right: 3px;
      font-size: 12px;
      vertical-align: 0;
    }
  }

  .info {
    display: block;
    &::before {
      content: "\\2022";
      display: inline-block;
      padding: 0 4px 0 2px;
      font-size: 12px;
      vertical-align: 0;
    }
  }
`;

const AllCheckView = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  margin-top: 20px;

  label {
    padding: 12px 0 4px;
    font-weight: 700;
    font-size: 18px;
  }

  p {
    padding-left: 36px;
    font-size: 12px;
    color: ${color.T_TEXT_GRAY};
    line-height: 17px;
  }
`;

const CheckView = styled.div`
  position: relative;
  padding: 8px 0;

  .btn__link {
    position: absolute;
    right: 22px;
    top: 0;
    padding-top: 10px;
    font-size: 14px;
    color: ${color.PURPLE};
    line-height: 18px;
    letter-spacing: 0;

    &::after {
      content: "";
      display: inline-block;
      margin-top: 4px;
      width: 6px;
      height: 9px;
      background: url("https://res.kurly.com/pc/service/common/2006/ico_arrow_6x9.svg")
        no-repeat 50% 0;
      background-size: 6px 9px;
      vertical-align: top;
      padding: 0 3px;
    }
  }

  .sms-info {
    margin-left: 60px;
    padding: 0 0 6px 16px;
    background: url("https://res.kurly.com/pc/service/common/2006/ico_sub_dot.svg")
      no-repeat 0 0;
    background-size: auto;
    background-size: 16px 20px;
    font-size: 12px;
    color: ${color.PURPLE};
    line-height: 18px;
    letter-spacing: -0.5px;
    display: flex;

    span {
      color: ${color.T_TEXT_GRAY};
    }
  }
`;

const CheckEvent = styled.div`
  overflow: hidden;
  padding: 3px 0 2px 20px;

  .check-agree {
    float: left;
    padding: 8px 80px 8px 0;
  }
`;

const SexSelect = styled.div`
  label {
    display: inline-block;
    padding: 10px 52px 10px 0;
    vertical-align: top;
  }
`;

const BirthdayText = styled.div`
  overflow: hidden;
  width: 332px;
  padding-left: 18px;
  border: 1px solid ${color.GRAY};
  border-radius: 3px;
  margin-bottom: 20px;

  .bar {
    float: left;
    padding: 0;
  }

  .bar::after {
    content: "/";
    float: left;
    width: 22px;
    height: 100%;
    font-size: 14px;
    color: ${color.T_TEXT_GRAY};
    line-height: 42px;
    text-align: center;
    box-sizing: border-box;
  }

  input[type="text"] {
    float: left;
    width: 84px;
    height: 40px;
    border: 0;
    text-align: center;
    outline: none;

    &::placeholder {
      color: ${color.T_PLACE_HOLDER};
    }
  }
`;

const icoStyles = css`
  ${(props) =>
    props.type === "star" &&
    css`
      padding-right: 2px;
      color: ${color.T_ICO_STAR};
      padding: 23px 0 10px;
      font-size: 12px;
      line-height: 17px;
      text-align: right;
    `}

  ${(props) =>
    props.type === "check" &&
    css`
      vertical-align: -6px;
      display: inline-block;
      position: relative;
      width: 24px;
      height: 24px;
      margin-right: 12px;
      border: 0;
      background: url("https://res.kurly.com/pc/service/common/2006/ico_checkbox.svg")
        no-repeat 50% 50%;
      background-size: auto;
      background-size: 24px 24px;
    `}

  ${(props) =>
    (props.check === true || props.check === "y") &&
    css`
      background: url("https://res.kurly.com/pc/service/common/2006/ico_checkbox_checked.svg")
        no-repeat 50% 50%;
      background-size: 24px 24px;
    `}
`;

const Ico = styled.span`
  ${icoStyles}
`;

const RegisterFormInputText = styled(FormInputText)`
  height: 44px;
  width: 332px;
  padding: 0 14px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 3px;
  outline: none;
  vertical-align: top;

  & + & {
    margin-top: 10px;
  }
`;

const RegisterFormButton = styled(FormButton)`
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
`;

const FeedbackButton = styled(RegisterFormButton)`
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
  width: 120px;
  height: 44px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 14px;
  line-height: 40px;
`;

const SearchAddressButton = styled(RegisterFormButton)`
  display: block;
  overflow: hidden;
  width: 332px;
  height: 44px;
  border-radius: 3px;
  margin-left: 0;

  span {
    display: inline-block;
    height: 100%;
    margin-left: -14px;
    padding-top: 0px;
    padding-left: 24px;
    font-weight: 700;
    font-size: 14px;
    color: ${color.PURPLE};
    line-height: 40px;
    background: url("https://res.kurly.com/pc/service/common/2006/ico_search.svg")
      no-repeat 0 50%;
    background-size: auto;
    background-size: 25px 24px;
    vertical-align: top;
  }
`;

const PostCode = styled(DaumPostCode)``;

const ReSearchAddressButton = styled(SearchAddressButton)`
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
  width: 120px;
  height: 44px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 14px;
  line-height: 40px;
`;

const AddressView = styled.div`
  margin: 0;
  input[type="text"]:first-child {
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled(RegisterFormButton)`
  width: 240px;
  height: 56px;
  font-size: 16px;
  line-height: 54px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export default RegisterForm;
