from rest_framework import serializers

from .models import (
    Answer,
    Question,
    Quiz,
    QuizAttempt,
)


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = [
            "id",
            "answer_text",
        ]


class QuestionSerializer(serializers.ModelSerializer):
    answers = AnswerSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = Question
        fields = [
            "id",
            "question_text",
            "explanation",
            "order",
            "answers",
        ]


class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        model = Quiz
        fields = [
            "id",
            "title",
            "description",
            "disease",
            "questions",
            "created_at",
            "updated_at",
        ]


class QuizAttemptSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizAttempt
        fields = [
            "id",
            "quiz",
            "score",
            "total_questions",
            "completed_at",
        ]

        read_only_fields = [
            "user",
            "score",
            "total_questions",
            "completed_at",
        ]