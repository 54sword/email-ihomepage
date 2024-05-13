import { Body, Container, Head, Hr, Html, Preview } from "@react-email/components"
import React from "react";
import { container, containerWrap, hr, main } from "../styles";
import Header from "./Header";

export default ({children, preview, templateName, domain}: {
  children?: React.ReactNode
  preview?: string,
  templateName: string
  domain: string
}) => {
  return (
    <Html>
      <Head />
      {preview ? (
        <Preview>{preview}</Preview>
      ): null}
      <Body style={main}>
        <div style={containerWrap}>
          <Container style={container}>
            <Header domain={domain} templateName={templateName} />
            <Hr style={hr} />
            {children}
          </Container>
        </div>
      </Body>
    </Html>
  )
}