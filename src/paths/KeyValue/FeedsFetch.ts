import { DateOnly, OpenAPIRoute, Path, Str, Num, DateTime, OpenAPIRouter, withParams, Int } from '@cloudflare/itty-router-openapi'

const Feed = [
    {
        "body": "Click and you can win",
        "cta": "https://engagr.xyz",
        "heroImage": "bafybeihrtqd5c5ko5yt2bchu5wg2o4uzxxpb6dwc3onwjulp7qh43ud3zy",
        "id": "fae08856-76f9-4a16-b770-7216e99c81ab",
        "title": "This is the first post",
        "type": "cta"
    },
    {
        "body": "Get some collie points toady",
        "cta": "https://engagr.xyz",
        "heroImage": {},
        "id": "8aee3a8f-960f-4d91-a7ef-e487c66bdedf",
        "title": "It all started with a berd and a fish",
        "type": "cta"
    },
    {
        "body": "Cat",
        "cta": "https://cats.com",
        "heroImage": "bafybeibatfjnbrhlbqk5aqzwzicb6icqqmhzk2fwgndbg3v25xstlxpjue",
        "id": "77b23f10-b786-405e-a7ec-76c395d4dd5b",
        "title": "This is a cat",
        "type": "cta"
    }
  ]

export default class FeedFetch extends OpenAPIRoute {  
  
    static schema = {
      tags: ['Brand'],
      summary: 'Get a single feed for brand by id',
      parameters: {
        brandID: Path(Str, {
          description: 'brand id',
        }),
      },
      responses: {
        '200': {
          schema: {
            feed: {Feed}
          },
        },
      },
    }
  
    async handle(request: Request, env: any, context: any, data: any ) {
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
      };
  
      if (request.method === "OPTIONS") {
        return new Response("OK", {
          headers: corsHeaders
        });
      }
      
  
      
      //path
      let slug = request.params.brandID
  
      //fetch a task using the brandSlug
      let id=env.FEED.get(slug , { type: "json" })
  
      return new Response( await id, {
        headers: {
          'Content-type': 'application/json',
          ...corsHeaders //uses the spread operator to include the CORS headers.
        }
      } );
    }
  }