import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <div>
      <FooterBox>
        <ContentContainer>
          <Logo>이상한 나라의 책 장수</Logo>
          <ul>
            <BoxInfo>주소 : 서울특별시 성동구 아차산로 17길 48</BoxInfo>
            <BoxInfo>
              대표자 책장수 | 직업정보제공사업 신고 번호: A10041004 | 사업자등록번호 123-12-123456 | 전화 080-1234-1234
              | 이메일 contact@bookCaps.io
            </BoxInfo>
            <Box>서비스 이용약관 개인정보처리방침 업데이트 소식 고객센터 책장수 채용</Box>
            <CopyrightBox>Copyright 2022-2023 BookCaps Inc. All Rights Reserved.</CopyrightBox>
          </ul>
        </ContentContainer>
      </FooterBox>
    </div>
  );
}

const FooterBox = styled.footer`
  height: 30%;
  padding: 3rem 0;

  background-color: #9e8cec;
  font-size: 1.2em;
`;

const ContentContainer = styled.div`
  width: 80%;
  margin: auto;
`;

const Logo = styled.h4`
  margin-bottom: 3rem;
  font-size: 1.9rem;
  font-weight: bold;
  opacity: 0.6;
`;

const BoxInfo = styled.p`
  opacity: 0.4;
`;

const Box = styled.p`
  margin: 2rem 0;

  font-size: 1rem;
  color: #616161;
`;

const CopyrightBox = styled.p`
  color: #616161;
`;
