# Generated by Django 4.2.6 on 2023-12-28 07:02

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Blog_app", "0014_blog_highlight"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blog",
            name="slug",
            field=models.CharField(default="slug", max_length=20),
        ),
    ]
