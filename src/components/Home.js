export const Home = () => {

    return (
        <>
        <div class="content-container">
                <div class="main-content">
                    <div class="section1-text">
                        "Movies Makes us more <br/> Human..."
                        <p class="credit-abhay"><i>- Abhay Singh 2024</i></p>
                        {/* <!--https://www.buzzfeed.com/evelinamedina/best-movie-film-lines-all-time--> */}
                    </div>
                    <div class="section2-boxes">
                        <div class="three-boxes">
                            <a href="new-releases.html">
                                <div class="new-releases" />
                                    <span class="nr-text">New Releases:</span>
                                            <div class="nr-item">
                                                <img  class="new-releases-img" src="styles/images/new-releases/aavesham.jpg" />
                                            </div>
                                            <div class="nr-item">
                                                <img class="new-releases-img" src="styles/images/new-releases/kalki.jpeg" alt="" />
                                            </div>
                                            <div class="nr-item">
                                                <img class="new-releases-img" src="styles/images/new-releases/d&w.jpg" alt="" />
                                            </div>
                                            <div class="nr-item">
                                                <img class="new-releases-img" src="styles/images/new-releases/kill.jpeg" alt="" />
                                            </div>
                                            <div class="nr-item">
                                                <img class="new-releases-img" src="styles/images/new-releases/weapon.jpg" alt="" />
                                            </div>
                                            <span class="new-releases-img-title">Find the latest new released movies here from all India</span>
                                            <p class="new-releases-img-desc"><i>*new releases: Kalki 2898 AD, Aavesham, Deadpool & Wolverine, Kill, Weapon...more</i></p>
                                        </a>
                                            <button class="yt-btn">Watch Trailer</button>
                                            <i class="arrow-left-nr fa-solid fa-circle-chevron-left arrow" id="arrow-left"></i>
                                            <i class="arrow-right-nr fa-solid fa-circle-chevron-right arrow" id="arrow-right"></i>
                                </div>
                             
                            <div class="lower-two-boxes">
                                <div class="top5">
                                    <img class="top5-slides" src="styles/images/cartoons/your-name.jpg" alt="" />
                                    <span class="top-5-img-title">Top 5 <br /> of the Week:</span>
                                    <p class="t5-desc">Find the TOP 5 of this week here from all genres</p>
                                </div>
                                <div class="worst5">
                                    <img class="worst5-slides" src="styles/images/cartoons/demon-slayer.jpg" alt="" />
                                    <span class="worst-5-img-title">Worst 5 <br /> of the Week:</span>
                                    <p class="w5-desc">Find the WORST 5 of this week here from all genres</p>
                                </div>
                            </div>
                        </div>


                        <div class="top-articles-container">
                            <div class="top-articles">
                                Top-articles
                                <ul class="articles-item">
                                    <li><a href="https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/shah-rukh-khan-honoured-with-career-achievement-award-at-locarno-film-festival-woos-fans-with-powerful-speech-watch/articleshow/112436791.cms">
                                        Srk honoured with career achievement award</a></li>
                                    <li><a href="https://www.bollywoodhungama.com/news/box-office-business-talk/biz-talk-bollywoods-crisis-entertainment-factor-missing-star-studded-films/">Biz Talk: Bollywood’s Ongoing Crisis x</a></li>
                                    <li><a href="https://indianexpress.com/article/entertainment/bollywood/john-abraham-reveals-hed-get-information-about-pathaan-only-through-shah-rukh-khan-9505054/">John Abraham reveals he’d get</a></li>
                                    <li><a href="https://indianexpress.com/photos/entertainment-gallery/janhvi-kapoor-roshan-mathew-and-others-put-their-best-fashion-foot-forward-at-ulajh-trailer-preview-event/">Janhvi Kapoor, Roshan Mathew and others put</a></li>
                                    <li><a href="https://indianexpress.com/article/trending/trending-in-india/zaira-wasim-posts-instagram-story-showing-mould-spore-on-pie-asks-people-to-check-twice-when-ordering-from-srinagar-bakeries-9506648/">Zaira Wasim posts Instagram story</a></li>
                                    <li><a href="https://indianexpress.com/article/entertainment/bollywood/aamir-khan-talks-about-being-workaholic-says-35-years-kiran-rao-9506399/">Aamir Khan’s ex-wife Kiran Rao asked...</a></li>
                                    <li><a href="https://indianexpress.com/article/entertainment/bollywood/taapsee-pannu-first-date-mathias-boe-human-trafficking-dubai-9505981/">Taapsee Pannu’s friends were concerned that...</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}