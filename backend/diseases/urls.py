from rest_framework.routers import DefaultRouter

from .views import (
    DiseaseCategoryViewSet,
    DiseaseViewSet,
)

router = DefaultRouter()

router.register(
    "categories",
    DiseaseCategoryViewSet,
    basename="category",
)

router.register(
    "diseases",
    DiseaseViewSet,
    basename="disease",
)

urlpatterns = router.urls