import { useParams } from "react-router-dom"



export default function ProductDetailPage() {
    const { productName } = useParams()

    return (
        <section>
            <h1>i am the product detail page for</h1>
            <h2>{productName}</h2>
        </section>
    )
}