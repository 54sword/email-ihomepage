export const main = {
  backgroundColor: "#eff2f5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

export const containerWrap = {
  // 给body边距，在网易客户端边距好像不显示
  padding: "24px 0 32px",
}

export const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "32px",
  borderRadius: '18px',
};

export const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

export const largeMargin = {
  margin: "36px 0",
}

export const paragraph = {
  color: "#000",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

export const anchor = {
  color: "#1890ff",
  textDecoration: 'underline'
};

export const button = {
  display: "inline-block",
  textAlign: "center",
  textDecoration: "none",
  width: 'fit-content',
  padding: '12px 50px',
  borderRadius: "10px",
  fontFamily: ` "Helvetica Neue", Helvetica, Arial, sans-serif`,
  fontWeight: "bold",
  fontSize: "14px",
  backgroundColor: "#64E8DE",
  color: "#000",
};

export const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center",
  margin: "20px 0 0"
};

export const h1 = {
  textAlign: "center" as const,
}

export const infoBox = {
  fontSize: '14px',
  marginBottom: '10px'
}

export const tagGray = {
  backgroundColor: '#efefef',
  padding: '5px 10px',
  borderRadius: '5px',
  fontWeight: 'bold',
}

export const textBox = {
  wordWrap: 'break-word' as any,
  wordBreak: 'break-all' as any,
  whiteSpace: 'normal' as any,
  fontSize: "bold",
}