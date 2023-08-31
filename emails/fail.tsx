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
              안녕하세요. {applicant}님, 코딩보틀의 {part}파트에 지원해주셔서
              진심으로 감사합니다.
            </Text>
            <Text style={text}>
              안타깝게도 이번 코딩보틀에서는 {applicant}님을 모시지 못하게
              되었습니다. 아쉬운 소식을 전해드려 진심으로 유감스러운 마음입니다.
            </Text>
            <Text style={text}>
              서류를 통해 보여주신 역량과 가치관, 그리고 포텐셜을 확인했고,
              뵙고싶은 마음도 있었지만, 저희 코딩보틀의 여건 부족으로 한정된
              인터뷰 리소스와 선발 인원 수 안에서 인터뷰를 진행하다 보니 위와
              같은 소식을 드리게 되었습니다.
            </Text>
            <Text style={text}>
              코딩보틀에 관심갖고 지원해주셔서 다시 한 번 감사드리며, 앞으로 더
              좋은 인연으로 만나뵐 수 있기를 바랍니다.
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

const footer = {
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
