from django.urls import path

from .views import (
    FAQCategoryListCreateView,
    FAQDetailView,
    FAQListCreateView,
)


urlpatterns = [
    path(
        "",
        FAQListCreateView.as_view(),
        name="faq-list-create",
    ),

    path(
        "<int:pk>/",
        FAQDetailView.as_view(),
        name="faq-detail",
    ),

    path(
        "categories/",
        FAQCategoryListCreateView.as_view(),
        name="faq-category-list-create",
    ),
]