from django.shortcuts import render


def Index(Request):

    return render(Request,'clientrender/index.html')
