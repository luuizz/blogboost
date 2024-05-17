import { arrayListPostsXs } from "@/data";

export default function DetailReading({ reading, date }) {
    return (
        <ul className="flex items-center gap-6">
            {
                arrayListPostsXs.map((items, index) => (
                    <li className="detail relative" key={index}>
                        <span className="text-sm font-normal text-gray-scale-500">{items.text}</span>
                    </li>
                ))
            }
        </ul>
    )
}