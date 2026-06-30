from django.db import models


class DiseaseCategory(models.Model):
    """
    Categories used to group diseases.
    """

    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["name"]
        verbose_name = "Disease Category"
        verbose_name_plural = "Disease Categories"

    def __str__(self):
        return self.name


class Disease(models.Model):
    """
    Main disease model.
    """

    category = models.ForeignKey(
        DiseaseCategory,
        on_delete=models.CASCADE,
        related_name="diseases"
    )

    name = models.CharField(max_length=255)

    slug = models.SlugField(unique=True)

    description = models.TextField()

    symptoms = models.TextField()

    causes = models.TextField()

    risk_factors = models.TextField(blank=True)

    diagnosis = models.TextField()

    treatment = models.TextField()

    prevention = models.TextField()

    complications = models.TextField(blank=True)

    image = models.ImageField(
        upload_to="diseases/",
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name