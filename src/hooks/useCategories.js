import { useQuery } from "@tanstack/react-query"
import { productService } from "../services/productService"

export const useCategories = () => {
    return useQuery(
        {
            queryKey: ['categories'],
            queryFn: async () => productService.getCategories(),
        }
    );
};