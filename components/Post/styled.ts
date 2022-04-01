import styled from "styled-components";

export const BigBlogCard = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

export const ImageInfoBlock = styled.div`
  border-radius: 12px;
  width: 100%;
`;

export const PostDate = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
`;

export const BlogDate = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const Author = styled.span<{
    $marginLeft: boolean;
    $color: boolean;
}>`
  font-size: 12px;
  line-height: 16px;
  margin-right: 16px;
  margin-left: ${({$marginLeft}) => $marginLeft ? "8px" : null};
  color: ${({$color}) => $color ? "#fff" : null};
`;

export const Date = styled.span<{
    $color: boolean;
}>`
  font-size: 12px;
  line-height: 16px;
  color: ${({$color}) => $color ? "#fff" : null}
`;

export const MiddleBlogCard = styled.div`
  cursor: pointer;
`;

export const TagContainer = styled.div`
  margin-left: -24px;
  position: relative;
`;

export const PostTitle = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #FFFFFF;
  position: absolute;
  top: 228px;
  left: 24px;
  width: 380px;
`;

export const MiddleBlogTitle = styled.h2`
  width: 267px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
  margin-top: 50px;
`;

export const PostBlock = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 21px;
  }
`;

export const InfoContainer = styled.div`
  width: 225px;
  margin-right: 45px;
`;

export const HeadlineTitle = styled.h3`
  margin-top: 5px;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #151515;
`;

export const ImageBlock = styled.div``;

export const OpenedBlog = styled.div`
  padding: 48px 45px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const InfoBlock = styled.div`
  display: flex;
  position: absolute;
  bottom: 32px;
  padding: 0 200px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  width: 500px;
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  color: #FFFFFF;
  margin-left: 40px;
`;

export const TextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 45px;
  margin-top: 15px;
`;

export const TitleText = styled.span`
  margin-right: 32px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #A9A9A9;
`;

export const Text = styled.span`
  text-decoration-line: underline;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
`;
