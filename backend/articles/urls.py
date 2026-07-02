from rest_framework.routers import DefaultRouter
from .views import (
    ArticleCategoryViewSet,
    ArticleViewSet,
)

router = DefaultRouter()

router.register(
    "article-categories",
    ArticleCategoryViewSet,
)

router.register(
    "articles",
    ArticleViewSet,
)

urlpatterns = router.urls