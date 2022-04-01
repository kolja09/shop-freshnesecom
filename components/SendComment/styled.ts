import styled from "styled-components";

export const FormContainer = styled.form`
  padding: 48px 245px 48px 446px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 22px;
  line-height: 33px;
  font-weight: 600;
  color: #4a4a4a;
`;

export const SubTitle = styled.p`
  margin-bottom: 16px;
  font-size: 17px;
  line-height: 23px;
  color: #4a4a4a;
`;

export const CredentialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  margin-left: 6px;
  font-size: 16px;
  line-height: 20px;
  color: #4a4a4a;
`;

export const Input = styled.input`
  width: 275px;
  padding: 12px 16px;
  background-color: #F9F9F9;
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  border: 1px solid #D1D1D1;
  border-radius: 6px;
  
  &::placeholder {
    font-size: 14px;
    line-height: 18px;
    color: #A9A9A9;
  }
`;

export const Textarea  = styled.textarea`
  height: 112px;
  padding: 8px 12px;
  background: #F9F9F9;
  font-size: 14px;
  line-height: 18px;
  color: #4a4a4a;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  
  &::placeholder {
    font-size: 14px;
    line-height: 18px;
    color: #A9A9A9;
  }
`;

export const SendCommentButton = styled.button`
  margin-top: 13px;
  background-color: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  padding: 13px 48px;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #FFFFFF;
  cursor: pointer;
  
  &:hover, &:active {
    background-color: #46760A;
    color: #a9a9a9;
  }
`;
