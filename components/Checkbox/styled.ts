import styled from "styled-components";

export const InputCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

export const CheckboxBlock = styled.span`
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1.5px solid #46760A;
  cursor: pointer;
`;

export const CheckStyle = styled.div`
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #6A983C;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
