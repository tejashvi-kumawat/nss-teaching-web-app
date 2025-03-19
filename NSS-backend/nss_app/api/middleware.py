from django.http import HttpResponse
from django.conf import settings

class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.allowed_origins = settings.CORS_ALLOWED_ORIGINS

    def __call__(self, request):
        response = self.get_response(request)
        
        # Get the origin from the request
        origin = request.headers.get('Origin')
        
        # Check if the origin is in allowed origins
        if origin in self.allowed_origins:
            response["Access-Control-Allow-Origin"] = origin
            response["Access-Control-Allow-Credentials"] = "true"
            response["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRFToken"
            response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
            response["Access-Control-Max-Age"] = "3600"
            response["Access-Control-Expose-Headers"] = "Content-Type, Authorization, X-CSRFToken"
        
        return response

    def process_request(self, request):
        # Handle OPTIONS requests
        if request.method == "OPTIONS":
            response = HttpResponse()
            origin = request.headers.get('Origin')
            
            if origin in self.allowed_origins:
                response["Access-Control-Allow-Origin"] = origin
                response["Access-Control-Allow-Credentials"] = "true"
                response["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRFToken"
                response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
                response["Access-Control-Max-Age"] = "3600"
                response["Access-Control-Expose-Headers"] = "Content-Type, Authorization, X-CSRFToken"
            return response
        return None 