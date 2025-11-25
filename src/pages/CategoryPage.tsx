import { useParams } from "react-router-dom";
import CategoryProductCard from "../components/CategoryPage/CategoryProductCard";
import data from "../../data.json"
import Typography from "../components/ui/Typography";

interface CategoryPageProps {
    id: number;
    slug: string;
    name: string;
    categoryImage: { mobile: string; tablet: string; desktop: string; };
    new: boolean;
    description: string;

}

export default function CategoryPage() {
    const { categoryName } = useParams()

    return (
        <>
            <section className="bg-black text-center py-8" >
                <Typography variant="h4Other" className="text-white">
                    {categoryName}
                </Typography>
            </section>

            <section className="mt-16 px-10 flex flex-col items-center justify-center">
                <CategoryProductCard />
            </section>
        </>
    )

}



