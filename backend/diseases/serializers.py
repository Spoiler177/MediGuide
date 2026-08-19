from rest_framework import serializers

from .models import Disease


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = [
            "id",
            "name",
            "category",
            "description",
            "causes",
            "symptoms",
            "diagnosis",
            "treatment",
            "prevention",
            "created_at",
            "updated_at",
        ]