import React from 'react';
import styled from "styled-components";

const RegisterForm = () => {
    return (
        <MemberJoinForm>
            <form>
                <header>
                    <h3>회원가입</h3>
                    <p>
                        <span className="ico">*</span>
                        필수입력사항
                    </p>
                </header>
                <InputTable>
                    <tbody>
                        <tr>
                            <th>
                                아이디
                                <span className="ico">*</span>
                            </th>
                            <td>
                                <input
                                type="text"
                                label="아이디"
                                placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
                                />
                                <FeedbackButton>
                                    중복확인
                                </FeedbackButton>
                                {/* <GuideText>
                                    <span>6자 이상의 영문 혹은 영문과 숫자를 조합</span>
                                    <span>아이디 중복확인</span>
                                </GuideText> */}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                비밀번호
                                <span className="ico">*</span>
                            </th>
                            <td>
                                <input
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                비밀번호확인
                                <span className="ico">*</span>
                            </th>
                            <td>
                                <input
                                type="password"
                                placeholder="비밀번호를 한번 더 입력해주세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                이름
                                <span className="ico">*</span>
                            </th>
                            <td>
                                <input
                                type="text"
                                placeholder="이름을 입력해주세요"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                이메일
                                <span className="ico">*</span>
                            </th>
                            <td>
                                <input
                                type="text"
                                placeholder=""
                                />
                                <FeedbackButton>
                                    중복확인
                                </FeedbackButton>                                
                            </td>
                        </tr>
                        <tr>
                            <th>
                                휴대폰
                                <span className="ico">*</span>
                            </th>
                            <td>
                                <input
                                type="text"
                                placeholder=""
                                />
                                {/* <FeedbackButton>
                                    인증번호 받기
                                </FeedbackButton>                                 */}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                주소
                                <span className="ico">*</span>
                            </th>
                            <td>
                                <SearchAddressButton>
                                    <span>
                                        주소 검색
                                    </span>
                                </SearchAddressButton>
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                                <SexSelect>
                                <label>
                                    <input type="radio" name="sex" />
                                    <span className="ico"></span>
                                    남자
                                </label>
                                <label>
                                    <input type="radio" name="sex" />
                                    <span className="ico"></span>
                                    여자
                                </label>
                                <label>
                                    <input type="radio" name="sex" />
                                    <span className="ico"></span>
                                    선택안함
                                </label>
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
                                    name="birth_year"
                                    pattern="[0-9]*"
                                    value=""
                                    label="생년월일"
                                    size="4"
                                    maxLength="4"
                                    placeholder="YYYY"
                                    />
                                    <span className="bar"></span>
                                    <input
                                    id="birth_month"
                                    className="birth__input"
                                    type="text"
                                    name="birth[]"
                                    pattern="[0-9]*"
                                    value=""
                                    label="생년월일"
                                    size="2"
                                    maxLength="2"
                                    placeholder="MM"
                                    />
                                    <span className="bar"></span>
                                    <input
                                    className="birth__input"
                                    type="text"
                                    name="birth[]"
                                    pattern="[0-9]*"
                                    value=""
                                    label="생년월일"
                                    size="2"
                                    maxLength="2"
                                    placeholder="DD"
                                    />
                                </BirthdayText>
                            </td>
                        </tr>
                        <tr className="reg-agree">
                            <th>이용약관 동의
                                <span>
                                    *
                                </span>
                            </th>
                            <td>
                                <AllCheckView>
                                <label className="all-check">
                                    <input type="checkbox" />
                                    <span className="ico"></span>
                                    전체 동의합니다.
                                </label>
                                <p>
                                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
                                </p>
                                </AllCheckView>
                                <CheckView>
                                    <label>
                                        <input type="checkbox"></input>
                                        <span className="ico"></span>
                                        이용약관 동의
                                        <span class="sub">(필수)</span>
                                    </label>
                                    <a href="#none"
                                    className="btn__link">
                                        약관보기
                                    </a>
                                </CheckView> 
                                <CheckView>
                                    <label>
                                        <input type="checkbox"></input>
                                        <span className="ico"></span>
                                        개인정보 수집·이용 동의
                                        <span class="sub">(필수)</span>
                                    </label>
                                    <a href="#none"
                                    className="btn__link">
                                        약관보기
                                    </a>
                                </CheckView> 
                                <CheckView>
                                    <label>
                                        <input type="checkbox"></input>
                                        <span className="ico"></span>
                                        개인정보 수집·이용 동의
                                        <span class="sub">(선택)</span>
                                    </label>
                                    <a href="#none"
                                    className="btn__link">
                                        약관보기
                                    </a>
                                </CheckView> 
                                <CheckView>
                                    <label>
                                        <input type="checkbox"></input>
                                        <span className="ico"></span>
                                        무료배송, 할인쿠폰 등 혜택/정보 수신 동의 
                                        <span class="sub">(선택)</span>
                                    </label>
                                    <CheckEvent>
                                        <label class="check-agree">
                                            <input type="checkbox"></input>
                                            <span className="ico"></span>
                                            SMS
                                        </label>
                                        <label class="check-agree">
                                            <input type="checkbox"></input>
                                            <span className="ico"></span>
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
                                        <input type="checkbox"></input>
                                        <span className="ico"></span>
                                        본인은 만 14세 이상입니다.
                                        <span class="sub">(필수)</span>
                                    </label>
                                </CheckView>                                    
                            </td>
                        </tr>
                    </tbody>
                </InputTable>
            </form>
            <footer>
                <button className="submit-join">가입하기</button>
            </footer>
        </MemberJoinForm>
    );
};

