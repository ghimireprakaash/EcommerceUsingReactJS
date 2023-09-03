export default function JsonDataResponse(data: any, status: number, message: string){
    return {
        content: 'application/json',
        data,
        message,
        status,
    }
}