import { Link } from "react-router-dom";

export const categories = () => {

    return (
        <>
        <h1 class="categories">Categories:</h1>
            <div class="category-cards-1">
                <div class="card1"><p>ACTION <i class="fa-solid fa-location-arrow">
                </i></p></div>
                <div class="card2"><p>COMEDY <i class="fa-solid fa-location-arrow">
                </i></p></div>
                <div class="card3"><p>ANIME <i class="fa-solid fa-location-arrow">
                </i></p></div>
                <div class="card4"><p>THRILLER <i class="fa-solid fa-location-arrow">
                </i></p></div>
            </div>
            <div class="category-cards-2">
                <div class="card5"><p>ADVENTURE <i class="fa-solid fa-location-arrow">
                </i></p></div>
                <div class="card6"><p>DRAMA <i class="fa-solid fa-location-arrow">
                </i></p></div>
                <div class="card7"><p>ROMANCE <i class="fa-solid fa-location-arrow">
                </i></p></div>
                <div class="card8"><p>FANTASY <i class="fa-solid fa-location-arrow">
                </i></p></div>
            </div>

        </>
    )
}