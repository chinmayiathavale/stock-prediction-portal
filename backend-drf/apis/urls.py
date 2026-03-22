
from django.urls import path,include

from accounts import views as UserViews
# from accounts.views import RegisterView


urlpatterns = [
    path('register/',UserViews.RegisterView.as_view()),
]