import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import { email, imgUrl } from "../constants/link";

interface Props {
  applicant: string;
  part: string;
  place: string;
  time: string;
  sat?: string;
  sun?: string;
  mon?: string;
}

export default function Email({
  applicant,
  part,
  place,
  sat,
  sun,
  mon,
}: Props) {
  return (
    <Html lang="ko">
      <Head>
        <title>CodingBottle</title>
      </Head>
      <Preview>CodingBottle</Preview>
      <Body style={wrapper}>
        <Section>
          <Container style={header}>
            <Column>
              <Img
                src={`${imgUrl}/assets/63100352/1ece6b7e-1889-405c-a0a2-350ea3655123`}
                width="90"
                height="90"
                alt="coding bottle logo"
              />
            </Column>
            <Column style={logoWrapper}>
              <Heading as="h2" style={logoTitle}>
                코딩보틀
              </Heading>
              <Heading as="h3" style={logoSubTitle}>
                끊임없이 흘러가는 우리, Developer X Designer 코딩보틀
              </Heading>
            </Column>
          </Container>
          <Hr />
          <Container>
            <Text style={text}>
              {applicant}님, 안녕하세요. 코딩보틀의 {part}파트에 지원해주셔서
              진심으로 감사합니다.
            </Text>
            <Text style={text}>
              서류 합격을 진심으로 축하드리며, {part}파트 면접에 대해
              안내드립니다.
            </Text>
            <Text style={text}>면접은 {place}</Text>
            <Text style={text}>
              아래 시간대 중 가능하신 시간대를 <b>{email}</b>로 회신
              부탁드립니다.
            </Text>
            <Text style={text}>9월 2일 토요일 : {sat}</Text>
            <Text style={text}>9월 3일 일요일 : {sun}</Text>
            <Text style={text}>9월 4일 월요일 : {mon}</Text>
            <Text style={text}>
              면접이나 그 외 궁금하신 점이 있으시다면 편하게 연락주세요.
            </Text>
            <Text style={text}>감사합니다.</Text>
            <Text style={text}>코딩보틀 드림</Text>
          </Container>

          <Container>
            <Text style={footer}>
              <Link href="https://codingbottle.com/" target="_blank">
                codingbottle.com
              </Link>
            </Text>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}

const wrapper = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const header = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "15px 0px",
};

const logoWrapper = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "10px",
};

const logoTitle = {
  all: "unset",
  fontSize: "32px",
  fontWeight: "700",
};

const logoSubTitle = {
  fontSize: "16px",
  fontWeight: "300",
};

const text = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#1b1b1b",
  lineHeight: "26px",
};

const footer = {
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
