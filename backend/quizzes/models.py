from django.conf import settings
from django.db import models

from diseases.models import Disease


class Quiz(models.Model):
    title = models.CharField(max_length=200)

    description = models.TextField(blank=True)

    disease = models.ForeignKey(
        Disease,
        on_delete=models.CASCADE,
        related_name="quizzes",
        null=True,
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class Question(models.Model):
    quiz = models.ForeignKey(
        Quiz,
        on_delete=models.CASCADE,
        related_name="questions",
    )

    question_text = models.TextField()

    explanation = models.TextField(blank=True)

    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.question_text


class Answer(models.Model):
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name="answers",
    )

    answer_text = models.CharField(max_length=300)

    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.answer_text


class QuizAttempt(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="quiz_attempts",
    )

    quiz = models.ForeignKey(
        Quiz,
        on_delete=models.CASCADE,
        related_name="attempts",
    )

    score = models.PositiveIntegerField(default=0)

    total_questions = models.PositiveIntegerField(default=0)

    completed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-completed_at"]

    def __str__(self):
        return f"{self.user} - {self.quiz} - {self.score}"