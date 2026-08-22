from django.contrib import admin

from .models import FAQ, FAQCategory


@admin.register(FAQCategory)
class FAQCategoryAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "created_at",
    )

    search_fields = (
        "name",
    )


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "question",
        "category",
        "is_published",
        "created_at",
    )

    search_fields = (
        "question",
        "answer",
    )

    list_filter = (
        "category",
        "is_published",
        "created_at",
    )

    list_editable = (
        "is_published",
    )

    ordering = (
        "-created_at",
    )