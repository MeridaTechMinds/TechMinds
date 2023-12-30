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
    Heading=models.CharField(max_length=100)
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
    first_name=models.CharField(max_length=100,blank=True)
    last_name=models.CharField(max_length=100)
    company=models.CharField(max_length=100,blank=True)
    phone=models.CharField(max_length=10,blank=True)
    email=models.EmailField(max_length=100,default="email",blank=True)
    interested=models.CharField(max_length=500,blank=True)
    message=models.TextField(default="comment")
