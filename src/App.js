/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Heading = styled("h1")`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fg};
`;

const Subheading = Heading.withComponent("h2");

const Quote = styled("blockquote")((props) => ({
  fontSize: props.size,
}));

const Cite = styled("cite")(
  {
    fontWeight: 100,
  },
  (props) => ({
    fontWeight: props.weight,
  })
);

function App() {
  return (
    <div>
      <Heading bg="#008f68" fg="#fae042">
        Heading with a green background and yellow text.
      </Heading>
      <Subheading fg="#6db65b">
        Subheading with light green text (foreground).
      </Subheading>
      <Quote size={28}>
        I built this with <code>`emotion/react`</code> and{" "}
        <code>`emotion/styled`</code>!
      </Quote>
      <Cite weight={700}>
        <a href="https://www.digitalocean.com/community/tutorials/react-react-emotion">
          Link to source code!
        </a>
      </Cite>
      <div
        css={css({
          margin: 10,
          padding: 10,
          backgroundColor: "#eee",
        })}
      >
        This is an example of <code>`css`</code> using an object.
      </div>
      <div
        css={css`
          margin: 10px;
          padding: 10px;
          background-color: #eee;
        `}
      >
        This is an example of <code>`css`</code> using a tagged template
        literal.
      </div>
    </div>
  );
}

export default App;
