from rest_framework import serializers
from .models import DiseaseCategory, Disease


class DiseaseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DiseaseCategory
        fields = "__all__"


class DiseaseSerializer(serializers.ModelSerializer):
    category = DiseaseCategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=DiseaseCategory.objects.all(),
        source="category",
        write_only=True,
    )

    class Meta:
        model = Disease
        fields = [
            "id",
            "category",
            "category_id",
            "name",
            "slug",
            "description",
            "symptoms",
            "causes",
            "risk_factors",
            "diagnosis",
            "treatment",
            "prevention",
            "complications",
            "image",
            "created_at",
            "updated_at",
        ]