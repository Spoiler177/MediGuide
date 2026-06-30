from django.contrib import admin

from .models import Disease, DiseaseCategory


@admin.register(DiseaseCategory)
class DiseaseCategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


@admin.register(Disease)
class DiseaseAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "created_at",
    )

    list_filter = (
        "category",
    )

    search_fields = (
        "name",
        "description",
        "symptoms",
    )

    prepopulated_fields = {
        "slug": ("name",)
    }