import MainComponent from '../components/MainComponent';
import CategoryComponent from '../components/CategoryComponent';
import WordsComponent from '../components/WordsComponents';
import ProductSlider from '../components/ProductSlider';
import MustHave from '../components/MustHave';
import ApartmentEdition from '../components/ApartmentEdition';
import React from 'react'

function Home() {
    return (
        <div>
            <MainComponent/>
            <CategoryComponent/>
            <WordsComponent/>
            <ProductSlider/>
            <MustHave/>
            <ApartmentEdition/>
        </div>
    )
}

export default Home
