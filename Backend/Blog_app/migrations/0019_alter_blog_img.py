# Generated by Django 4.2.6 on 2023-12-28 07:35

import Blog_app.models
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Blog_app", "0018_alter_blog_paragraph1"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blog",
            name="img",
            field=models.ImageField(
                default="image",
                upload_to="images/",
                validators=[Blog_app.models.validate_image_size],
            ),
        ),
    ]
