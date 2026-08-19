from django.db import models


class Disease(models.Model):
    name = models.CharField(max_length=200, unique=True)

    category = models.CharField(max_length=100)

    description = models.TextField()

    causes = models.TextField()

    symptoms = models.TextField()

    diagnosis = models.TextField()

    treatment = models.TextField()

    prevention = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name