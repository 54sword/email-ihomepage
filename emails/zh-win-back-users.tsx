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
  <DefaultPage domain="ihomepage.cn" templateName="zh-win-back-users">
    <Heading as="h2">
      重返 iHomepage，发现新体验
    </Heading>


      <Row>
        <Column>
          <Link href="https://web.ihomepage.cn?utm_source=win-back-users">
            <Img
              src="https://ihomepage.cn/images/home-page/pc.png"
              width="100%"
              alt="iHomepage"
            />
          </Link>
        </Column>

        <Column>
          <Link href="https://ihomepage.cn/install-tutorial/ios/?utm_source=win-back-users">
            <Img
              src="https://ihomepage.cn/images/home-page/mobile.png"
              width="100%"
              alt="iHomepage"
            />
          </Link>
        </Column>
      </Row>

    <Text>👋 嗨，{gv("nickname")}</Text>
    <Text>
      我们非常感谢您曾经使用过 iHomepage。然而，我们注意到您最近的使用情况变得不活跃，我们想知道，是什么原因导致您停止使用我们的软件呢？我们希望能改善您的体验，并为您提供更好的服务。
    </Text>
    <Text>
      请考虑重新使用 iHomepage，探索最新的功能，我们相信，您会发现全新的体验和价值。
    </Text>
    <Text>期待与您再次见面!</Text>

    <Section style={codeContainer}>
      <Link style={code} href="https://ihomepage.cn?utm_source=win-back-users">
        🚀 免费获得 iHomepage
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
