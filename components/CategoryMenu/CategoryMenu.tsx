import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

import { RootState } from "../../store/store";
import { loadCategoryMenu } from "../../store/categoryMenu/action";

import { ICategoryMenuProps } from './types';
import {
  Container,
  Title,
  LinksContainer,
  Link,
} from './styled';

const CategoryMenu = ({ title }: ICategoryMenuProps) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const categoryMenu = useSelector((categoryMenu: RootState) => categoryMenu.categoryMenuReducer.categoryMenu);

  useEffect(() => {
    dispatch(loadCategoryMenu())
  }, []);

  const handleClick = (routePathname: string) => {
    router.push({pathname: `${routePathname}`})
  };

  return (
    <Container>
      <Title>{title}</Title>
      <LinksContainer>
        {categoryMenu.map((item: CategoryMenuProps, id: number) => (
          <Link key={id} onClick={() => handleClick(item.path)}>{item.name}</Link>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default CategoryMenu;
