from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Quiz, QuizAttempt
from .serializers import QuizAttemptSerializer, QuizSerializer


class QuizListCreateView(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAuthenticated()]

        return [AllowAny()]


class QuizDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

    def get_permissions(self):
        if self.request.method in ["PUT", "PATCH", "DELETE"]:
            return [IsAuthenticated()]

        return [AllowAny()]


class QuizAttemptListCreateView(generics.ListAPIView):
    serializer_class = QuizAttemptSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return QuizAttempt.objects.filter(
            user=self.request.user
        )


class SubmitQuizView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, quiz_id):

        try:
            quiz = Quiz.objects.get(id=quiz_id)
        except Quiz.DoesNotExist:
            return Response(
                {
                    "error": "Quiz not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        answers = request.data.get("answers")

        if not isinstance(answers, list):
            return Response(
                {
                    "error": "answers must be a list."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        questions = quiz.questions.all()

        total_questions = questions.count()

        if total_questions == 0:
            return Response(
                {
                    "error": "This quiz has no questions."
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        score = 0

        results = []

        for question in questions:

            submitted_answer_id = None

            for answer in answers:
                if answer.get("question_id") == question.id:
                    submitted_answer_id = answer.get("answer_id")
                    break

            correct_answer = question.answers.filter(
                is_correct=True
            ).first()

            is_correct = (
                correct_answer is not None
                and submitted_answer_id == correct_answer.id
            )

            if is_correct:
                score += 1

            results.append(
                {
                    "question_id": question.id,
                    "selected_answer_id": submitted_answer_id,
                    "correct_answer_id": (
                        correct_answer.id
                        if correct_answer
                        else None
                    ),
                    "is_correct": is_correct,
                }
            )

        attempt = QuizAttempt.objects.create(
            user=request.user,
            quiz=quiz,
            score=score,
            total_questions=total_questions,
        )

        return Response(
            {
                "message": "Quiz submitted successfully.",
                "quiz": quiz.title,
                "score": score,
                "total_questions": total_questions,
                "percentage": round(
                    (score / total_questions) * 100,
                    2,
                ),
                "attempt_id": attempt.id,
                "results": results,
            },
            status=status.HTTP_201_CREATED,
        )