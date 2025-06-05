from django.db import models

class Stocks(models.Model):
    symbol = models.CharField(max_length=10)
    token = models.CharField(max_length=20)

    def __str__(self):
        return self.symbol
