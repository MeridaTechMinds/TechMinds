from rest_framework import serializers
from .models import Blog, Points,Comments

class pointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Points
        fields = '__all__'
class commentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    points = pointSerializer(many=True)
    comments = commentSerializer(many=True)
    class Meta:
        model = Blog
        fields = '__all__'



    