# Generated by Django 4.2.6 on 2023-12-28 07:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Blog_app", "0017_alter_blog_paragraph1"),
    ]

    operations = [
        migrations.AlterField(
            model_name="blog",
            name="Paragraph1",
            field=models.TextField(max_length=1500),
        ),
    ]
