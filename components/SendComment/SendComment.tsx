import React from 'react';

import {
  FormContainer,
  Title,
  SubTitle,
  CredentialsWrapper,
  InputContainer,
  Label,
  Input,
  Textarea,
  SendCommentButton
} from "./styled";

const SendComment = () => {
  return (
    <FormContainer>
      <Title>Leave a reply</Title>
      <SubTitle>Already have an account? Sign in to leave a reply.</SubTitle>
      <CredentialsWrapper>
        <InputContainer>
          <Label>Name</Label>
          <Input placeholder='Enter your name'/>
        </InputContainer>
        <InputContainer>
          <Label>Email address</Label>
          <Input placeholder='Enter your email address'/>
        </InputContainer>
      </CredentialsWrapper>
      <InputContainer>
        <Label>Comment</Label>
        <Textarea placeholder='Enter your comments'/>
      </InputContainer>
      <SendCommentButton disabled >Send a comment</SendCommentButton>
    </FormContainer>
  );
};

export default SendComment;
