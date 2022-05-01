import React from 'react';
import { useRouter } from "next/router";

import { routesPath } from "../../static/routesPath";

import { NavigationsContainer, NavigateLink, NavigateBlock } from "./styled";
import { INavigations } from "./types";

const Navigations = ({ nameLink, link, id }: INavigations) => {

    const router = useRouter();

    const routeHome = () => {
        router.push({ pathname: routesPath.home })
    }

    const routePage = () => {
        router.push({ pathname: link })
    }
    return (
        <NavigationsContainer>
            <NavigateBlock>
                <NavigateLink onClick={routeHome}>Homepage</NavigateLink> /
                <NavigateLink onClick={routePage}>{nameLink}</NavigateLink>
                {id && '/'} <NavigateLink>{id}</NavigateLink>
            </NavigateBlock>
        </NavigationsContainer>
    );
};

export default Navigations;
