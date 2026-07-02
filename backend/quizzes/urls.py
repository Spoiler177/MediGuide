from rest_framework.routers import DefaultRouter

from .views import (
    QuizCategoryViewSet,
    QuizViewSet,
    QuestionViewSet,
    QuizResultViewSet,
)

router = DefaultRouter()

router.register("quiz-categories", QuizCategoryViewSet)
router.register("quizzes", QuizViewSet)
router.register("questions", QuestionViewSet)
router.register("quiz-results", QuizResultViewSet)

urlpatterns = router.urls