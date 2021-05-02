import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun?",
        author: "Jan Nowak",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam temporibus maxime placeat, sint unde magni labore dignissimos vel voluptate incidunt a cupiditate totam quisquam nisi eius corporis dolore. Possimus, quae."
    },
    {
        id: 2,
        title: "Czym jest paradoks Fermiego?",
        author: "Jan Nowak",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam temporibus maxime placeat, sint unde magni labore dignissimos vel voluptate incidunt a cupiditate totam quisquam nisi eius corporis dolore. Possimus, quae."
    },
    {
        id: 3,
        title: "Czym jest ciemna energia?",
        author: "Jan Nowak",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam temporibus maxime placeat, sint unde magni labore dignissimos vel voluptate incidunt a cupiditate totam quisquam nisi eius corporis dolore. Possimus, quae."
    }
]
const HomePage = () => {
    
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ));
    return (
        <div className="home">
            {artList}
        </div>
    );
}
export default HomePage;