from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Disease, DiseaseCategory
from .serializers import (
    DiseaseSerializer,
    DiseaseCategorySerializer,
)


class DiseaseCategoryViewSet(viewsets.ModelViewSet):
    queryset = DiseaseCategory.objects.all()
    serializer_class = DiseaseCategorySerializer
    permission_classes = [AllowAny]


class DiseaseViewSet(viewsets.ModelViewSet):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer
    permission_classes = [AllowAny]

class DiseaseViewSet(viewsets.ModelViewSet):

    queryset = Disease.objects.all()

    serializer_class = DiseaseSerializer

    permission_classes = [AllowAny]

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    filterset_fields = [
        "category",
    ]

    search_fields = [
        "name",
        "description",
        "symptoms",
    ]

    ordering_fields = [
        "name",
        "created_at",
    ]