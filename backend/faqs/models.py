from django.db import models


class FAQCategory(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True,
    )

    description = models.TextField(
        blank=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.name


class FAQ(models.Model):
    category = models.ForeignKey(
        FAQCategory,
        on_delete=models.SET_NULL,
        related_name="faqs",
        null=True,
        blank=True,
    )

    question = models.CharField(
        max_length=500,
    )

    answer = models.TextField()

    is_published = models.BooleanField(
        default=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.question