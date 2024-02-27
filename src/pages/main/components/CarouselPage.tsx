import styled from '@emotion/styled';
import { Suspense, lazy } from 'react';

import { carouselItemPropTypes } from './GroupCarousel';
import { SkeletonComponent } from './skeletons/SkeletonComponent';

const CarouselPage = ({ moimId }: carouselItemPropTypes) => {
  const lazyCarousel = import('./GroupCarousel');
  const LazyCarousel = lazy(() => lazyCarousel);

  return (
    <CarouselComponentWrapper>
      <TitleLayout>마일과 함께하고 있는 글 모임이에요</TitleLayout>
      <Suspense fallback={<SkeletonComponent />}>
        <LazyCarousel moimId={moimId} />
      </Suspense>
    </CarouselComponentWrapper>
  );
};

export default CarouselPage;

const CarouselComponentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding-bottom: 10rem;
`;

const TitleLayout = styled.div`
  display: flex;
  padding-top: 7.2rem;

  ${({ theme }) => theme.fonts.title3};
`;
