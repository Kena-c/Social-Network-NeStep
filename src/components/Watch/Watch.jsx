import React from "react";

let Watch = (props) => {
    if(props.watch.length === 0) {
    props.setWatches([
        {
            id: 0,
            avaPhoto: 'https://scontent.ftse2-1.fna.fbcdn.net/v/t39.30808-1/326798734_1203511373935815_6914792249482121878_n.png?stp=dst-png_p320x320&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeHoeS5YyUMerIXIw8Via1RbbvpK8G1ObvRu-krwbU5u9IVSlpkalR5OjqEndZ8WR020kkVo_2UlXqi7b6MkTXcM&_nc_ohc=eHU0VGCR_iEAX-rzizp&_nc_ht=scontent.ftse2-1.fna&oh=00_AfBNW0U86FyBCBHvqh_kqch6xgjCw-GOWDfo0BTKojyJKg&oe=64131F6E',
            canalName: 'PokerGo',
            follow: false,
            data: 'November 18, 2021',
            description: 'Koray Aldemir Wins 2021 WSOP Main Event for $8,000,000',
            playVideo: 'watch',
        },
        {
            id: 1,
            avaPhoto: 'https://scontent.ftse2-1.fna.fbcdn.net/v/t39.30808-1/326798734_1203511373935815_6914792249482121878_n.png?stp=dst-png_p320x320&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_eui2=AeHoeS5YyUMerIXIw8Via1RbbvpK8G1ObvRu-krwbU5u9IVSlpkalR5OjqEndZ8WR020kkVo_2UlXqi7b6MkTXcM&_nc_ohc=eHU0VGCR_iEAX-rzizp&_nc_ht=scontent.ftse2-1.fna&oh=00_AfBNW0U86FyBCBHvqh_kqch6xgjCw-GOWDfo0BTKojyJKg&oe=64131F6E',
            canalName: 'PokerGo',
            follow: true,
            data: 'November 18, 2021',
            description: 'Koray Aldemir Wins 2021 WSOP Main Event for $8,000,000',
            playVideo: 'watch',
        }
        ]
    )
    }
    return <div>
        {props.watch.map(w => <div key={w.id}>
                <div>
                    <div>
                        <img src={w.avaPhoto}/>
                    </div>
                    <div>
                        <div>{w.canalName}</div>
                        <div>{w.data}</div>
                    </div>
                    <div>
                        {w.followed ? <button onClick={() => {
                                props.unfollow(w.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(w.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{w.description}</div>
                    <div>{w.playVideo}</div>
                </div>
            </div>)}
            </div>
}

export default Watch;