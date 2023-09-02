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
}

export default function Email({ applicant, part }: Props) {
  return (
    <Html lang="ko">
      <Head>
        <title>CodingBottle</title>
      </Head>
      <Preview>CodingBottle - 최종 합격</Preview>
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
              {applicant}님은 코딩보틀에 최종 합격하셨습니다 🎉 <br />
              합격을 진심으로 축하드리며, 앞으로의 일정에 대해 안내드립니다.
            </Text>
            <Text style={text}>
              알고 있고 참여하셔야 하는 아래의 내용들을 꼭 확인해 주세요.
            </Text>
            <Text style={text}>
              📍 코딩보틀 OT <br /> 코딩보틀 OT는 9월 6일 18시에 M205에서 진행될
              예정입니다. <br /> 발표 이후 1시간 내로 카카오톡 단톡방이 개설될
              예정이니 자세한 사항은 다시 공지하도록 하겠습니다.
              <br />
            </Text>

            <Text style={text}>
              📍 보증금
              <br /> 면접 때 말씀드린 대로 보증금 (10,000)과 함께 회비(20,000)를
              걷고 수료 시에 돌려드릴 예정입니다. <br /> 아래 계좌로 30,000원
              이체 부탁드립니다.
            </Text>
            <Text style={timeText}>3333 28 0250565 카카오뱅크</Text>
            <Text style={text}>
              📍 코딩보틀 Discord <br /> 코딩보틀에서는 Discord를 통해 소통할
              예정입니다. 아래 링크를 통해 참여해 주세요.
            </Text>
            <Text style={timeText}>
              <Link href={process.env.DISCORD_LINK} target="_blank">
                Discord 초청 URL
              </Link>
            </Text>

            <Text style={text}>
              <br />
              {applicant}님과 함께하는 코딩보틀을 매우 기대하며 다시 한 번
              합격을 축하드립니다 🙂
            </Text>
            <Text style={text}>
              그 외 궁금하신 점이 있으시다면 편하게 연락주세요.
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
  color: "#077DF7",
  lineHeight: "30px",
  margin: "35px 0 20px 0",
};

const footer = {
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
