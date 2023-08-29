import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";
import { imgUrl } from "../src/constants/link";

interface Props {
  applicant: string;
  part: string;
  place: string;
  time: string;
  link: string;
}

export default function Email({ applicant, part, place, link }: Props) {
  return (
    <Html lang="ko">
      <Head>
        <title>CodingBottle</title>
      </Head>
      <Preview>CodingBottle</Preview>
      <Body style={wrapper}>
        <Section style={inWrapper}>
          <Container style={header}>
            <Row>
              <Column>
                <Img
                  src={`${imgUrl}/assets/63100352/1ece6b7e-1889-405c-a0a2-350ea3655123`}
                  width="98"
                  height="98"
                  alt="coding bottle logo"
                />
              </Column>
              <Column style={logoWrapper}>
                <Text style={logoTitle}>CodingBottle</Text>
                <Text style={logoSubTitle}>
                  끊임없이 흘러가는 우리, Developer X Designer 코딩보틀
                </Text>
              </Column>
            </Row>
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
              아래 링크에서 <b>가능하신 시간대</b>를 골라주시길 바랍니다.
            </Text>
            <Text style={timeText}>
              <Link href={link} target="_blank">
                codingBottle 면접
              </Link>
            </Text>
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
  backgroundColor: "#f6f8fa",
  width: "auto",
  height: "auto",
  padding: "70px 0",
};

const inWrapper = {
  width: "830px",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
  padding: "40px 0",
};

const header = {
  padding: "15px 0px",
};

const logoWrapper = {
  color: "#0a0a0a",
  marginLeft: "13px",
  height: "fit-content",
  width: "auto",
};

const logoTitle = {
  fontSize: "32px",
  fontWeight: "700",
  letterSpacing: "0.7px",
};

const logoSubTitle = {
  fontSize: "16.45px",
  fontWeight: "600",
  color: "#262626",
  letterSpacing: "-0.1px",
};

const text = {
  fontSize: "16px",
  fontWeight: "300",
  color: "#151515",
  lineHeight: "30px",
  margin: "25px 0",
};

const timeText = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#001741",
  lineHeight: "30px",
  margin: "35px 0",
};

const footer = {
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
