from django.urls import path

from .views import (
    QuizAttemptListCreateView,
    QuizDetailView,
    QuizListCreateView,
    SubmitQuizView,
)


urlpatterns = [
    path(
        "",
        QuizListCreateView.as_view(),
        name="quiz-list-create",
    ),

    path(
        "<int:pk>/",
        QuizDetailView.as_view(),
        name="quiz-detail",
    ),

    path(
        "attempts/",
        QuizAttemptListCreateView.as_view(),
        name="quiz-attempts",
    ),

    path(
        "<int:quiz_id>/submit/",
        SubmitQuizView.as_view(),
        name="quiz-submit",
    ),
]