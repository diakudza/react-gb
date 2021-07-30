import React from "react";
import ImgMediaCard from "../../components/ImgMediaCard/ImgMediaCard";

const Home = () => {

    return (
        <div className="padding020">
            <h2>Главная страница</h2>
            <p>Учебный проект GB по React.js</p>
            <div className="flexRow">
                <ImgMediaCard header="Новость 1" text="В нашем городе произошло..."/>
                <ImgMediaCard header="Новость 2" text="Ученые нашли загадочную..."/>
                <ImgMediaCard header="Новость 3" text="Если вы еще это не видили..."/>
            </div>
        </div>
    );
}

export default Home;
