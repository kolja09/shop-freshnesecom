import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const InputRangeMin = styled.input`
  cursor: pointer;
  position: absolute;
  -webkit-appearance: none;
  outline: none!important;
  background: transparent;
  background-image: linear-gradient(to bottom, transparent 0%, transparent 30%, silver 30%, silver 60%, transparent 60%, transparent 100%);
  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #D1D1D1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    border-radius: 100%;
  }
  &::-webkit-slider-runnable-track{
    cursor: pointer;
  }
`;

export const InputRangeMax = styled.input`
  cursor: pointer;
  position: absolute;
  -webkit-appearance: none;
  outline: none!important;
  background: transparent;
  background-image: linear-gradient(to bottom, transparent 0%, transparent 30%, silver 30%, silver 60%, transparent 60%, transparent 100%);
  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #D1D1D1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 100%;
  }
  &::-webkit-slider-runnable-track{
    cursor: pointer;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameForm = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #151515;
`;

export const Input = styled.input`
  background: #F9F9F9;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  padding: 12px 16px 12px 21px;
  width: 109px;
  font-size: 14px;
  line-height: 19px;
  color: #A9A9A9;
`;