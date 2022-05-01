import type { AppProps } from 'next/app'
import styled from "styled-components";
import { Provider } from "react-redux";

import store from "../store/store";

import '../globals.css'

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  background: #E5E5E5;
`;

const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
`;

function MyApp({ Component, pageProps }: AppProps) {

    return (
      <Provider store={store}>
        <PageWrapper>
          <Container>
            <Component {...pageProps} />
          </Container>
        </PageWrapper>
      </Provider>
    )
}

export default MyApp
