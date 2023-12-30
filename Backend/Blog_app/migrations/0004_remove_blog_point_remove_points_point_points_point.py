# Generated by Django 4.2.6 on 2023-12-24 07:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("Blog_app", "0003_blog_paragraph2_remove_blog_point_blog_point"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="blog",
            name="point",
        ),
        migrations.RemoveField(
            model_name="points",
            name="Point",
        ),
        migrations.AddField(
            model_name="points",
            name="point",
            field=models.ForeignKey(
                default=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="blogs",
                to="Blog_app.points",
            ),
        ),
    ]
