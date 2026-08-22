from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path(
        "admin/",
        admin.site.urls,
    ),

    path(
        "api/auth/",
        include("accounts.urls"),
    ),

    path(
        "api/diseases/",
        include("diseases.urls"),
    ),

    path(
        "api/quizzes/",
        include("quizzes.urls"),
    ),

    path(
        "api/faqs/",
        include("faqs.urls"),
    ),
]