from django.contrib import admin

from .models import Disease


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
        "category",
        "description",
    )

    list_filter = (
        "category",
    )