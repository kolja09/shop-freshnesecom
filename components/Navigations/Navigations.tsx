import React from 'react';
import { useRouter } from "next/dist/client/router";

import { routesPath } from "../../static/routesPath";

import { NavigationsContainer, NavigateLink, NavigateBlock } from "./styled";

const Navigations = () => {

    const router = useRouter();

    const routeHome = () => {
        router.push({ pathname: routesPath.home })
    }

    const routeBlog = () => {
        router.push({ pathname: routesPath.blog })
    }
    return (
        <NavigationsContainer>
            <NavigateBlock>
                <NavigateLink onClick={routeHome}>Homepage</NavigateLink> /
                <NavigateLink onClick={routeBlog}>Blog</NavigateLink>
            </NavigateBlock>
        </NavigationsContainer>
    );
};

export default Navigations;
