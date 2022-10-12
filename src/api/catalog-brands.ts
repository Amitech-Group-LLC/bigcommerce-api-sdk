import { Brand } from '../models/catalog-brand'
import { Result } from '../models/result'
import { RequestOptions } from '../models/request-options'
import http from '../utils/http-clients'
import { BigcommerceApiError } from '../utils/error'

class CatalogBrands {
    public async getAllBrands(
        requestOptions: RequestOptions = {},
        id?: number,
        include_fields?: string,
        limit?: number,
        name?: string,
        page?: number,
        page_title?: string,
        id_greater?: number[],
        id_in?: number[],
        id_less?: number[],
        id_max?: number[],
        id_min?: number[],
        id_not_in?: number[],
    ): Promise<Result<Brand>> {
        return await http
            .get(`/v3/catalog/brands`, {
                ...requestOptions, 
                params: {
                    id,
                    include_fields,
                    limit,
                    name,
                    page,
                    page_title,
                    "id:greater": id_greater,
                    "id:in": id_in,
                    "id:less": id_less,
                    "id:max": id_max,
                    "id:min": id_min,
                    "id:not_in": id_not_in,
                }
            })
            .catch(ex => {
                if (ex.response) {
                    throw new BigcommerceApiError(ex)
                }
                throw ex
            })
    }

    public async getBrand(
        requestOptions: RequestOptions = {},
        brand_id: number,
        exclude_fields?: string,
        include_fields?: string,
    ): Promise<Result<Brand>> {
        return await http
            .get(`/v3/catalog/brands/${brand_id}`, {
                ...requestOptions, 
                params: {
                    include_fields,
                    exclude_fields,
                }
            })
            .catch(ex => {
                if (ex.response) {
                    throw new BigcommerceApiError(ex)
                }
                throw ex
            })
    }

    public async create<TData extends Brand>(
        data: TData,
        requestOptions: RequestOptions = {}
    ): Promise<Result<Brand>> {
        return await http
            .post(`/v3/catalog/brands`, { ...requestOptions, data })
            .catch(ex => {
                if (ex.response) {
                    throw new BigcommerceApiError(ex)
                }
                throw ex
            })
    }

    public async deleteBrands(
        name?: string,
        page_title?: string,
        requestOptions: RequestOptions = {}
    ): Promise<undefined> {
        return await http
            .delete(`/v3/catalog/brands`, { ...requestOptions, params: { name, page_title } })
            .catch(ex => {
                if (ex.response) {
                    throw new BigcommerceApiError(ex)
                }
                throw ex
            })
    }

    public async update<TData extends Brand>(
        brand_id: number,
        data: TData,
        requestOptions: RequestOptions = {}
    ): Promise<Result<Brand>> {
        return await http
            .put(`/v3/catalog/brands/${brand_id}`, { ...requestOptions, data })
            .catch(ex => {
                if (ex.response) {
                    throw new BigcommerceApiError(ex)
                }
                throw ex
            })
    }

    public async deleteBrand(
        brand_id: number,
        requestOptions: RequestOptions = {}
    ): Promise<undefined> {
        return await http
            .delete(`/v3/catalog/brands/${brand_id}`, { ...requestOptions })
            .catch(ex => {
                if (ex.response) {
                    throw new BigcommerceApiError(ex)
                }
                throw ex
            })
    }
}

export default new CatalogBrands()
