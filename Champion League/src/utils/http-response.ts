import { HttpResponse } from "../models/http-response-model"

export const Ok = async (data: any): Promise<HttpResponse>=>{

    return {
        statusCode: 200,
        body: data
    }
}

export const NoContent = async (): Promise<HttpResponse>=>{

    return {
        statusCode: 204,
        body: null
    }
}

export const BadRequest = async (): Promise<HttpResponse>=>{

    return {
        statusCode: 400,
        body: null
    }
}

export const Create = async (): Promise<HttpResponse>=>{

    return {
        statusCode: 201,
        body: {message: "Cadastro bem sucedido"}
    }
}