const MemberJoinForm = styled.section`
    width: 640px;
    margin: 0 auto;
    font-weight: 400;
    
    header {
        border-bottom: 2px solid #333;
    }

    h3 {
        padding-top: 64px;
        font-weight: 900;
        font-size: 30px;
        color: #333;
        line-height: 40px;
        text-align: center;
        letter-spacing: -.5px;
    }

    p {
        padding: 5px 0 10px;
        font-size: 12px;
        color: #666;
        line-height: 17px;
        text-align: right;
    }

    .ico {
        padding-right: 2px;
        color: #ee6a7b;
        padding: 23px 0 10px;
        font-size: 12px;
        line-height: 17px;
        text-align: right;
    }

    .sub {
        color: #999;
    }

    label {
        font-size: 14px;
        line-height: 22px;
    }

    input[type="radio"] { 
        position: absolute;
        z-index: -1;
        opacity: 0;

        &+ .ico {
            display: inline-block;
            position: relative;
            width: 24px;
            height: 24px;
            margin-right: 12px;
            border: 1px solid #ddd;
            background-color: #fff;
            border-radius: 100%;
            vertical-align: -7px;
            padding: 0;
            margin-right: 12px;
        }

        &:checked+ .ico {
            border: 1px solid #5f0081;
            background-color: #5f0080;            
        }

        &:checked+ .ico::after {
            content: "";
            position: absolute;
            left: 50%;
            top: 50%;
            width: 10px;
            height: 10px;
            margin: -5px 0 0 -5px;
            border-radius: 100%;
            background-color: #fff;
        }
    }

    footer {
        padding-top: 40px;
        text-align: center;

        .submit-join {
            width: 240px;
            height: 56px;
            font-size: 16px;
            line-height: 54px;
            border: 1px solid #5f0081;
            background-color: #5f0080;
            color: #fff;
        }
    }
`;

const InputTable = styled.div`
    width: 100%;

    th {
        padding-top: 29px;
        width: 159px;
        padding: 20px 0 0 20px;
        font-weight: 700;
        font-size: 14px;
        color: #333;
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
    }

    .reg-agree th, 
    .reg-agree td{
        border-top: 1px solid #333;
        border-bottom: 1px solid #f4f4f4;
    }

    .reg-agree td {
        padding-bottom: 19px;
    }

    input[type="text"] {
        height: 44px;
        padding: 0 14px;
        font-size: 14px;
        color: #333;
        line-height: 20px;
        border-radius: 3px;
        background: #fff;
        outline: none;
        vertical-align: top;
        width: 332px;
        border: 1px solid #ccc;
        
        &:focus {
            border: 1px solid #333;
        }
    }

    input[type="password"] {
        height: 44px;
        padding: 0 14px;
        font-size: 14px;
        color: #333;
        line-height: 20px;
        border-radius: 3px;
        background: #fff;
        outline: none;
        vertical-align: top;
        width: 332px;
        border: 1px solid #ccc;
        
        &:focus {
            border: 1px solid #333;
        }
    }    
`;

