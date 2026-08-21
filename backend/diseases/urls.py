from django.urls import path

from .views import (
    DiseaseListCreateView,
    DiseaseDetailView,
    CategoryListCreateView,
    CategoryDetailView,
)


urlpatterns = [
    path(
        "categories/",
        CategoryListCreateView.as_view(),
        name="category-list-create",
    ),

    path(
        "categories/<int:pk>/",
        CategoryDetailView.as_view(),
        name="category-detail",
    ),

    path(
        "",
        DiseaseListCreateView.as_view(),
        name="disease-list-create",
    ),

    path(
        "<int:pk>/",
        DiseaseDetailView.as_view(),
        name="disease-detail",
    ),
]