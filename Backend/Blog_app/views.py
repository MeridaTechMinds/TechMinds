from django.shortcuts import render,get_object_or_404,get_list_or_404
from rest_framework.response import Response
from rest_framework import status


from rest_framework import viewsets
from rest_framework.decorators import api_view
from .models import Blog, Points
from .serializers import BlogSerializer, pointSerializer,commentSerializer,contactSerializer,ApointmentSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
 
class PointViewSet(viewsets.ModelViewSet):
    queryset = Points.objects.all()
    serializer_class = pointSerializer

@api_view(['GET',])
def catagory_details(request,slug):
    try:
        tasks=Blog.objects.get(slug=slug)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serialized_task=BlogSerializer(tasks,context={'request': request})
    return Response(serialized_task.data)

@api_view(['GET',])
def catagory(request,Category):
    try:
        tasks=get_list_or_404(Blog,Category=Category)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method=="GET":
        serialized_task=BlogSerializer(tasks,many=True,context={'request': request})
        return Response(serialized_task.data)
    
@api_view(['POST',])
def comments_list(request):
    if request.method=='POST':
        serialized_task=commentSerializer(data=request.data)
        if serialized_task.is_valid():
            serialized_task.save()
            return Response(serialized_task.data,status=status.HTTP_201_CREATED)
        
@api_view(['POST',])
def contacts_data(request):
    if request.method=='POST':
        serialized_task=contactSerializer(data=request.data)
        if serialized_task.is_valid():
            serialized_task.save()
            return Response(serialized_task.data,status=status.HTTP_201_CREATED)
        
@api_view(['POST',])
def apointment_data(request):
    if request.method=='POST':
        serialized_task=ApointmentSerializer(data=request.data)
        if serialized_task.is_valid():
            serialized_task.save()
            return Response(serialized_task.data,status=status.HTTP_201_CREATED)