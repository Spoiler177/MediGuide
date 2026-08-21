from django.db.models import Q

from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Disease
from .serializers import CategorySerializer, DiseaseSerializer


class DiseaseListCreateView(generics.ListCreateAPIView):
    serializer_class = DiseaseSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = Disease.objects.select_related("category").all()

        search = self.request.query_params.get("search")
        category = self.request.query_params.get("category")

        if search:
            queryset = queryset.filter(
                Q(name__icontains=search)
                | Q(category__name__icontains=search)
                | Q(description__icontains=search)
                | Q(symptoms__icontains=search)
                | Q(causes__icontains=search)
            )

        if category:
            queryset = queryset.filter(
                category__name__iexact=category
            )

        return queryset


class DiseaseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Disease.objects.select_related("category").all()
    serializer_class = DiseaseSerializer
    permission_classes = [AllowAny]


class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]