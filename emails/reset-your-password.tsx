import { Section, Text, Heading } from "@react-email/components";
import * as React from "react";
import { gv } from "../utils/getValue";
import DefaultPage from "../components/DefaultPage";

export default () => (
  <DefaultPage templateName="reset-your-password">
    <Heading as="h2">Reset your password?</Heading>
    <Text>
      If you requested a password reset for iHomepage, use the captcha below to
      complete the process. If you didn't make this request, ignore this email.
    </Text>
    <Section style={codeContainer}>
      <Text style={code}>{gv("captcha")}</Text>
    </Section>
  </DefaultPage>
);

const codeContainer = {
  background: "#000",
  borderRadius: "12px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "280px",
};

const code = {
  color: "#13C6FF",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};
