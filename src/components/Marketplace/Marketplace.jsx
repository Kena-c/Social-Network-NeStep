import React from "react";
import c from './Marketplace.module.css'
import MarketplaceSidebar from "./marketplaceSidebar/marketplaceSidebar";

const Marketplace = () => {
    return (
        <div className={c.marketplace_1}>
            <div>
                < MarketplaceSidebar/>
            </div>
            <div className={c.marketplace}>
                <div className={c.market}>
                    <img alt='airpods' src="https://scontent.ftse2-1.fna.fbcdn.net/v/t45.5328-4/322953375_5944353435626345_547879098049664599_n.jpg?stp=c0.66.403.403a_dst-jpg_p403x403&_nc_cat=111&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeEKF9f6_9C8DZQdgq9kG7aLbZpVot_7NLJtmlWi3_s0shp0yaLQJ4pMUfm3GFW-iQXiaMtZT42iHT7h5w_K3J_s&_nc_ohc=qZIPi2bSRd8AX-oFenz&_nc_ht=scontent.ftse2-1.fna&oh=00_AfDowpoNljqO_2tEd9Azkg0I-qxgzbGjWFEmPiAz4LjHBQ&oe=63CAE0A5"/>
                    <h2>10,000tg</h2>
                    Продам ЭйрПодс бу
                    <p>Astana, Kazakhstan</p>
                </div>
                <div className={c.market}>
                    <img alt='тасбих' src='https://scontent.ftse2-1.fna.fbcdn.net/v/t45.5328-4/314759221_5978309725525456_5075685972373161207_n.jpg?stp=c0.0.403.403a_dst-jpg_p403x403&_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFRHw8VHlOSLJ28-e6B2u9WYzP2QlluQxFjM_ZCWW5DEQ8bkDd--iRYZEkoQ1omWiWj__n2kODX1KItKfybCJus&_nc_ohc=eT6bDlNWjHIAX_ws1hd&_nc_ht=scontent.ftse2-1.fna&oh=00_AfA9BS7x0CaUbo-Ovt3yps8hTLp35OrNPeTzzOSHuBfxBg&oe=63CB0961' />
                    <h2>11,000tg</h2>
                    Электронный тасбих-Зеленый
                    <p>Astana, Kazakhstan</p>
                </div>
                <div className={c.market}>
                    <img alt='Лейка' src='https://scontent.ftse2-1.fna.fbcdn.net/v/t45.5328-4/319108560_5692004597520680_5815197319393347700_n.jpg?stp=c0.67.403.403a_dst-jpg_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFdBq53BcOA43iXhomFuBxEQTaomVeNkXhBNqiZV42ReNP-N-FwP8AFgGx0CmrG1ELUupY-jy5LL2h_KGX0WmHJ&_nc_ohc=Qj3Iw5LuWUcAX8ASqot&_nc_ht=scontent.ftse2-1.fna&oh=00_AfBFEkusjzQfE01SQAfMSz5dVIAGcdeg-UaSGBVmBIchaA&oe=63CC2177'/>
                    <h2>14,000tg</h2>
                    Leica GS18I
                    <p>Astana, Kazakhstan</p>
                </div>
                <div className={c.market}>
                    <img alt='skoda' src='https://scontent.ftse2-1.fna.fbcdn.net/v/t45.5328-4/309870173_5629311680457828_1484674232739393326_n.jpg?stp=c65.0.395.395a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=c48759&_nc_eui2=AeFYXwheC5lwAIynsbXaA5mTM6GZWS8sZPgzoZlZLyxk-K-oZi4UKnJDPdIFA1LB7vc6FU2OhXdM7fJcNdqWaKnY&_nc_ohc=_3iCHXo85GQAX-EibQ1&_nc_ht=scontent.ftse2-1.fna&oh=00_AfBneGrFoBaO9MYtlyanWTV5-dwEZfQJUrm13Y7gM544aQ&oe=63CA4EF2' />
                    <h2>2,500,000tg</h2>
                    Skoda Superb 4x4. V2.0 TFSI
                    <p>Astana, Kazakhstan</p>
                </div>
            </div>
        </div>
    )
}

export default Marketplace;