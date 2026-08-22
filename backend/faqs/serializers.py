from rest_framework import serializers

from .models import FAQ, FAQCategory


class FAQCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = FAQCategory

        fields = [
            "id",
            "name",
            "description",
            "created_at",
        ]


class FAQSerializer(serializers.ModelSerializer):

    category_name = serializers.CharField(
        source="category.name",
        read_only=True,
    )

    class Meta:
        model = FAQ

        fields = [
            "id",
            "category",
            "category_name",
            "question",
            "answer",
            "is_published",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "created_at",
            "updated_at",
        ]