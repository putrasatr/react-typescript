import React, { useEffect, useState } from "react";
import { API_URL } from "../../../constants";
import { getNews } from "../../../services/actions"

interface Props {

}
type ItemProps = {
    image: string;
}
const Gallery: React.FC<Props> = (): JSX.Element => {
    const [items, setData] = useState<ItemProps[]>([])
    const load = async () => {
        const data: any = await getNews()
        setData(data)
    }
    useEffect(() => {
        console.log("enter gallery")
        return () => {
            console.log("Leave Gallery")
        }
    })

    return (
        <div>
            <button onClick={load}>
                <span>Load</span>
            </button>
            <span>Gallery</span>
            <div className="col__items">
                {items.map(({ image }, i: number) => (
                    <div className="item__img" key={i}>
                        <img src={`${API_URL}images/news/${image}`} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery