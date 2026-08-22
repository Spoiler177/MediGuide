from django.contrib import admin

from .models import Category, Disease


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
    )

    search_fields = (
        "name",
    )


@admin.register(Disease)
class DiseaseAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "category",
        "created_at",
        "updated_at",
    )

    search_fields = (
        "name",
        "description",
        "symptoms",
        "causes",
    )

    list_filter = (
        "category",
        "created_at",
    )

    ordering = (
        "name",
    )