# Generated by Django 4.2.6 on 2023-12-24 08:43

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Blog_app", "0010_alter_blog_img"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blog",
            name="img",
            field=models.FileField(blank=True, null=True, upload_to="images/"),
        ),
    ]
