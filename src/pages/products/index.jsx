import { useQuery } from "../../hooks"

export const ProductsPage = () => {
    const query = useQuery()
    
    return (
        <>
            <div>Products</div>
            <div>type: {query.get("type")}</div>
        </>
    )
}