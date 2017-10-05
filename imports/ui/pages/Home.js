import * as React from 'react';
import SkinsContainer from '/imports/ui/containers/skins';
import {
    Page,
    Carousel,
} from '../components/common';

const SkinCarousel = SkinsContainer(Carousel);

const Home = (props) => (
    <Page title="Home">
        <SkinCarousel />
        Homepage
    </Page>
);

export default Home;
