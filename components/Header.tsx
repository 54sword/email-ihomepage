import {
  Img,
  Row,
  Column,
  Link
} from "@react-email/components";
import * as React from "react";

export default ({ domain, templateName }: { domain: string, templateName: string }) => {
  return (
    <Row>
      <Column width="45">
        <Img
          src={`https://${domain}/images/icons/ihomepage-128x128.png`}
          width="32"
          height="32"
          alt="iHomepage"
        />
      </Column>
      <Column>
        <Link style={name} href={`https://${domain}?utm_source=${templateName}`}>iHomepage</Link>
      </Column>
    </Row>
  );
};

const name = {
  margin: 0,
  fontSize:'16px',
  fontWeight:'450',
  color:'#000'
}