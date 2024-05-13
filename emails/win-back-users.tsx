import {
  Section,
  Text,
  Heading,
  Img,
  Row,
  Column,
  Link,
} from "@react-email/components";
import * as React from "react";
import { gv } from "../utils/getValue";
import DefaultPage from "../components/DefaultPage";

export default () => (
  <DefaultPage domain="ihomepage.me" templateName="win-back-users">
    <Heading as="h2">
      Returning to iHomepage and discover new experience!
    </Heading>

    <Link href="https://ihomepage.me?utm_source=win-back-users">
      <Row>
        <Column>
          <Img
            src="https://ihomepage.me/images/home-page/pc.png"
            width="100%"
            alt="iHomepage"
          />
        </Column>

        <Column>
          <Img
            src="https://ihomepage.me/images/home-page/mobile.png"
            width="100%"
            alt="iHomepage"
          />
        </Column>
      </Row>
    </Link>

    <Text>👋 Hi {gv("nickname")}</Text>
    <Text>
      Thank you for using iHomepage. However, we noticed that you haven't used
      it for some time. Can you tell us why? We would like to improve the
      experience and provide you with better service.
    </Text>
    <Text>
      If you can give iHomepage another try, after exploring new updates and
      features, you will have a completely new experience.
    </Text>
    <Text>We look forward to having you back!</Text>

    <Section style={codeContainer}>
      <Link style={code} href="https://ihomepage.me?utm_source=win-back-users">
        🚀 Get iHomepage for free.
      </Link>
    </Section>
  </DefaultPage>
);

const codeContainer = {
  textAlign: "center" as const,
  padding: "20px 0 20px 0",
};

const code = {
  padding: "14px 20px 14px 20px",
  borderRadius: "40px",
  background:'#000',
  color: "#fff",
  // border: "2px solid blue",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "20px",
  fontWeight: 700,
  margin: "0 auto 0px auto",
};
