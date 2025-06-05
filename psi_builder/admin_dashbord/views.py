from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Stocks

def admin_dashboard(request):
    return render(request, 'index.html')  # Renders admin_dashboard/Template/index.html

@csrf_exempt
def add_stock(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            symbol = data.get('symbol')
            token = data.get('token')
            print(f"Saving to DB: {symbol}, {token}")  # Optional logging

            # Save to DB logic here (optional)

            return JsonResponse({'status': 'success', 'symbol': symbol})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request'}, status=400)