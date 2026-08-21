from rest_framework import serializers

from .models import Category, Disease


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            "id",
            "name",
            "description",
            "created_at",
        ]


class DiseaseSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(
        source="category.name",
        read_only=True
    )

    class Meta:
        model = Disease

        fields = [
            "id",
            "name",
            "category",
            "category_name",
            "description",
            "causes",
            "symptoms",
            "diagnosis",
            "treatment",
            "prevention",
            "created_at",
            "updated_at",
        ]