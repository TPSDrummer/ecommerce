import { useQuery } from "@tanstack/react-query"
import { productService } from "../services/productService"

export const useProducts = (filters) => {
    return useQuery(
        {
            queryKey: ['products', filters],
            queryFn: async () => productService.getProducts(filters),
        }
    );
};