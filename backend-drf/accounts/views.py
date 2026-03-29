from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import UserSerializer
# Create your views here.


def geet() :
    print('Jay Shree Ram!!')

class RegisterView(generics.CreateAPIView) :
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello from app1")


class ProtectedView(APIView) :
    permission_classes=[IsAuthenticated]

    def get(self, request) :
        response = {
            'status' : 'permission was granted'
        }

        return Response(response)