from django.db.models import Q

from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import FAQ, FAQCategory
from .serializers import (
    FAQCategorySerializer,
    FAQSerializer,
)


class FAQCategoryListCreateView(
    generics.ListCreateAPIView
):
    queryset = FAQCategory.objects.all()
    serializer_class = FAQCategorySerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAuthenticated()]

        return [AllowAny()]


class FAQListCreateView(
    generics.ListCreateAPIView
):
    serializer_class = FAQSerializer

    def get_queryset(self):

        queryset = FAQ.objects.filter(
            is_published=True
        )

        search = self.request.query_params.get(
            "search"
        )

        category = self.request.query_params.get(
            "category"
        )

        if search:
            queryset = queryset.filter(
                Q(question__icontains=search)
                |
                Q(answer__icontains=search)
            )

        if category:
            queryset = queryset.filter(
                category_id=category
            )

        return queryset

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAuthenticated()]

        return [AllowAny()]


class FAQDetailView(
    generics.RetrieveUpdateDestroyAPIView
):
    serializer_class = FAQSerializer

    def get_queryset(self):
        return FAQ.objects.filter(
            is_published=True
        )

    def get_permissions(self):
        if self.request.method in [
            "PUT",
            "PATCH",
            "DELETE",
        ]:
            return [IsAuthenticated()]

        return [AllowAny()]