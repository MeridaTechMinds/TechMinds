from rest_framework import serializers
from .models import Blog, Points,Comments,contact,Apointment

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


class contactSerializer(serializers.ModelSerializer):
    class Meta:
        model = contact
        fields = '__all__'

class ApointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apointment
        fields = '__all__'

    