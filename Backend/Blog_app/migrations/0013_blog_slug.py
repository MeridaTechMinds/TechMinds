# Generated by Django 4.2.6 on 2023-12-27 08:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Blog_app", "0012_alter_blog_img"),
    ]

    operations = [
        migrations.AddField(
            model_name="blog",
            name="slug",
            field=models.CharField(default="slug", max_length=150),
        ),
    ]
