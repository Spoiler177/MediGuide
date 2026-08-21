from django.contrib import admin

from .models import Category, Disease


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "created_at",
    )

    search_fields = (
        "name",
        "description",
    )


@admin.register(Disease)
class DiseaseAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "created_at",
        "updated_at",
    )

    search_fields = (
        "name",
        "category__name",
        "description",
        "symptoms",
    )

    list_filter = (
        "category",
    )