const FeedbackButton = styled.a`
    display: inline-block;
    width: 120px;
    margin-left: 5px;
    vertical-align: top;
    border: 1px solid #5f0080;
    background-color: #fff;
    color: #5f0080;
    height: 44px;
    border-radius: 3px;
    font-weight700;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    outline: none;
`;

const GuideText = styled.p`
    display: block;
    font-size: 12px;
    color: #666;
    line-height: 18px;
    word-break: break-all;
    letter-spacing: -.1px;    
    text-align: left;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

const SearchAddressButton = styled.a`
    display: block;
    overflow: hidden;
    width: 332px;
    height: 44px;
    border: 1px solid #5f0080;
    border-radius: 3px;
    text-align: center;
    padding: 0 10px;

    span {
        display: inline-block;
        height: 100%;
        margin-left: -14px;
        padding-top: 0px;
        padding-left: 24px;
        font-weight: 700;
        font-size: 14px;
        color: #5f0080;
        line-height: 40px;
        background: url("https://res.kurly.com/pc/service/common/2006/ico_search.svg") no-repeat 0 50%;
        background-size: auto;
        background-size: 25px 24px;
        vertical-align: top;
    }
`;


const AllCheckView = styled.div`
    display: block;
    overflow: hidden;
    width: 100%;
    padding: 0 0 10px;

    p {
        padding-left: 36px;
        font-size: 12px;
        color: #666;
        line-height: 17px;
    }

    label > input[type="checkbox"] {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    label > .ico  {
        vertical-align: -6px;
        display: inline-block;
        position: relative;
        width: 24px;
        height: 24px;
        margin-right: 12px;
        border: 0;
        background: url("https://res.kurly.com/pc/service/common/2006/ico_checkbox.svg") no-repeat 50% 50%;
        background-size: auto;
        background-size: 24px 24px;
    }

    .all-check {
        padding: 12px 0 4px;
        font-weight: 700;
        font-size: 18px;
    }
`;
const CheckView = styled.div`
    position: relative;

    label > input[type="checkbox"] {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    label > .ico  {
        vertical-align: -6px;
        display: inline-block;
        position: relative;
        width: 24px;
        height: 24px;
        margin-right: 12px;
        border: 0;
        background: url("https://res.kurly.com/pc/service/common/2006/ico_checkbox.svg") no-repeat 50% 50%;
        background-size: auto;
        background-size: 24px 24px;
    }

    .btn__link {
        position: absolute;
        right: 22px;
        top: 0;
        padding-top: 10px;
        font-size: 14px;
        color: #5f0080;
        line-height: 18px;
        letter-spacing: 0;        
    }

    .sms-info {
        margin-left: 60px;
        padding: 0 0 6px 16px;
        background: url("https://res.kurly.com/pc/service/common/2006/ico_sub_dot.svg") no-repeat 0 0;
        background-size: auto;
        background-size: 16px 20px;
        font-size: 12px;
        color: #5f0080;
        line-height: 18px;
        letter-spacing: -.5px;
        display: flex;
    }
`;

const CheckEvent = styled.div`
    overflow: hidden;
    padding: 3px 0 2px 10px;

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

const RecommendSelect = styled.div`
    label {
        display: inline-block;
        font-size: 14px;
        line-height: 22px;  
        padding: 10px 65px 10px 0;
        vertical-align: top;
    }

    a {
        position: absolute;
        right: 22px;
        top: 0;
        padding-top: 10px;
        font-size: 14px;
        color: #5f0080;
        line-height: 18px;
        letter-spacing: 0;        
    }
`;


const BirthdayText = styled.div`
    overflow: hidden;
    width: 332px;
    padding-left: 18px;
    border: 1px solid #ccc;
    border-radius: 3px;

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
        color: #ccc;
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
    }
`;

export default RegisterForm;

