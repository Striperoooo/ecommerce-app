import { useParams } from "react-router-dom";
import CategoryProductCard from "../components/CategoryPage/CategoryProductCard";

export default function CategoryPage() {
    const { categoryName } = useParams()

    return (
        <div className="text-bold text-pink-500">
            I AM THE {categoryName?.toUpperCase()} CATEGORY PAGE!!!
            <CategoryProductCard />
        </div>
    )

}



