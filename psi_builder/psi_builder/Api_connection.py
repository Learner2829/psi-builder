from SmartApi import SmartConnect
from django.http import HttpResponse    
import sys
import os
import pyotp


apiKey = "K7WY6yi9"
userid ="A56068389"
pin= 1207
totpKey = "6FTC7CSOZVK7F7AUT7CVWWSSWQ"

def api_connect(apiKey,userid,pin,totpKey): 
    try:
        connection=SmartConnect(api_key=apiKey)
        obj= connection.generateSession(userid, pin, pyotp.TOTP(totpKey).now())
        return connection,obj
    except Exception as e:
        return print(f"Error: {e}")
    
def main(request):
    # connection,obj = api_connect(apiKey,userid,pin,totpKey)
    # jwt_token = obj['data'].get('jwtToken')
    # feed_token = obj['data'].get('feedToken')
    return HttpResponse("This is home page")