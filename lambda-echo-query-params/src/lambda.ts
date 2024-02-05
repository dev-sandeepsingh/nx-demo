import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> =>{
    const queries= JSON.stringify(event.queryStringParameters);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from Lambda!',
            queries: queries
        })
    }
}