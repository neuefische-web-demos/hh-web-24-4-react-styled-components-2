import styled from "styled-components";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <div>
      <h1>Styled Components with Props</h1>
      <h2>Props using the ternary</h2>
      <FlexContainer>
        <Button>Button </Button>
        <Button $color="danger" $variant="outlined">
          Button Danger
        </Button>
      </FlexContainer>
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer>
        <Button $variant="text">Button - Text </Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
}

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
