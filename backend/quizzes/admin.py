from django.contrib import admin
from .models import (
    QuizCategory,
    Quiz,
    Question,
    QuizResult,
)


admin.site.register(QuizCategory)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(QuizResult)