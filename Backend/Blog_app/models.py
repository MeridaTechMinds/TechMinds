from django.db import models
from datetime import datetime
from django.core.exceptions import ValidationError
def validate_image_size(value):
    max_size = 5 * 1024 * 1024  # 5 MB
    if value.size > max_size:
        raise ValidationError('Maximum allowed size is 5 MB.')

class Blog(models.Model):
    slug=models.CharField(max_length=20,null=False,blank=False,default='slug')
    Main_Title = models.CharField(max_length=200)
    Sub_Title=models.CharField(max_length=200)
    Category=models.CharField(max_length=100)
    Points_Heading=models.CharField(max_length=100)
    Paragraph1 = models.TextField(max_length=1500)
    Paragraph2 = models.TextField(max_length=1500)
    Highlight=models.CharField(max_length=1000,default="Text")
    img=models.ImageField(upload_to='images/',validators=[validate_image_size],default="images")
    points = models.ManyToManyField('Points')
    current_datetime = datetime.now()
    created_at = models.DateTimeField(default=current_datetime)
    comments=models.ManyToManyField("Comments",blank=True,default="comment")

    def __str__(self):
        return self.Main_Title
    
class Points(models.Model):
    point=models.CharField(max_length=500,null=True,blank=True)
    
    def __str__(self):

        return self.point
    
class Comments(models.Model):
    name=models.CharField(max_length=100,default="name",)
    email=models.EmailField(max_length=100,default="email")
    comment=models.TextField(default="comment")

    def __str__(self):
        return self.comment

class contact(models.Model):
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    company=models.CharField(max_length=100)
    phone=models.CharField(max_length=10)
    email=models.EmailField(max_length=100,default="email")
    interested_choices=[
        ('RM', 'MaleRisk Management'),
        ('TC', 'Traditional Counsuling'),
        ('PM', 'Portfilio Management'),
        ('AA', 'Aset Allocation'),
    ]
    interested=models.CharField(max_length=500,choices=interested_choices)
    message=models.TextField(default="comment",blank=True)


class Apointment(models.Model):
    name=models.CharField(max_length=100,blank=True)
    phone=models.CharField(max_length=10,blank=True)
    email=models.EmailField(max_length=100,default="email",blank=True)
    subject_choices=[
        ('RM', 'MaleRisk Management'),
        ('TC', 'Traditional Counsuling'),
        ('PM', 'Portfilio Management'),
        ('AA', 'Aset Allocation'),
    ]
    subjects=models.CharField(max_length=500,choices=subject_choices)
    message=models.TextField(default="comment")
