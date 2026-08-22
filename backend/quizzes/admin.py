from django.contrib import admin

from .models import (
    Answer,
    Question,
    Quiz,
    QuizAttempt,
)


class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 4


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1


@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "disease",
        "created_at",
    )

    search_fields = (
        "title",
        "description",
    )

    list_filter = (
        "disease",
        "created_at",
    )

    inlines = [
        QuestionInline,
    ]


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "question_text",
        "quiz",
        "order",
    )

    search_fields = (
        "question_text",
    )

    list_filter = (
        "quiz",
    )

    inlines = [
        AnswerInline,
    ]


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "answer_text",
        "question",
        "is_correct",
    )

    search_fields = (
        "answer_text",
    )

    list_filter = (
        "is_correct",
    )


@admin.register(QuizAttempt)
class QuizAttemptAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "user",
        "quiz",
        "score",
        "total_questions",
        "completed_at",
    )

    search_fields = (
        "user__username",
        "quiz__title",
    )

    list_filter = (
        "quiz",
        "completed_at",
    )

    readonly_fields = (
        "user",
        "quiz",
        "score",
        "total_questions",
        "completed_at",
    )